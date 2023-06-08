import React from "react";
import { SafeAreaView,View,Text,Image,TouchableWithoutFeedback} from "react-native";
import styles from "./Card.style";

function Card({meal,onSelect})
{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
           
            <View style={styles.body_container}>
                <Image style={styles.image} source={{uri: meal.strCategoryThumb}}></Image>
                <Text style={styles.text}>{meal.strCategory}</Text>
            </View> 
        </TouchableWithoutFeedback>
        
    )
}
export default Card;