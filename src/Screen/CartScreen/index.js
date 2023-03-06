import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeItemFromCart} from '../../reducers/cartSlice';

const CartScreen = () => {
  const dispatch = useDispatch();
  const {items, totalQuantity, totalPrice} = useSelector(state => state.cart);

  const handleRemoveItem = id => {
    dispatch(removeItemFromCart(id));
  };

  const renderCartItem = ({item}) => (
    <View style={styles.cartItem}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
            <Text style={styles.remove}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.quantity}>
        <Text style={styles.quantityText}>{item.quantity}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cart</Text>
      {totalQuantity === 0 ? (
        <Text style={styles.empty}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={items}
          renderItem={renderCartItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total ({totalQuantity} {totalQuantity === 1 ? 'item' : 'items'}): $
          {totalPrice.toFixed(2)}
        </Text>
        <TouchableOpacity
          title="Checkout"
          onPress={() => {}}
          disabled={totalQuantity === 0}>
          <Text>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  empty: {
    fontSize: 18,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  actions: {
    flexDirection: 'row',
  },
  remove: {
    color: 'red',
    fontWeight: 'bold',
    marginRight: 10,
  },
  quantity: {
    width: 50,
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  summary: {
    marginTop: 20,
    alignItems: 'center',
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
