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
import Ionicons from 'react-native-vector-icons/Ionicons';

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
            <Ionicons name="md-trash" size={24} color="red" />
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
      <Text style={styles.heading}>Shopping Cart</Text>
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
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal:</Text>
          <Text style={styles.summaryValue}>${totalPrice.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Shipping:</Text>
          <Text style={styles.summaryValue}>$0.00</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Tax:</Text>
          <Text style={styles.summaryValue}>$0.00</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Total:</Text>
          <Text style={styles.summaryValue}>${totalPrice.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={styles.checkoutButton}
          title="Checkout"
          onPress={() => {}}
          disabled={totalQuantity === 0}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  empty: {
    fontSize: 18,
    marginTop: 20,
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
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 5,
  },
  actions: {
    flexDirection: 'row',
    marginTop: 10,
  },
  quantity: {
    width: 40,
  },
  quantityText: {
    fontSize: 18,
    textAlign: 'center',
  },
  summary: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  summaryValue: {
    fontSize: 16,
  },
  checkoutButton: {
    backgroundColor: '#f70',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  checkoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CartScreen;
