package com.example.mpserver.User.Model;

import java.time.LocalDateTime;
import java.util.List;

import com.example.mpserver.Nutrix.Model.Food;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class FoodLog {

    private String user_id;
    private LocalDateTime dateTime;
    private List<Food> foodList;

    
}
