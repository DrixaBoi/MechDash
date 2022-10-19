import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Login from '../screens/LoginScreen/Login';
import Register from '../screens/RegisterScreen/Register';

const Stack = createNativeStackNavigator();

const Navigation = () => {
 
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation