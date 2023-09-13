package com.example.mpserver.Mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class MailController {

    @Autowired
    MailService mailService;
    @PostMapping("/send")
    public String sendMail(@RequestParam String toEmail, @RequestParam String subject, @RequestParam String message){


        mailService.sendSimpleEmail(toEmail, subject, message);

         return "mail sent";
    }
    
}
