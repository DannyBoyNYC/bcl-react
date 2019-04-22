package com.barclays.research.renderer.service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.annotation.PostConstruct;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Service;

import com.barclays.research.contentarchive.commons.util.BasicAuthRestTemplate;
import com.barclays.research.renderer.exception.AppException;

@Service
public class HtmlRendererServiceImpl implements HtmlRendererService {
    
    private static final Logger logger = LoggerFactory.getLogger(HtmlRendererServiceImpl.class);
    
    private static final Pattern HREF_PATTERN = Pattern.compile("(?i)href=(\".*\")\\s*/>");
    
    private static TransformerFactory tFactory = new net.sf.saxon.TransformerFactoryImpl();
        
    private String content;

    private long lastRefreshedTime;
        
    @Value("${service.html_renderer.xslUrl}")
    private String xslUrl;
       
    @Value("${service.html_renderer.xsl.refreshInterval.second}")
    private int refreshIterval;
    
    @Value("${service.html_renderer.xsl.retry.count}")
    private int retryCountConfig;
    
           
    @Autowired
    private BasicAuthRestTemplate restTemplate;
    
    
    @PostConstruct
    public void init(){
        System.setProperty("javax.xml.transform.TransformerFactory",  "net.sf.saxon.TransformerFactoryImpl"); 
    }
 
	/*
	 * (non-Javadoc)
	 * @see com.barclays.research.renderer.service.HtmlRendererService#renderXmlAsHtml(byte[])
	 */
	public String renderXmlAsHtml(byte[] xmlContent,boolean updateReferences,String chapterId) {	
	    try {	        	         	       
	        byte[] updatedXmlContent = xmlContent;
	        if( updateReferences){
	            updatedXmlContent = updateFileReferences(xmlContent);
	        }	      	     
	        return transform(updatedXmlContent,chapterId);
	    }
	    catch(Exception e){
	        throw new AppException(e); 
	    }
	}

	
	/**
	 * Updates the absolute file references to relative references.
	 * Ex: If the file contains the image reference 
	 *  C:\\Users\\sysquarkd\\AppData\\Local\\Temp\\QppServer\\Publishing\\15db2b4c-547f-4416-9b16-425a56542d92\\140_1.0.jpg 
	 *  It will be updated to relative as 
	 *  140_1.0.jpg 
	 * 
	 * @param xmlContent content as byte array
	 * @return
	 */
	private byte[] updateFileReferences(byte[] xmlContent){
	    String content = new String(xmlContent,StandardCharsets.UTF_8);
	    Matcher m = HREF_PATTERN.matcher(content);
        while (m.find()) {
            String actual = m.group(1);
            String updated = m.group(1).replace("\\","/");
            
            boolean replaced = false;
            if( !actual.equals(updated)){
                File file = new File(updated);
                
                if( !updated.equals(file.getName())){
                    content = content.replace(m.group(1), "\"" + file.getName());
                    logger.info("Replaced '{}' with '{}'",actual,updated );
                    replaced = true;
                }                
            }
            
            if( !replaced){
                logger.info("Found a match '{}', but did not get replaced ",actual);
            }          
        }
        return content.getBytes(StandardCharsets.UTF_8);
	}
	
	
	/**
	 * 
	 * @param content
	 * @return
	 * @throws TransformerException
	 * @throws IOException
	 */
	 public String transform(byte[] content,String chapterId) throws TransformerException, IOException {                                                               
                    
        Transformer transformer = tFactory
                    .newTransformer(new StreamSource(IOUtils.toInputStream(getXslContent(), StandardCharsets.UTF_8)));	      
        ByteArrayOutputStream os = new ByteArrayOutputStream();        
        if( StringUtils.trimToNull(chapterId) != null ){
            transformer.setParameter("chapterId", chapterId);
        }            
        transformer.transform(new StreamSource(new ByteArrayInputStream(content)), new StreamResult(os));
        return new String(os.toByteArray(),Charset.forName("utf-8"));	     
	  }
	 	     
     
     /**
      * Retrievs the xsl content
      * @return
      */
     private synchronized String getXslContent() {

         if ( lastRefreshedTime != 0 && ((System.currentTimeMillis() - lastRefreshedTime) <= refreshIterval * 1000)) {
             return content;
         }
         
         int numOfRetry = 0;
         while(true) {
             try {
                 logger.info("Loading the xsl from {} ",xslUrl);
                 HttpEntity<String> response = restTemplate.getForEntity(xslUrl, String.class);        
                 content = response.getBody();
                 lastRefreshedTime = System.currentTimeMillis();
                 return content;
             }
             catch(Exception e){
                 numOfRetry++;
                 if( numOfRetry > retryCountConfig){
                     throw e;
                 }
                 try{
                     Thread.sleep(1000);
                 }
                 catch(Exception ex){
                     Thread.currentThread().interrupt();
                 }
                 
                 logger.error(" Error loading XSL from {} . Retry attempt {} ",xslUrl,numOfRetry );
             }
         }
     }
      
}
