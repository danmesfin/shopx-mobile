import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';
import Categories from '../../components/CategoriesNavigator';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching products: ', error);
      }
    };
    fetchData();
  }, []);

  const renderProductCard = ({item}) => <ProductCard product={item} />;

  return (
    <View style={styles.container}>
      <View>
        <Categories />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>New Arrivals</Text>
        {loading && <ActivityIndicator size="small" color="#fff" />}
      </View>
      <View style={styles.body}>
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={renderProductCard}
          numColumns={2}
          contentContainerStyle={styles.productList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#e76f51',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  body: {
    flex: 1,
    padding: 10,
  },
  productList: {
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
