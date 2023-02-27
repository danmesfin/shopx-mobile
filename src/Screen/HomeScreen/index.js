import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  ScrollView,
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
    <ScrollView style={styles.container}>
      <Categories />

      <View style={styles.header}>
        <Text style={styles.title}>New Arrivals</Text>
        {loading && <ActivityIndicator size="small" color="#fff" />}
      </View>

      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProductCard}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  header: {
    backgroundColor: '#FF7F50',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  productList: {
    justifyContent: 'space-between',
    padding: 20,
  },
});

export default HomeScreen;
