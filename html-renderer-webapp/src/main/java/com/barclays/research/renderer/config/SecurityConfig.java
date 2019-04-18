package com.barclays.research.renderer.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.Http403ForbiddenEntryPoint;
import org.springframework.security.web.authentication.preauth.RequestHeaderAuthenticationFilter;

import com.barclays.research.commons.security.AutomaticAuthenticationFilter;
import com.barclays.research.commons.security.PreAuthenticationFactory;
import com.barclays.research.commons.security.UsernameWithoutCredentialsAuthenticationProvider;

/**
 * Spring Security Configuration
 *
 * @author humpalpe
 * @since 1.0.0
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Value("${dev.local.user:NA}")
    private String localUserName;

    @Override
    public void configure(WebSecurity webSecurity) throws Exception {
        webSecurity
                .ignoring()
                .antMatchers("/resources/**")
                .antMatchers("/webjars/**")
                .antMatchers("/static/**");
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        /*       
        http.csrf().disable();
        http.authorizeRequests().antMatchers("/**").authenticated();
        http.addFilter(localhostFilter());
        http.addFilter(getPortalSiteFilter());
        http.authenticationProvider(getAuthenticationProvider());
        http.exceptionHandling().authenticationEntryPoint(new Http403ForbiddenEntryPoint());
        */
       
        http.csrf().disable().addFilter(localhostFilter());
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authProvider());
    }

    @Bean
    public AutomaticAuthenticationFilter localhostFilter() throws Exception {
        AutomaticAuthenticationFilter filter = new AutomaticAuthenticationFilter();
        filter.setUsername(localUserName);
        filter.setAuthenticationManager(authenticationManagerBean());
        return filter;
    }

    @Bean
    public AuthenticationProvider authProvider() {
        return new UsernameWithoutCredentialsAuthenticationProvider();
    }

    @Bean
    public RequestHeaderAuthenticationFilter getPortalSiteFilter() throws Exception {
        RequestHeaderAuthenticationFilter filter = PreAuthenticationFactory.createRequestHeaderAuthenticationFilter(
                PreAuthenticationFactory.HEADER.PORTAL_USER.value(), authenticationManagerBean()
        );

        return filter;
    }

    @Bean
    public AuthenticationProvider getAuthenticationProvider() {
        return PreAuthenticationFactory.createUsernameWithoutCredentialsAuthenticationProvider();
    }

}