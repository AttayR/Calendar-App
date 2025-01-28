import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CounterView = ({counterValue}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counterValue}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default CounterView;
