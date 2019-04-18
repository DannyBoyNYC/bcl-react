package com.barclays.research.renderer.security;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;

/**
 * Authentication provider to create user auth "token".
 *
 * @author humpalpe
 * @since 1.0.0
 */
public class AuthProvider implements AuthenticationProvider {

    /*
     * (non-Javadoc)
     * @see org.springframework.security.authentication.AuthenticationProvider#authenticate(org.springframework.security.core.Authentication)
     */
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {      
        return  new UsernamePasswordAuthenticationToken(authentication.getName(), null, null);      
    }
    
    /*
     * (non-Javadoc)
     * @see org.springframework.security.authentication.AuthenticationProvider#supports(java.lang.Class)
     */
    public boolean supports(Class<?> authentication) {
        return true;
    }
}


