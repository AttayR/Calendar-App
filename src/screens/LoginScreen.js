// import React from 'react';
// import { View, Button, Text, StyleSheet } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { googleLogin, logout } from '../redux/actions/authActions';

// const LoginScreen = () => {
//   const dispatch = useDispatch();
//   const { user, isAuthenticated } = useSelector(state => state.auth);

//   return (
//     <View style={styles.container}>
//       {isAuthenticated ? (
//         <>
//           <Text style={styles.text}>Welcome, {user.identityId}</Text>
//           <Button title="Logout" onPress={() => dispatch(logout())} />
//         </>
//       ) : (
//         <Button title="Login with Google" onPress={() => dispatch(googleLogin())} />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
// });

// export default LoginScreen;

import { View, Text } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen