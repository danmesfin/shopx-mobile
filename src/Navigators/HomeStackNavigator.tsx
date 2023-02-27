import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screen/HomeScreen';
import ProductDetailScreen from '../Screen/ProductDetailScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Homee" component={HomeScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
