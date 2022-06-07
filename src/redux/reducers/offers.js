const initialState = {
    list: []
};

export default function offersStates(state = initialState, action) {
    let { type, data } = action;
    switch (type) {
      case 'GET_OFFER_LIST':
        return{
          ...state,
          list: data
        }
          
  
  
      default:
        return state;
    }
  }