package com.barclays.research.renderer.rest;

import java.lang.annotation.Annotation;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.method.annotation.ExceptionHandlerMethodResolver;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.mvc.method.annotation.ExceptionHandlerExceptionResolver;
import org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod;

import com.barclays.research.renderer.config.TestMvcConfig;
import com.barclays.research.renderer.controller.ErrorHandler;
import com.barclays.rp.web.spring.PartialHandlerMethodReturnValueHandler;
import com.fasterxml.jackson.databind.ObjectMapper;


/**
 * @author kamatsan
 * @since 1.0.0
 */

@WebAppConfiguration
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {TestMvcConfig.class})
public abstract class AbstractRestTest implements ApplicationContextAware, InitializingBean {

    protected final static String USER_IN_CONTEXT = "test-user";

    protected MockMvc mvc;
    protected ApplicationContext ctxt;
    protected ObjectMapper json = new ObjectMapper();
    private MappingJackson2HttpMessageConverter jsonConverter = new MappingJackson2HttpMessageConverter();

    @Autowired
    private ViewResolver mvcViewResolver;


    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.ctxt = applicationContext;
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        // mock MVC
        mvc = MockMvcBuilders.standaloneSetup(getAnnotatedBeans(Controller.class))
                        .setCustomReturnValueHandlers(partialReturnHandler(Collections.singletonList(jsonConverter)))
                        .setHandlerExceptionResolvers(exceptionResolver()).setMessageConverters(jsonConverter).build();
    }

    @Before
    public void authenticate() {
        SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(USER_IN_CONTEXT, null, null));
    }


    private HandlerMethodReturnValueHandler partialReturnHandler(List<HttpMessageConverter<?>> converters) {
        PartialHandlerMethodReturnValueHandler handler = new PartialHandlerMethodReturnValueHandler(converters);
        handler.setYogaViewResolver(mvcViewResolver);
        return handler;
    }

    private Object[] getAnnotatedBeans(Class<? extends Annotation> annotation) {
        Collection<?> beans = ctxt.getBeansWithAnnotation(annotation).values();
        return beans.toArray(new Object[beans.size()]);
    }

    private ExceptionHandlerExceptionResolver exceptionResolver() {
        // to resolve exception
        ExceptionHandlerExceptionResolver exceptionResolver = new ExceptionHandlerExceptionResolver() {
            protected ServletInvocableHandlerMethod getExceptionHandlerMethod(HandlerMethod handler, Exception exception) {
                return new ServletInvocableHandlerMethod(new ErrorHandler(),
                                new ExceptionHandlerMethodResolver(ErrorHandler.class).resolveMethod(exception));
            }
        };

        // hook in JSON converter
        exceptionResolver.setMessageConverters(Arrays.asList(jsonConverter));

        // init the resolver
        exceptionResolver.afterPropertiesSet();

        return exceptionResolver;
    }

}
