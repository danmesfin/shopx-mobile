import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  largeText: {
    fontSize: 50,
  },
});

export function index(): JSX.Element {
  return (
    <View style={styles.center}>
      <Text style={styles.largeText}>Welcome to Counter App !</Text>
    </View>
  );
}
