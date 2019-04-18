package com.barclays.research.renderer.validator;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import org.springframework.web.multipart.MultipartFile;

/**
 * Validates the Uploaded file.
 * @author kamatsan
 *
 */
@Component
public class FileValidator implements Validator{

   // @Override
    public boolean supports(Class clazz) {        
        //just validate the FileUpload instances
        return MultipartFile.class.isAssignableFrom(clazz);
    }

   // @Override
    public void validate(Object target, Errors errors) {            
        MultipartFile file = (MultipartFile)target;
        if(file == null || file.isEmpty() ){
            errors.rejectValue("file", "required.fileUpload");
        }
    }
}