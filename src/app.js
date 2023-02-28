import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

import SignInScreen from './Screen/Auth/SignInScreen';
import SignupScreen from './Screen/Auth/SignUpScreen';
import CartScreen from './Screen/CartScreen';
import ProfileScreen from './Screen/ProfileScreen';
import HomeStackNavigator from './Navigators/HomeStackNavigator';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const App = () => {
  const {user} = useSelector(state => state.auth);

  return (
    <NavigationContainer>
      {user ? (
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
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            options={{headerShown: false}}
            component={SignInScreen}
          />
          <Stack.Screen
            name="SignUp"
            options={{headerShown: false}}
            component={SignupScreen}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
