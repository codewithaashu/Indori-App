import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import Onboarding from '../Screens/Onboarding';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import News from '../Screens/News';
import Jobs from '../Screens/Jobs';
import Offer from '../Screens/Offer';
import TabNavigation from './TabNavigation';
import WebViewScreen from '../Screens/WebViewScreen';
import JobsDetails from '../Components/JobsDetails';
import { Text, View } from 'react-native';

const AuthNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="bottomTab" component={TabNavigation} options={{headerShown:false}}/>
            <Stack.Screen name="onboarding" component={Onboarding} options={{headerShown:false}}/>
            <Stack.Screen name="splash" component={Splash} options={{headerShown:false}}/>
            <Stack.Screen name="home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="profile" component={Profile} options={{headerShown:false}}/>
            <Stack.Screen name="news" component={News} options={{headerShown:false}}/>
            <Stack.Screen name="jobs" component={Jobs} options={{headerShown:false}}/>
            <Stack.Screen name="jobsDetails" component={JobsDetails} options={{headerShown:false}}/>
            <Stack.Screen name="offers" component={Offer} options={{headerShown:false}}/>
            <Stack.Screen name="webview" component={WebViewScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthNavigation

