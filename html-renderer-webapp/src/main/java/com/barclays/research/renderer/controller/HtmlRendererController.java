package com.barclays.research.renderer.controller;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.barclays.research.renderer.exception.AppException;
import com.barclays.research.renderer.service.HtmlRendererService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import springfox.documentation.annotations.ApiIgnore;


/**
 * Handles html rendering requests.
 */
@Api("Html Renderer API")
@Controller
public class HtmlRendererController {

    private static final Logger logger = LoggerFactory.getLogger(HtmlRendererController.class);

    @Autowired
    private HtmlRendererService service;
    
    @Value("${research.rootDir}")
    private String appRootDir;
            
    
    /**
     * Returns the HTML content for a given Quark XML 
     * @param inputFile Quark XML 
     * @param updateReferences if true, updates the resource references in the generated html with relative path. Pass it as true for Preview.
     */
    @RequestMapping(value = "/xmlAsHtml", method = RequestMethod.POST)
    @ApiOperation(value = "Generates html from xml", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.TEXT_HTML_VALUE,
    notes = "Generates html from quark xml")
    @ApiImplicitParams({@ApiImplicitParam(dataType = "file", name = "inputFile", paramType = "body")})
    public void renderXmlAsHtml(@RequestParam("inputFile") @ApiParam(access = "hidden") @ApiIgnore MultipartFile inputFile, 
                    @RequestParam(value="updateReferences", required = false, defaultValue = "false") @ApiParam("Update reference indicator. Pass true for preview") boolean updateReferences,
                    @RequestParam(value="chapterId", required = false) @ApiParam("ChapterId, required for chapter rendition ") String chapterId,
                    HttpServletResponse response)  throws IOException {       
        logInputFileDetails(inputFile);
        writeToResponse(service.renderXmlAsHtml(inputFile.getBytes(),updateReferences,chapterId), response);       
    }
    
       
    
    /**
     * Writes the content to the response stream
     * @param htmlContent
     * @param response
     */
    private void writeToResponse(String htmlContent, HttpServletResponse response) {
        
        try{
            response.setContentType(MimeTypeUtils.TEXT_HTML_VALUE);
            byte[] bytes = htmlContent.getBytes(StandardCharsets.UTF_8);
            response.setContentLength(bytes.length);
            response.getWriter().println(htmlContent);
        }
        catch(Exception e){
            throw new AppException(e); 
        }
    }

    /**
     * 
     * @param inputFile
     */
    private void logInputFileDetails(MultipartFile inputFile) {
        try{ 
            logger.info("Received a request to render HTML from XML.Input FileName='{}'; ContentType='{}'; Size='{}'",inputFile.getOriginalFilename(),inputFile.getContentType(),inputFile.getSize());  
            FileUtils.writeByteArrayToFile(new File(appRootDir + "/logs/html-renderer/" + System.nanoTime() + ".xml"), inputFile.getBytes());
        }
        catch(Exception e){
            // Ignore & log the error for now.
            logger.error("Error logginng the input file details",e);
        }
    }

}
