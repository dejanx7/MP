package com.example.mpserver.User.Service;

import java.io.StringReader;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mpserver.Nutrix.Model.Food;
import com.example.mpserver.User.Repository.UserFoodRepository;

import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;
import jakarta.json.JsonValue;

@Service
public class UserService {

    @Autowired
    UserFoodRepository userFoodRepository;


    public String generateid(){

        return UUID.randomUUID().toString().substring(0,8);
    }

    public void saveLogToDb(String log) {

        JsonReader reader = Json.createReader(new StringReader(log));
        JsonObject logObj = reader.readObject();

        System.out.println("log object is " + logObj);

        Document newLog = new Document();

        List<Food> foodListArray = new ArrayList<Food>();

        Integer userid = logObj.getInt("user_id");
        String datetime = logObj.getString("dateTime");
        JsonArray foodlist = logObj.getJsonArray("foodList");

        for (JsonValue food : foodlist) {

            Food fooditem = new Food();
            fooditem.setName(food.asJsonObject().getString("Name"));
            fooditem.setServingQty(food.asJsonObject().getString("Serving_Size"));
            fooditem.setCalories(food.asJsonObject().getInt("Calories"));
            fooditem.setTotalFat(food.asJsonObject().getInt("Total_Fat"));
            fooditem.setSaturatedFat(food.asJsonObject().getInt("Saturated_Fat"));
            fooditem.setCarb(food.asJsonObject().getInt("Total_Carbohydrates"));
            fooditem.setProtein(food.asJsonObject().getInt("Protein"));
            fooditem.setSugar(food.asJsonObject().getInt("Sugars"));
            fooditem.setFiber(food.asJsonObject().getInt("Dietary_Fiber"));
            fooditem.setCholesterol(food.asJsonObject().getInt("Cholesterol"));
            fooditem.setSodium(food.asJsonObject().getInt("Sodium"));
            fooditem.setPotassium(food.asJsonObject().getInt("Potassium"));
            fooditem.setImage(food.asJsonObject().getString("Image"));

            foodListArray.add(fooditem);

        }

        newLog.append("_id", generateid());
        newLog.append("user_id", userid);
        newLog.append("DateTime", datetime);
        newLog.append("Food", foodListArray);

        userFoodRepository.insertLog(newLog);

    }

    public List<String> getUserLogById(Integer user_id){

        return userFoodRepository.getUserLogById(user_id);


    }

    public void deleteUserLog(String logId){

        userFoodRepository.deleteUserLog(logId);
    }

}
