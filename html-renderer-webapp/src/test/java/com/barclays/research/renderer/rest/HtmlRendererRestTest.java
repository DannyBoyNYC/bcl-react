package com.barclays.research.renderer.rest;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.StringUtils;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

/**
 * HtmlRenderer Rest controller test
 * 
 * @author kamastsan
 * @since 1.0.0
 */
public class HtmlRendererRestTest extends AbstractRestTest {

	static{
		System.setProperty("research.env", "qa");
	}

     /**
     * Test for xml to html 
     * 
     * @throws Exception
     */
    @Test
    public void xmlToHtmlTest() throws Exception {
        MockMultipartFile inputFile = new MockMultipartFile("inputFile",
                        FileUtils.readFileToByteArray(new File((HtmlRendererRestTest.class.getResource("/section.xml")).getPath())));
       
        MvcResult result = mvc
                        .perform(MockMvcRequestBuilders.fileUpload("/xmlAsHtml").file(inputFile).accept(MediaType.TEXT_HTML))
                        .andExpect(status().is(200)).andReturn();
          
        Assert.assertNotNull("xmlToHtmlTest failed. Got an empty or null content.", StringUtils.isEmpty(result.getResponse().getContentAsString()));

    }
    
}
