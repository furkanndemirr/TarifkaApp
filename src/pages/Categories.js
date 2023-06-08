import React from "react";
import { SafeAreaView,View,Text,Image,FlatList} from "react-native";
import Card from "../components/Cards/Card";
import useFetch from "../hooks/useFetch/useFetch";
import Config from "react-native-config";

function Categories({navigation})
{
    const {data} = useFetch(Config.API_URL);
    const handleCategoriesSelect=(name) =>{
        navigation.navigate("Meals",{name});
    }
    const rendercategories = ({item}) => <Card meal={item} onSelect={()=>handleCategoriesSelect(item.strCategory)}></Card>;
 
    return(
        <SafeAreaView style={{backgroundColor:"yellow",flex:1}}>
            <FlatList data={data.categories} renderItem={rendercategories} ></FlatList>
        </SafeAreaView>
        
    )
}
export default Categories;