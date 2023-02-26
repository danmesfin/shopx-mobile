import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    paddingTop: 30,
  },
  largeText: {
    fontSize: 25,
    color: 'black',
    alignItems: 'center',
  },
});

export default function index(): JSX.Element {
  return (
    <View style={styles.center}>
      <Text style={styles.largeText}>Welcome to Counter App !</Text>
    </View>
  );
}
