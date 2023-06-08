import React from "react";
import { SafeAreaView,View,Text,Image,FlatList} from "react-native";
import Card from "../components/Cards/Card";
import useFetch from "../hooks/useFetch/useFetch";
import Config from "react-native-config";
import MealsCard from "../components/MealsCard/MealsCard";
import axios from "axios";
function Meals({route , navigation})
{
    const {name} = route.params;
    const {data} = useFetch(Config.API_MEALS_URL+name);
    const handleMealsSelect = (id) => {
        navigation.navigate('Details', {id});
    }
    const rendermeals = ({item}) => <MealsCard info={item} onselect={()  => handleMealsSelect(item.idMeal) }></MealsCard>;
    
    return(
        <SafeAreaView style={{backgroundColor:"yellow",flex:1}}>
            <FlatList data={data.meals} renderItem={rendermeals}></FlatList>
        </SafeAreaView>
        
    )
}
export default Meals;