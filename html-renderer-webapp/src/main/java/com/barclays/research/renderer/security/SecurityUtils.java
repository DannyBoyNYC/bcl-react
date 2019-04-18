package com.barclays.research.renderer.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 * Security utilities.
 *
 * @author kamatsan
 * @since 1.0.0
 */
public final class SecurityUtils {
    
    /**
     * Hide the constructor
     */
    private SecurityUtils(){
        
    }

    /**
     * Get currently logged in user.
     * 
     * @return username or null if no user is in context.
     */
    public static String getUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            return null;
        } else {
            return authentication.getName();
        }
    }

}
