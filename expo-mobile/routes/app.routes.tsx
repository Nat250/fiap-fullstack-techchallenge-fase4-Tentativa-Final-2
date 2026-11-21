import Home from "@/app/screens/Home";
import Login from "@/app/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={Home}/>
                    <Stack.Screen
                        name="Login"
                        component={Login}/>
                </Stack.Navigator>
        </NavigationContainer>
    );
}