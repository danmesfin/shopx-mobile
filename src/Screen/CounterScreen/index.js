import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../../reducers/counter';

const CounterScreen = () => {
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>{counter}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default CounterScreen;
