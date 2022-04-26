package com.example.practice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
// 해당 Annotation 으로 Rest Request 를 처리하는 Controller 로 등록
// ( Spring 에서는 Request 를 처리하는 Class 를 Controller 라고 부름 )

@RequestMapping("/api")
// Request Mapping URL 을 지정해주는 Annotation
public class ApiController {

    @GetMapping("/hello")
    // http://localhost:8080/api/hello
    public String hello() {
        return "Hello SpringFramework";
    }
}
