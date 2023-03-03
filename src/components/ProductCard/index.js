import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import Rating from './Rating';

const ProductCard = ({product, onPress}) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const handleFavoritePress = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <ImageBackground
        source={{uri: product.image}}
        style={styles.imageBackground}
        resizeMode="cover">
        <View style={styles.favoriteContainer}>
          <TouchableOpacity onPress={handleFavoritePress}>
            <Image
              source={
                isFavorited
                  ? require('../../../assets/icons/favorite-filled.png')
                  : require('../../../assets/icons/favorite-outline.png')
              }
              style={styles.favoriteIcon}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <View style={styles.priceRatingContainer}>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <Rating rating={product.rating.rate} count={product.rating.count} />
        </View>
        {/* <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{product.description}</Text>
        </View> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '49%',
    margin: '1%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3,
  },
  imageBackground: {
    height: 250,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 5,
  },
  favoriteContainer: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 10,
    elevation: 5,
  },
  favoriteIcon: {
    width: 30,
    height: 30,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    maxHeight: 50,
    overflow: 'hidden',
  },
  priceRatingContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  price: {
    color: '#FF7F50',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  descriptionContainer: {
    maxHeight: 80,
    overflow: 'hidden',
  },
  description: {
    fontSize: 14,
    color: '#444',
  },
});

export default ProductCard;
