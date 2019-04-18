package com.barclays.research.renderer.config;

import java.util.List;

import javax.xml.transform.Source;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.converter.FormHttpMessageConverter;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.http.converter.xml.SourceHttpMessageConverter;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

import com.barclays.research.commons.log.interceptor.LoggingHandlerInterceptor;
import com.barclays.research.contentarchive.commons.util.BasicAuthRestTemplate;
import com.barclays.research.contentarchive.commons.util.PasswordUtils;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * Base application (WEB) configuration.
 *
 * @author kamatsan
 * @since 1.0.0
 */
// @EnableWebMvc
@Configuration
@EnableSwagger2
@ComponentScan({"com.barclays.research.renderer.controller",
    "com.barclays.research.renderer.service",
    "com.barclays.research.renderer.validator",
    "com.barclays.research.contentarchive.commons.util"})
@Import({SwaggerConfig.class, SecurityConfig.class})
@PropertySource({ "classpath:renderer.default.properties",
    "classpath:renderer.${research.env}.properties",
    "classpath:build.properties"})
public class AppConfig extends WebMvcConfigurationSupport {

    @Autowired
    private PasswordUtils passwordUtils;
    
    @Value("${service.html_renderer.userId}")
    private String batchUserId;


    @Override
    protected void addResourceHandlers(final ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static/**").addResourceLocations("/static/");
        registry.addResourceHandler("/webjars/**").addResourceLocations("/webjars/");
        registry.addResourceHandler("/swagger-ui.html").addResourceLocations("/");
    }

    @Override
    protected void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
        converters.add(new FormHttpMessageConverter());
        converters.add(new StringHttpMessageConverter());
        converters.add(new SourceHttpMessageConverter<Source>());
        converters.add(new MappingJackson2HttpMessageConverter(objectMapper()));
    }

    /**
     * 
     * @return
     */
    public ObjectMapper objectMapper() {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(MapperFeature.SORT_PROPERTIES_ALPHABETICALLY, true);
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, true);
        objectMapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        return objectMapper;
    }

    @Bean
    public CommonsMultipartResolver multipartResolver() {
        CommonsMultipartResolver resolver = new CommonsMultipartResolver();
        resolver.setDefaultEncoding("utf-8");
        return resolver;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // turn it on globally
        registry.addInterceptor(new LoggingHandlerInterceptor());
    }

    @Bean
    public BasicAuthRestTemplate htmlRendererRestTemplate() {
        String password = passwordUtils.getUserPassword(batchUserId);
        return new BasicAuthRestTemplate(batchUserId, password);
    }

}
