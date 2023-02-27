import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ProductCard = ({product, onAddToCart, onPress}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ProductDetail', {productId: product.id});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress}>
      <View style={styles.imageContainer}>
        <Image source={{uri: product.image}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
          {product.title}
        </Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
      <View style={styles.addToCartContainer}>
        <TouchableOpacity onPress={onAddToCart}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '48%',
    margin: '1%',
  },
  imageContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  textContainer: {
    padding: 10,
    height: 80,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'Arial',
    color: '#333',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color: '#e76f51',
  },
  addToCartContainer: {
    backgroundColor: '#e76f51',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
});

export default ProductCard;
