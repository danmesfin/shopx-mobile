import React from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';

const CART_ITEMS = [
  {
    id: '1',
    name: 'Product 1',
    image: 'https://dummyimage.com/50x50/000/fff',
    price: 9.99,
    quantity: 2,
  },
  {
    id: '2',
    name: 'Product 2',
    image: 'https://dummyimage.com/50x50/000/fff',
    price: 12.99,
    quantity: 1,
  },
  {
    id: '3',
    name: 'Product 3',
    image: 'https://dummyimage.com/50x50/000/fff',
    price: 7.99,
    quantity: 3,
  },
];

const CartScreen = () => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Image source={{uri: item.image}} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>
          {item.quantity} x ${item.price}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={CART_ITEMS}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listContent: {
    paddingVertical: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'space-between',
    height: 50,
    paddingVertical: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#999',
  },
});

export default CartScreen;
