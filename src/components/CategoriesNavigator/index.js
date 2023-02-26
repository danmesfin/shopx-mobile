import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Categories = () => {
  const categories = [
    'Jewelery',
    "Men's Cloth",
    "Women's Cloth",
    'Electronics',
  ];
  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 20,
  },
  card: {
    borderRadius: 15,
    backgroundColor: '#E74C3C',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Categories;
