import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import CounterView from '../components/CounterView';
import CounterController from '../components/CounterController';
import {useDispatch, useSelector} from 'react-redux';

const CounterScreen = () => {
  const CounterData = useSelector(state => state.counter);
  const dispatch = useDispatch();
  console.log('CounterData', CounterData.count);
  const applyChangeInState = (text) => {
    dispatch({type: 'updateValue',payload:text});
  };
  return (
    <View style={styles.container}>
      <CounterView counterValue={CounterData.count} />
      <CounterController />
      <Text>Value changed by {CounterData.changeValue}</Text>
      <TextInput
        style={styles.input}
        value={CounterData.changeValue}
        placeholder=""
        onChangeText={text => applyChangeInState(parseInt(text))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  input: {
    borderWidth: 2,
    width: '80%',
    marginTop: 10,
  },
});
export default CounterScreen;
