import React from "react";
import { SafeAreaView,View,Text,Image,FlatList} from "react-native";
import useFetch from "../hooks/useFetch/useFetch";
import Config from "react-native-config";
import DetailCard from "../components/DetailCard/DetailCard";
import axios from "axios";
function Detail({ route })
{
    const {id} = route.params
    const {data} = useFetch(Config.API_DETAIL_URL + id)
    const renderMeal = ({ item }) => <DetailCard item={item}/>
    return(
        
        <SafeAreaView>
        <FlatList
            data={data.meals}
            renderItem={renderMeal}
        />
    </SafeAreaView>
        
    )
}
export default Detail;