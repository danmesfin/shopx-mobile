/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';

import {Provider} from 'react-redux';
import store from './src/store/store';

import App from './src/app';
// import {useDispatch, useSelector} from 'react-redux';

// import SignInScreen from './src/Screen/Auth/SignInScreen';
// import SignupScreen from './src/Screen/Auth/SignUpScreen';

// //import HomeScreen from './src/Screen/HomeScreen';
// import CartScreen from './src/Screen/CartScreen';
// import ProfileScreen from './src/Screen/ProfileScreen';
// import HomeStackNavigator from './src/Navigators/HomeStackNavigator';
// import {createStackNavigator} from '@react-navigation/stack';
// //import CounterScreen from './src/Screen/CounterScreen';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

const Navigation = () => {
  //const {user} = useSelector(state => state.auth);
  //const UserContext = createContext();
  //const [user, setUser] = useState(null);
  //const [isLogedin, setIsLogedIn] = useState(false);

  // if (user) {
  //   setIsLogedIn(true);
  // }

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Navigation;
