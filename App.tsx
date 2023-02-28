/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import SignInScreen from './src/Screen/Auth/SignInScreen';
import SignupScreen from './src/Screen/Auth/SignUpScreen';

//import HomeScreen from './src/Screen/HomeScreen';
import CartScreen from './src/Screen/CartScreen';
import ProfileScreen from './src/Screen/ProfileScreen';
import HomeStackNavigator from './src/Navigators/HomeStackNavigator';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  const [isLogedin, setIsLogedIn] = useState(false);
  return isLogedin ? (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Cart') {
              iconName = 'shopping-cart';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#e76f51',
          inactiveTintColor: '#264653',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
