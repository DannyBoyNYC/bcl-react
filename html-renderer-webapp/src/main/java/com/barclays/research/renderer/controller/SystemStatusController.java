package com.barclays.research.renderer.controller;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/REST")
@RestController
public class SystemStatusController {

    @Autowired
    private Environment env;

    @RequestMapping(value = "/status", method = RequestMethod.GET)
    public Map<String, Object> getStatus(
        @Value("${build.version}") String version,
        @Value("${build.timestamp}") String timestamp
    ) {
               
        Map<String, Object> status = new LinkedHashMap<>();
        status.put("name", "html-renderer");
        status.put("description", "Html Renderer Service");
        status.put("version", version);
        status.put("timestamp", timestamp);
        status.put("profiles", getProfiles());
        return status;
    }

    @RequestMapping(value = "/alive", method = RequestMethod.GET)
    public boolean isAlive() {
        return true;
    }

    private String[] getProfiles() {
        String[] profiles = env.getActiveProfiles();
        return profiles != null ? profiles : new String[]{};
    }

}
