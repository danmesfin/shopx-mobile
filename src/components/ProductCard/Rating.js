import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Rating = ({rating, count}) => {
  const stars = [];

  // calculate the number of filled and empty stars
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;

  // fill the stars array with the appropriate icon components
  for (let i = 0; i < filledStars; i++) {
    stars.push(<Ionicons key={i} name="star" size={20} color="#FFD700" />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Ionicons
        key={filledStars + i}
        name="star-outline"
        size={20}
        color="#FFD700"
      />,
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.stars}>{stars}</View>
      <Text style={styles.count}>({count})</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  stars: {
    flexDirection: 'row',
  },
  count: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Rating;
