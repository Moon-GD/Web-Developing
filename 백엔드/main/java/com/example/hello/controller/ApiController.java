package com.example.hello.controller;

import com.example.hello.dto.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
// 해당 Annotation 으로 Rest Request 를 처리하는 Controller 로 등록
// (Spring 에서는 Request 를 처리하는 클래스를 Controller 로 부름)

@RequestMapping("/api")
// Request Mapping URI를 지정해주는 Annotation
public class ApiController {

    @GetMapping("/hello")
    // http://localhost:9090/api/hello
    public String hello() {
        return "Hello Spring Boot!";
    }

    // JSON
    // req -> object mapper -> object -> method -> object -> object mapper -> json -> response
    @PostMapping("/json")
    public User json(@RequestBody User user) {
        return user;
    }

    @PutMapping("/put")
    public ResponseEntity<User> put(@RequestBody User user) {
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }
}
