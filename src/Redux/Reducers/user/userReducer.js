const initialState = {
  uid: '',
  userName: '',
  isUserLogin: false,
  hobby: [],
  moreData: {
    city: '',
    country: '',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setId':
      return {
        ...state,
        uid: action.id,
      };

    case 'setUserName':
      return {
        ...state,
        userName: action.userName || 'Anonymous',
      };

    case 'setUserData':
      return {
        ...state,
        ...action.payload,
      };

    case 'setIsUserLogin':
      return {
        ...state,
        isUserLogin: action.isUserLogin,
      };

    default:
      return state;
  }
};

export default userReducer;

// Example Usage
// let currentState = initialState;

// // Action 1: Set UID
// currentState = userReducer(currentState, {type: 'setId', id: 1});
// console.log('After setId:', currentState);

// // Action 2: Set User Name
// currentState = userReducer(currentState, {
//   type: 'setUserName',
//   userName: 'John Doe',
// });
// console.log('After setUserName:', currentState);

// // Action 3: Set User Data
// currentState = userReducer(currentState, {
//   type: 'setUserData',
//   payload: {
//     hobby: ['coding', 'reading'],
//     moreData: {city: 'NY', country: 'USA'},
//   },
// });
// console.log('After setUserData:', currentState);

// // Action 4: Set Login Status
// currentState = userReducer(currentState, {
//   type: 'setIsUserLogin',
//   isUserLogin: true,
// });
// console.log('After setIsUserLogin:', currentState);

