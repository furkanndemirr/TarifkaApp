import {StyleSheet} from "react-native";

export default StyleSheet.create(
    {
    
        body_container:
        {
            backgroundColor:"white",
            marginVertical:5,
            padding:10,
            margin:10,
            borderTopLeftRadius:50,
            borderBottomLeftRadius:50,
            borderColor:"#e0e0e0",
            flexDirection:"row",
            borderWidth:1,
        },
        image:
        {
            width:100,
            minHeight:100,
            resizeMode:'contain',
            justifyContent:'space-between',
        },
        text:
        {
            color:"black",
            fontWeight:"bold",
            fontSize:18,
            marginTop:33,
            marginLeft:20
            
        }
        
    }
)