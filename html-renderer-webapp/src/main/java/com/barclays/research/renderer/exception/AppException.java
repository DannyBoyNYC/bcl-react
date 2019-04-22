package com.barclays.research.renderer.exception;


/**
 * Custom Exception class implementation Should be used to wrap any application exceptions
 */
public class AppException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    private int errorCode;

    public AppException(String message) {
        super(message);
    }

    public AppException(int errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }


    public AppException(String message, Throwable cause) {
        super(message, cause);
    }

    public AppException(int errorCode, String message, Throwable cause) {
        super(message, cause);
        this.errorCode = errorCode;
    }

    public AppException(Throwable cause) {
        super(cause);
    }

    /**
     * 
     * @return
     */
    public int getErrorCode() {
        return errorCode;
    }
}
