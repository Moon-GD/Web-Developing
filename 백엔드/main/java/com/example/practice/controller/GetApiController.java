package com.example.practice.controller;

import com.example.practice.dto.UserRequest;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/get")
public class GetApiController {

    // ① GetMapping으로 경로 바로 지정하는 방법
    // ②번 방법에서 method의 값이 이미 GET으로 지정이 되어 있음 => path만 지정해주면 됨
    // url : http://localhost:8080/api/get/hello
    @GetMapping("/hello")
    public String hello() {

        return "hello Spring Boot";
    }

    // ② RequestMapping 으로 경로와 Method로 지정하는 방법 (조금은 old 한 방법)
    // url : http://localhost:8080/api/get/hi
    @RequestMapping(path = "/hi" ,method = RequestMethod.GET)
    public String hi() {
        return "hi Spring Boot";
    }

    // ③ url 상에 변하는 값이 있게 설정하고 싶다면
    // Path-variable이랑 매개 인자는 똑같은 이름으로 설정해주는 것이 좋음
    // url : http://localhost:8080/api/get/path-variable/{PathName}

    // Parameter 값으로 PathVariable 의 이름과 일치시켜 줄 수 없을 때는??
    //
    // GetMapping("~/~/{id}")
    // public String PathVariable(@PathVariable(name = id) String name
    // => @PathVariable 뒤에 (name=~~) 이렇게 설정해주면 됨
    @GetMapping("/path-variable/{name}")
    public String PathVariable(@PathVariable String name) {
        System.out.println("Path Variable : " + name);
        return name;
    }

    @GetMapping(path = "query-param")
    // url : http://localhost:8080/api/get/query-param
    public String queryParam(@RequestParam Map<String, String> queryParam) {
        StringBuilder sb = new StringBuilder();
        // StringBuilder ?
        // String의 경우 문자열에 불변성을 부여
        // 따라서 문자열의 값의 변경이 많아진다면 GC(Garbage Collector)에 과부하가 걸려 성능 저하 발생
        // 따라서 값의 변화가 많을 경우 StringBuilder, StringBuffer 둘 중 하나를 활용
        // StringBuilder : 단일 스레드에서의 성능이 좋음
        // StringBuffer : 멀티 스레드에서의 성능이 좋음
        queryParam.entrySet().forEach((entry) -> {
            System.out.println(entry.getKey());
            System.out.println(entry.getValue());
            System.out.println();

            sb.append(entry.getValue() + "=" + entry.getValue());
        });

        return sb.toString();
    }

    @GetMapping(path = "/query-param02")
    // ② query-param 지정해서 url 설계
    public String queryParam02(
            @RequestParam String name,
            @RequestParam String email,
            @RequestParam int age
    ) {
        System.out.println(name);
        System.out.println(email);
        System.out.println(age);

        return name + " " +  email + " " + age;
    }

    @GetMapping(path = "/query-param03")
    // ③ 객체 활용 url 설계
    public String queryParam03(UserRequest userRequest) {
        System.out.println(userRequest.getName());
        System.out.println(userRequest.getEmail());
        System.out.println(userRequest.getAge());

        return userRequest.toString();
    }

}
