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
  utmTags: {
    utmSource: null,
    utmMedium: null,
    utmCampaign: null,
  },
  error: null,
};
