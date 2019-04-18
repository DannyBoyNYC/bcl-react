package com.barclays.research.renderer.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

/**
 * @author kamatsan
 * @since 1.0.0
 */
@Configuration
@Import({TestConfig.class})
@ComponentScan("com.barclays.research.renderer")
public class TestMvcConfig extends WebMvcConfigurationSupport {


}
