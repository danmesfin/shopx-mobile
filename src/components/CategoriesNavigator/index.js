import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const Categories = () => {
  const categories = [
    {
      title: 'Jewelry',
      image: require('../../../assets/jewelery.jpg'),
      color: ['#e53935', '#b71c1c'],
    },
    {
      title: "Men's Clothing",
      image: require('../../../assets/mens_clothing.jpg'),
      color: ['#0097A7', '#006064'],
    },
    {
      title: "Women's Clothing",
      image: require('../../../assets/womens_cloth.jpg'),
      color: ['#5C6BC0', '#1A237E'],
    },
    {
      title: 'Electronics',
      image: require('../../../assets/electronics.jpg'),
      color: ['#009688', '#004D40'],
    },
  ];
  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <ImageBackground
            source={category.image}
            style={styles.imageBackground}
            imageStyle={{borderRadius: 15}}>
            <View
              style={[
                styles.gradientContainer,
                {backgroundColor: category.color},
              ]}>
              <Text style={styles.categoryText}>{category.title}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  card: {
    width: '48%',
    height: 150,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  gradientContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  categoryText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Categories;
