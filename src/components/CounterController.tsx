import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import { incrementValueAction,decrementValueAction } from '../Redux/Actions/Counter/counterActions';

const CounterController = () => {
  const dispatch = useDispatch();
  const incrementValue = () => {
    dispatch(incrementValueAction());
  };
  const decrementValue = () => {
    dispatch(decrementValueAction());
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.CounterButton}
        onPress={() => incrementValue()}>
        <Text style={styles.text}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.CounterButton}
        onPress={() => decrementValue()}>
        <Text style={styles.text}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%',
  },
  CounterButton: {
    backgroundColor: 'red',
    padding: 20,
  },
  text: {
    fontSize: 20,
  },
});
export default CounterController;
