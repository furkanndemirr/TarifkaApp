import React from "react";
import { SafeAreaView,View,Text,Image,ImageBackground,TouchableWithoutFeedback} from "react-native";
import styles from "./MealsCard.style";


function MealsCard({info,onselect})
{
    return(
        <TouchableWithoutFeedback onPress={onselect}>
            <SafeAreaView>
            <View style={styles.body_container}>
                <View style={styles.imageContainer}>
                    <ImageBackground style={styles.image} source={{uri: info.strMealThumb}}>
                <Text style={styles.text}>{info.strMeal}</Text></ImageBackground>
                </View>
                
            </View> 
        </SafeAreaView>
        </TouchableWithoutFeedback>
        
    )
}
export default MealsCard;