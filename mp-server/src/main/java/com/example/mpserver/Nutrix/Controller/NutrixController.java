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

@RestController
@RequestMapping
@CrossOrigin
public class NutrixController {

    @Autowired
    NutrixService nutrixService;

    @GetMapping(path ="/getmacros" , produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getQueryResult(@RequestParam String query){

        
        String searchResult = nutrixService.getMacros(query).toString();

        return ResponseEntity.ok(searchResult);
       







    }


    
    
}
