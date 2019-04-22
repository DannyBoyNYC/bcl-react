package com.barclays.research.renderer.config;

import java.util.EnumSet;

import javax.servlet.DispatcherType;
import javax.servlet.Filter;
import javax.servlet.FilterRegistration;
import javax.servlet.ServletContext;
import javax.servlet.ServletRegistration;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.web.context.AbstractSecurityWebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.DispatcherServlet;

import com.barclays.research.commons.log.filter.LoggingFilter;

/**
 * Web Application Initializer. Replacement for web.xml.
 *
 * @author kamatsan
 * @since 1.0.0
 */
public class WebAppInitializer extends AbstractSecurityWebApplicationInitializer {

    private static final Logger logger = LoggerFactory.getLogger(WebAppInitializer.class);

    @Override
    protected void afterSpringSecurityFilterChain(ServletContext servletContext) {
        AnnotationConfigWebApplicationContext appContext = new AnnotationConfigWebApplicationContext();
        appContext.register(com.barclays.research.renderer.config.AppConfig.class);
        servletContext.addListener(new ContextLoaderListener(appContext));

        ServletRegistration.Dynamic dispatcher = servletContext.addServlet("dispatcher", new DispatcherServlet(appContext));
        dispatcher.setLoadOnStartup(1);
        dispatcher.addMapping("/*");

        EnumSet<DispatcherType> dispatcherTypes = EnumSet.of(DispatcherType.REQUEST, DispatcherType.FORWARD);
        
       // configure loggingFilter
        logger.info("autoconfiguring LoggingFilter");
        addFilterIfDoesntExist(servletContext, "requestIdFilter", LoggingFilter.class,
                null, true, "/*");
        
              
        CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter();
        characterEncodingFilter.setEncoding("UTF-8");
        characterEncodingFilter.setForceEncoding(true);

        logger.info("autoconfiguring characterEncodingFilter");
        addFilterIfDoesntExist(servletContext, "characterEncoding", characterEncodingFilter, dispatcherTypes, true, "/*");

    }

    
    /**
     * Adds the Servlet Filter
     * @param context
     * @param name
     * @param filterClass
     * @param dispatcherTypes
     * @param isMatchAfter
     * @param urlPatterns
     */
    public void addFilterIfDoesntExist(final ServletContext context, final String name, final Class<? extends Filter> filterClass,
                    final EnumSet<DispatcherType> dispatcherTypes, final boolean isMatchAfter, final String... urlPatterns) {

        FilterRegistration.Dynamic filter = context.addFilter(name, filterClass);
        // if filter already exists, addFilter() will return null
        if (filter != null) {
            filter.addMappingForUrlPatterns(dispatcherTypes, isMatchAfter, urlPatterns);
        }
    }

    /**
     * Adds the Servlet Filter
     * @param context
     * @param name
     * @param filterInstance
     * @param dispatcherTypes
     * @param isMatchAfter
     * @param urlPatterns
     */
    public void addFilterIfDoesntExist(final ServletContext context, final String name, final Filter filterInstance,
                    final EnumSet<DispatcherType> dispatcherTypes, final boolean isMatchAfter, final String... urlPatterns) {

        FilterRegistration.Dynamic filter = context.addFilter(name, filterInstance);
        // if filter already exists, addFilter() will return null
        if (filter != null) {
            filter.addMappingForUrlPatterns(dispatcherTypes, isMatchAfter, urlPatterns);
        }
    }

}
