

const initialState = {
  isMobile: false,
  lang: null,
  headerOptions: [
    {
      title: 'فرصت های شغلی',
    },
    {
      title: 'محصولات',
    },
    {
      title: 'رده بندی شرکت ها',
    },
    {
      title: 'رزومه ساز',
    },
  ],
  headerSettings: {
    shown: true,
  },
};


export default function publicApi(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case 'SET_LANG':
      return {
        ...state,
        lang: data
      }
      case 'SET_HEADER_SETTINGS':
        return {
          ...state,
          headerSettings: data
        }


    default:
      return state;
  }
}
