import { AppState } from './types';



export const initialState: AppState = {
  token: localStorage.getItem('access_token'),
  navigation: [
    {
      name: 'home',
      label: 'system.navigation.pages.home',
      link: '/',
      footerNav: false,
    },
    {
      name: 'faq',
      label: 'system.navigation.pages.faq',
      link: '/faq',
      footerNav: true,
    },
  ],
  contacts: {
    data: null,
    loading: false,
    done: false,
    error: null,
  },

  allProducts:{
    data: null,
    loading: false,
    done: false,
    error: null,
  },
  singleProduct:{
    data:null,
    loading: false,
    done: false,
    error: null,
  },
  categories: {
    data: null,
    loading: false,
    done: false,
    error: null,
  },
  bag: {
    data:[],
    done:false,
    loading: false,
    error: null,
  },


  utmTags: {
    utmSource: null,
    utmMedium: null,
    utmCampaign: null,
  },
  error: null,
};
