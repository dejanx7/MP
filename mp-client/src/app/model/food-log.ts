import { Food } from "./food";

export interface FoodLog {
    
    user_id :string;
    dateTime : Date;
    foodList : Food[];
}


