import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
const Home = () => {
  const data = useSelector(state => console.log(state));
  console.log("data in home:",data)
  return (
    <View style={{backgroundColor:'white'}}>
      <Text>My Home 1</Text>
    </View>
  );
};

export default Home;
