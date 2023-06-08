import React,{useState,useEffect} from "react";
import { Text } from "react-native";
import axios from "axios";

function useFetch(url)
{
    const [data,setdata]=useState([]);
    // const [loading,setloading]=useState(true);
    // const [error,seterror]=useState(null);

    const fetchData = async () => {
        try{
            const{data : responsedata} = await axios.get(url);
            setdata(responsedata);
        }
        catch(err)
        {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchData();
    },[]);

    return {data};
}
export default useFetch;