import {StyleSheet} from "react-native";

export default StyleSheet.create(
    {
    
        body_container:
        {
            flex:1,
            backgroundColor:"white",
            marginVertical:5,
            
            margin:10,
            borderTopLeftRadius:20,
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20,
            borderTopRightRadius:20,
            borderColor:"#e0e0e0",
            borderWidth:1,
        },
        image:
        {
            
            flex:1,
            height:200,
            resizeMode:'cover',
            justifyContent:'space-between',
        },
        text:
        {
            color:"white",
            backgroundColor: 'gray',
            fontWeight:"bold",
            fontSize:36,
            marginTop:152,
            textAlign: 'center'
            
        },
        imageContainer: {
            borderRadius: 10,
            overflow: 'hidden',
          },
    
        
    }
)