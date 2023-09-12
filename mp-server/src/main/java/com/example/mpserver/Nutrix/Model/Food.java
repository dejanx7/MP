package com.example.mpserver.Nutrix.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Food {
    

    private String Name;
    private String servingQty;
    private Integer Calories;
    private Integer totalFat;
    private Integer saturatedFat;
    private Integer carb;
    private Integer protein;
    private Integer sugar;
    private Integer fiber;
    private Integer cholesterol;
    private Integer sodium;
    private Integer potassium;
    private String image;



}
