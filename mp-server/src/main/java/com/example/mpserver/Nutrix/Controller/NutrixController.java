package com.example.mpserver.Nutrix.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.mpserver.Nutrix.Service.NutrixService;

@CrossOrigin(origins = "http://localhost:4201", maxAge = 3600, allowCredentials = "true" )
@RestController
@RequestMapping(path = "api/nutri")
public class NutrixController {

    @Autowired
    NutrixService nutrixService;
    @GetMapping(path ="/getmacros" , produces = MediaType.APPLICATION_JSON_VALUE)
    
    public ResponseEntity<String> getQueryResult(@RequestParam String query){

        
        String searchResult = nutrixService.getMacros(query);

        

        if (searchResult == null){

            return ResponseEntity.ok().body("Invalid Search");
        }
        else{

            return ResponseEntity.ok(searchResult);


        }
        
       







    }


    
    
}
