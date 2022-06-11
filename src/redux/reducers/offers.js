const initialState = {
    list: [],
    info: {

    }
};

export default function offersStates(state = initialState, action) {
    let { type, data } = action;
    switch (type) {
      case 'GET_OFFER_LIST':
        return{
          ...state,
          list: data
        }

      case 'SET_OFFER_INFO':
        return{
          ...state,
          info: data
        }    
  
  
      default:
        return state;
    }
  }