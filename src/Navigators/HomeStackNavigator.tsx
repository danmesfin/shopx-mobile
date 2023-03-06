import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screen/HomeScreen';
import ProductDetailScreen from '../Screen/ProductDetailScreen';
import CategoryScreen from '../Screen/ByCategoryScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shope" component={HomeScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="ByCategoryScreen" component={CategoryScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
