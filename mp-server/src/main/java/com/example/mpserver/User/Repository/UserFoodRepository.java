package com.example.mpserver.User.Repository;

import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class UserFoodRepository {

    @Autowired
    MongoTemplate template;
    

    public void insertLog(Document log){
        
        template.insert(log, "Foodlog");

    }

    public List<String> getUserLogById(Integer user_id){

        return template.find(Query.query(Criteria.where("user_id").is(user_id)), String.class, "Foodlog");


    }
    
    
}
