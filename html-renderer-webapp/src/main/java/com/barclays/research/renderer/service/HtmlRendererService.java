package com.barclays.research.renderer.service;

/**
 * Handles html render requests
 */
public interface  HtmlRendererService {
  
    
    /**
     * Renders html from xml content 
     * @param xmlContent xml Content 
     * @param updateReferences If true replaces the references to relative URL
     * @param chapterId The chapterId of the of the chapter for be rendered. The 
     *        chapterId must exists on in the given xmlContent. 
     * @return String The html for a given xmlContent
     */
      String renderXmlAsHtml(byte[] xmlContent,boolean updateReferences,String chapterId);
     	   	   
	 
}
