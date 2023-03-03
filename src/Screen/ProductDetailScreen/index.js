import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Rating from '../../components/Rating';

const ProductDetailScreen = ({route}) => {
  const {productId} = route.params;
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`,
        );
        setProduct(response.data);
      } catch (error) {
        console.log('Error fetching product: ', error);
      }
    };
    fetchData();
  }, [productId]);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Add logic to add product to cart
    console.log(`Added ${quantity} ${product.title} to cart`);
  };

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Rating rating={product.rating.rate} count={product.rating.count} />
      <Text style={styles.description}>{product.description}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decrementQuantity}>
          <FontAwesome name="minus" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={incrementQuantity}>
          <FontAwesome name="plus" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.favoriteButton}>
          <FontAwesome name="heart-o" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#F6F6F6',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantity: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  price: {
    color: '#FF7F50',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  favoriteButton: {
    backgroundColor: '#FED7D7',
    borderRadius: 50,
    padding: 10,
  },
  addToCartButton: {
    backgroundColor: '#FF7F50',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
