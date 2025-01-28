// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// // import {Auth} from 'aws-amplify';
// import {Alert} from 'react-native';

// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// export const googleLogin = () => async dispatch => {
//   try {
//     const {idToken} = await GoogleSignin.signIn();

//     //Authentication with Aws Cognito
//     const federatedCredentials = await Auth.federatedSignIn(
//       'google',
//       {token: idToken},
//       null,
//     );
//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: federatedCredentials,
//     });
//   } catch (e) {
//     Alert.alert('OOPS', e);
//   }
// };

// export const logout = () => async dispatch => {
//   try {
//     await Auth.signOut();
//     await GoogleSignin.signOut();

//     dispatch({type: LOGOUT_SUCCESS});
//   } catch (error) {
//     console.error('Logout Error:', error);
//   }
// };
