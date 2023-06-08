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
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import ForgotPassword from '../Screens/ForgotPassword';
import OtpScreen from '../Screens/OtpScreen';
import CompleteProfile from '../Screens/CompleteProfile';
import ResetPassword from '../Screens/ResetPassword';
import EditProfile from '../Screens/EditProfile';
import Security from '../Screens/Secruity';

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="forgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="resetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="otpScreen"
          component={OtpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="completeProfile"
          component={CompleteProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="bottomTab"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="editProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="security"
          component={Security}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="news"
          component={News}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="jobs"
          component={Jobs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="jobsDetails"
          component={JobsDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="offers"
          component={Offer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="webview"
          component={WebViewScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation

