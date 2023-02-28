/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// import {Provider} from 'react-redux';
// import store from './src/store/store';

import {useDispatch, useSelector} from 'react-redux';

import SignInScreen from './Screen/Auth/SignInScreen';
import SignupScreen from './Screen/Auth/SignUpScreen';

//import HomeScreen from './src/Screen/HomeScreen';
import CartScreen from './Screen/CartScreen';
import ProfileScreen from './Screen/ProfileScreen';
import HomeStackNavigator from './Navigators/HomeStackNavigator';
import {createStackNavigator} from '@react-navigation/stack';
//import CounterScreen from './Screen/CounterScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const {user} = useSelector(state => state.auth);
  console.log(user);
  //const UserContext = createContext();
  //const [user, setUser] = useState(null);
  const [isLogedin, setIsLogedIn] = useState(false);

  // if (user) {
  //   console.log('set user');
  //   setIsLogedIn(true);
  // }

  return (
    <NavigationContainer>
      {!user == null ? (
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
          {/* {<Stack.Screen name="counter" component={CounterScreen} />} */}
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
          {/* <Tab.Screen
            name="Home"
            component={HomeStackNavigator}
            options={{headerShown: false}}
          /> */}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
