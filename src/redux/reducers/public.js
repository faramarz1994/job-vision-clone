

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
  familiarityItems: [
    {
      id: 0,
      value: 'نحوه آشنایی با جاب ویژن'
    },
    {
      id: 2,
      value: 'تلگرام'
    },
    {
      id: 3,
      value: 'اینستاگرام'
    },
    {
      id: 4,
      value: 'توییتر'
    },
    {
      id: 5,
      value: 'لینکدین'
    },
    {
      id: 6,
      value: 'جستجو در اینترنت'
    },
    {
      id: 7,
      value: 'توسط دوستان و آشنایان'
    },
    {
      id: 8,
      value: 'سایر'
    },
  ],
  mostViewed: [
    
  ]
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
