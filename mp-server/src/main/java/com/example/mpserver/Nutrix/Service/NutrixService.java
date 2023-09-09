package com.example.mpserver.Nutrix.Service;

import java.io.StringReader;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonArrayBuilder;
import jakarta.json.JsonObject;
import jakarta.json.JsonObjectBuilder;
import jakarta.json.JsonReader;
import jakarta.json.JsonValue;

@Service
public class NutrixService {

    // add to app properties later *******************
    private final String apiURL = "https://trackapi.nutritionix.com/v2/natural/nutrients";
    private final String apiAppId = "3f67edd5";
    private final String apiAppKey = "76dbeae12ed1eaae957a4c0467979214";

    RestTemplate template = new RestTemplate();

    public JsonArray getMacros(String query) {

        JsonObjectBuilder jsonObjectBuilder = Json.createObjectBuilder();
        JsonArrayBuilder jsonArrayBuilder = Json.createArrayBuilder();

        JsonObject queryJsonObject = jsonObjectBuilder.add("query", query).build();

        HttpHeaders headers = new HttpHeaders();
        headers.add("x-app-id", apiAppId);
        headers.add("x-app-key", apiAppKey);
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<String> entity = new HttpEntity<String>(queryJsonObject.toString(), headers);

        ResponseEntity<String> response = template.exchange(apiURL, HttpMethod.POST, entity, String.class);

        JsonReader jsonReader = Json.createReader(new StringReader(response.getBody()));
        JsonObject result = jsonReader.readObject();
        JsonArray data = result.getJsonArray("foods");

        for (JsonValue jsonValue : data) {

            JsonObject foodJsonObject = jsonValue.asJsonObject();

            String name = foodJsonObject.getString("food_name");
            String servingSize = Integer.toString(foodJsonObject.getInt("serving_qty"));
            String servingUnit = foodJsonObject.getString("serving_unit");
            String serving = servingSize + " " + servingUnit;
            Integer calories = foodJsonObject.getInt("nf_calories");
            Integer totalFat = foodJsonObject.getInt("nf_total_fat");
            Integer saturatedFat = foodJsonObject.getInt("nf_saturated_fat");
            Integer carb = foodJsonObject.getInt("nf_total_carbohydrate");
            Integer protein = foodJsonObject.getInt("nf_protein");
            Integer sugar = foodJsonObject.getInt("nf_sugars");
            Integer fiber = foodJsonObject.getInt("nf_dietary_fiber");
            Integer cholesterol = foodJsonObject.getInt("nf_cholesterol");
            Integer sodium = foodJsonObject.getInt("nf_sodium");
            Integer potassium = foodJsonObject.getInt("nf_potassium");
            
            JsonObject photo = foodJsonObject.getJsonObject("photo");
            String imageUrl = photo.getString("highres");

            jsonArrayBuilder.add(jsonObjectBuilder
                    .add("Name", name)
                    .add("Serving_Size", serving)
                    .add("Calories", calories)
                    .add("Total_Fat", totalFat)
                    .add("Saturated_Fat", saturatedFat)
                    .add("Total_Carbohydrates", carb)
                    .add("Protein", protein)
                    .add("Sugars", sugar)
                    .add("Dietary_Fiber", fiber)
                    .add("Cholesterol", cholesterol)
                    .add("Sodium", sodium)
                    .add("Potassium", potassium)
                    .add("Image", imageUrl)

            );

        }

        return jsonArrayBuilder.build();

    }

}
