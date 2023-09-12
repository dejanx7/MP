package com.example.mpserver.User.Repository;

import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.MatchOperation;
import org.springframework.data.mongodb.core.aggregation.ProjectionOperation;
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


    // db.Foodlog.aggregate([
// {
//     $match : {user_id : 6}
// },
// {
//     $project : {DateTime : "$DateTime", Food : "$Food"}
// }
// ])

    public List<String> getUserLogById(Integer user_id){

        MatchOperation matchUserId = Aggregation.match(Criteria.where("user_id").is(user_id));
        ProjectionOperation projectFields = Aggregation.project("DateTime", "Food");
        Aggregation pipeline = Aggregation.newAggregation(matchUserId, projectFields);

        AggregationResults<String> results = template.aggregate(pipeline, "Foodlog", String.class);
    
        return results.getMappedResults();

    
        

    }

    public void deleteUserLog(String logId){

        template.remove(Query.query(Criteria.where("_id").is(logId)), "Foodlog");


    }
    
    
}
