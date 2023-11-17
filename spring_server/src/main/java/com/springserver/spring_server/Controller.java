package com.springserver.spring_server;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class Controller {
    @GetMapping(value = "path")
    public String getMethodName() {
        return "new SomeData()";
    }

    @GetMapping(value = "/JavaNotes", produces = "application/json")
    public String javaNotes() {
        return "{\r\n" + //
                "        \"problem_name\" : \"palindrome\",\r\n" + //
                "        \"input\" : \"x = 121\",\r\n" + //
                "        \"output\" : \"True\",\r\n" + //
                "        \"Explanation\": \"121 reads as 121 from left to right and from right to left.\"\r\n" + //
                "    }";
    }
}