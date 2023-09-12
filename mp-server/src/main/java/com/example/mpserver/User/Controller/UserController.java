package com.example.mpserver.User.Controller;

import org.bson.json.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.mpserver.User.Model.FoodLog;
import com.example.mpserver.User.Repository.UserFoodRepository;
import com.example.mpserver.User.Service.UserService;

import jakarta.json.Json;

@CrossOrigin(origins = "http://localhost:4201", maxAge = 3600, allowCredentials = "true" )
@RestController
@RequestMapping("/db")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    UserFoodRepository userFoodRepository;

    @PostMapping("/postlog")
    public String postLogToMongoDB(@RequestBody String log){

        if(log != null){

            

            System.out.println(log);
            userService.saveLogToDb(log);
            return "received successfully";

        } else{

            return "unsuccessful";
        }

    }

    @GetMapping(path ="/getlog", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getUserLogById(@RequestParam Integer user_id){

        return ResponseEntity.ok().body(userService.getUserLogById(user_id).toString());    
        


    }


    
}
