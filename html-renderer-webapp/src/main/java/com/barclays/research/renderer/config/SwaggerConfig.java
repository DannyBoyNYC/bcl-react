package com.barclays.research.renderer.config;

import static springfox.documentation.schema.AlternateTypeRules.newRule;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;
import java.util.Properties;

import org.springframework.context.EnvironmentAware;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.barclays.research.commons.PortalUtils;
import com.barclays.research.commons.environment.AccessType;
import com.fasterxml.classmate.TypeResolver;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.schema.WildcardType;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * Swagger (REST API Documentation) configuration.
 * 
 * @author humpalpe
 * @since 1.0.0
 */
@Configuration
@EnableSwagger2
public class SwaggerConfig extends WebMvcConfigurerAdapter implements EnvironmentAware {

    private static final String LOCALHOST = "localhost";
    private static final String SWAGGER_HOST = "springfox.documentation.swagger.v2.host";

    private static final String[] CLASSPATH_RESOURCE_LOCATIONS = {
        "classpath:/META-INF/resources/", "classpath:/resources/", "classpath:/static/", "classpath:/public/"
    };

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**").addResourceLocations(CLASSPATH_RESOURCE_LOCATIONS);
    }
    
    
    @Override
    public void setEnvironment(Environment springEnvironment) {
        // get environment (e.g. QA, STAGE or PROD) driven by spring.profiles.active
        String baseUrl = PortalUtils.baseUrl(AccessType.USER);
        // set custom URL (just for real env)
        if (!baseUrl.contains(LOCALHOST)) {
            // remove http from baseUrl (provided by Swagger already)
            baseUrl = baseUrl.replace("http://", "");
            // inject it into Swagger settings
            Properties system = System.getProperties();
            system.setProperty(SWAGGER_HOST, String.format("%s", baseUrl));
        }
    }

    @Bean
    public Docket swaggerApi() {
        TypeResolver typeResolver = new TypeResolver();
        return new Docket(DocumentationType.SWAGGER_2)
            .select()
            .apis(RequestHandlerSelectors.basePackage("com.barclays.research.renderer.controller"))
            .paths(PathSelectors.any())
            .build()
            .pathMapping("/")
            .apiInfo(apiInfo())
            .directModelSubstitute(LocalDate.class, String.class)
            .alternateTypeRules(
                    newRule(typeResolver.resolve(Collection.class, WildcardType.class), typeResolver.resolve(List.class, WildcardType.class))
            );
    }
    
    private ApiInfo apiInfo() {
        return new ApiInfo(
                "Skeleton Application API",
                "Provides API methods for data stored in skeleton application.",
                "v1.0",
                "",
                new Contact(
                    "Sandesh Kamath / Murugavel Bharathiraj",
                    "https://onephonebook.barclays.intranet/GTD/Profile.aspx?ID=287684",
                    "sandesh.kamath@barclays.com,Murugavel.Bharathiraj@barclayscapital.com"
                ),
                "Barclays License",
                "http://www.barclays.com"
        );
    }
}
