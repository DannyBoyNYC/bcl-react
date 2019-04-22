package com.barclays.research.renderer.controller;

import org.apache.commons.lang.exception.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Generic error handler for REST controllers. Logs error into application log and return the root cause.
 *
 */

@Component
@ControllerAdvice(annotations = Controller.class)
public final class ErrorHandler {

    private static final Logger logger = LoggerFactory.getLogger(ErrorHandler.class);

    /**
     * Handles any all exceptions thrown by controller
     * 
     * @param e Underlying exception holding information about faulty state.
     * @return root cause response.
     */
    @ResponseBody
    @ExceptionHandler({Exception.class})
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public String handleException(Exception e) {
        logger.error("Error handling the request", e);
        return ExceptionUtils.getRootCause(e).getMessage();
    }
}
