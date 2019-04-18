package com.barclays.research.renderer.security;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.web.authentication.preauth.AbstractPreAuthenticatedProcessingFilter;

/**
 * Localhost authentication filter to allow local development.
 *
 * @author humpalpe
 * @since 1.0.0
 */
public class AutomaticAuthenticationFilter extends AbstractPreAuthenticatedProcessingFilter {

    private static final Logger logger = LoggerFactory.getLogger(AutomaticAuthenticationFilter.class);

    private static final String LOCALHOST_IPV4 = "127.0.0.1";
    private static final String LOCALHOST_IPV6 = "0:0:0:0:0:0:0:1";

    private String username;

    public void setUsername(String username) {
        this.username = username;
    }

    private boolean isFromLocalHost(ServletRequest request) {
        return (request.getRemoteAddr().equals(LOCALHOST_IPV4) || request.getRemoteAddr().equals(LOCALHOST_IPV6));
    }

    @Override
    protected Object getPreAuthenticatedPrincipal(HttpServletRequest request) {
        if (isFromLocalHost(request)) {
            logger.debug("Request is coming from localhost. Returning pre-configured username ...");
            return username;
        }

        return null;
    }

    @Override
    protected Object getPreAuthenticatedCredentials(HttpServletRequest request) {
        return "N/A";
    }

}
