import { brands } from "../../constants/brands";


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
    {
      id: 1,
      title: 'طراح گرافیست',
    },
    {
      id: 16,
      title: 'برنامه نویس فلاتر',
    },
    {
      id: 16588,
      title: 'استخدام اصفهان',
    },
    {
      id: 15225,
      title: 'اسنخدام برنامه نویس جاوا',
    },
    {
      id: 19494,
      title: 'استخدام تهران',
    },
    {
      id: 159875,
      title: 'مهندس مکانیک',
    },
    {
      id: 15454,
      title: 'استخدام مدیر فروش',
    },
    {
      id: 1887799,
      title: 'استخدام برنامه نویس node.js',
    },
    {
      id: 100010101,
      title: 'استخدام برنامه نویس .Net',
    },
    {
      id: 15586696,
      title: 'استخدام مهندس معمار',
    },
    {
      id: 164682,
      title: 'استخدام برنامه نویس اوراکل',
    },
    {
      id: 1848616,
      title: 'استخدام حسابدار',
    },

    {
      id: 1496161,
      title: 'استخدام برنامه نویس اندروید',
    },
    {
      id: 10,
      title: 'استحدام کارمند اداری',
    },
    {
      id: 1921680013000,
      title: 'استخدام برنامه نویس React',
    },
    {
      id: 16161,
      title: 'استخدام کارشناس بازرگانی',
    },
   

  ],
  companies: brands,
  stats: [
    {
      number: 1500000,
      title: 'کارجویان همراه',
      description: 'چند جویای کار، برای استخدام به جاب ویژن اعتماد کرده‌اند؟'
    },
    {
      number: 29400,
      title: 'سازمان‌های همراه',
      description: 'چند سازمان تا‌کنون از خدمات کارمندیابی جاب ویژن استفاده کرده‌اند؟'
    },
    {
      number: 24500,
      title: 'موقعیت‌های شغلی فعال',
      description: 'در همین لحظه چند آگهی استخدام فعال در جاب ویژن وجود دارد؟'
    },
    {
      number: 30000,
      title: 'استخدامی‌ها تا امروز',
      description: 'تا امروز چند نفر از طریق سایت کاریابی جاب ویژن، استخدام شده‌اند؟'
    },
  ],
  services: [
    [
      {
        id: 1,
        link: '',
        title: 'خودت رو بشناس',
        description: 'با آزمون‌‌های شخصیت شناسی شغلی جاب ویژن، خود را بهتر بشناسید و بهترین شغل را انتخاب کنید.'
      },
      {
        id: 2,
        link: '/landing/cv-maker',
        title: 'تواندمندتر شو',
        description: 'در بخش «توانمندتر شو»، توانمندی‌ها و مهارت‌های شغلی خود را تقویت کنید و شانس استخدام خود را افزایش دهید.'
      },
    ],
    [
      {
        id: 3,
        link: '/companies',
        title: 'آشنایی با شرکت ها',
        description: 'سازمان‌ها و شرکت‌های معتبر ایرانی را بشناسید و با شرایط استخدام و موقعیت‌های شغلی آن‌ها آشنا شوید.'
      },
      {
        id: 4,
        link: '',
        title: 'رزومه ساز حرفه ای',
        description: 'با رزومه ساز جاب ویژن، رزومه‌ای استاندارد به دو زبان فارسی و انگلیسی بسازید و زودتر استخدام شوید.'
      },
    ],
    
    [
      {
        id: 5,
        link: '/jobs',
        title: 'ارسال رزومه',
        description: 'از جدیدترین فرصت‌های شغلی و استخدام سازمان‌ها مطلع شوید و برای آن‌ها رزومه بفرستید.'
      },
      {
        id: 6,
        link: '',
        title: 'استخدام موفق',
        description: 'در بهترین شرکت‌ها و سازمان‌های ایران استخدام شوید.'
      },
    ]
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
