import React from "react";
import { SafeAreaView ,Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Config from "react-native-config";
import Categories from "./src/pages/Categories";
import Meals from "./src/pages/Meals";
import Detail from "./src/pages/Detail";

function App(){
  const Stack = createStackNavigator();
  return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={Categories} options={{headerTitleAlign:"center"
          , headerTintColor:"blue"
        }}></Stack.Screen>
          <Stack.Screen name="Meals" component={Meals}
          options={{headerTitleAlign:"center"
          , headerTintColor:"blue"
        }}></Stack.Screen>
        <Stack.Screen name="Details" component={Detail} options={{headerTitleAlign:"center"
          , headerTintColor:"blue"
        }}></Stack.Screen>
        
        </Stack.Navigator>
      </NavigationContainer>
  )
}
export default App;