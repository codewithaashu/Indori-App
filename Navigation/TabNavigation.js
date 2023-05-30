import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import IonIcons from "react-native-vector-icons/Ionicons";
import EntypoIcons from "react-native-vector-icons/Entypo";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FeatherIcons from "react-native-vector-icons/Feather";
import Home from '../Screens/Home';
import News from '../Screens/News';
import Jobs from '../Screens/Jobs';
import Offer from '../Screens/Offer';
import Profile from '../Screens/Profile';
import { colors } from '../Constraints';
const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          elevation: 50,
          height: '7%',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <IonIcons
              name="home"
              size={26}
              color={focused ? colors.buttonBoldFillColor : colors.mutedColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="news"
        component={News}
        options={{
          tabBarIcon: ({focused}) => (
            <EntypoIcons
              name="news"
              size={26}
              color={focused ? colors.buttonBoldFillColor : colors.mutedColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="jobs"
        component={Jobs}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcons
              name="briefcase"
              size={26}
              color={focused ? colors.buttonBoldFillColor : colors.mutedColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="offers"
        component={Offer}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="local-offer"
              size={26}
              color={focused ? colors.buttonBoldFillColor : colors.mutedColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <FeatherIcons
              name="user"
              size={26}
              color={focused ? colors.buttonBoldFillColor : colors.mutedColor}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation