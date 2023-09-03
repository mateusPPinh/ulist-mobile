import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Search from "../screens/Search";
import Details from "../screens/Details";
import UserList from "../screens/UserList"; 

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Search" component={Search} options={{headerShown: false}} />
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}} />
        <Stack.Screen name="UserList" component={UserList} options={{headerShown: false}} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
