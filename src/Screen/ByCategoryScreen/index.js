import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import ProductCard from '../../components/ProductCard';

const CategoryScreen = ({route}) => {
  const {category} = route.params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`,
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching products: ', error);
      }
    };
    fetchData();
  }, [category]);

  const handlePress = id => {
    navigation.navigate('ProductDetail', {productId: id});
  };

  const renderProductCard = ({item}) => (
    <ProductCard product={item} onPress={() => handlePress(item.id)} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{category}</Text>
        {loading && <ActivityIndicator size="small" color="#fff" />}
      </View>

      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProductCard}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
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

export default CategoryScreen;
