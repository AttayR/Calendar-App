const initialState = {
  count: 0,
  length:10,
  maxCount: 100,
  changeValue: 20,
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + state.changeValue,
      };
      case 'decrement':
        return{
            ...state,
            count: state.count - state.changeValue,
        };
        case 'updateValue':
        return{
            ...state,
            changeValue:action.payload,
        };
        default: return state;
  }
};
export default counterReducer;
