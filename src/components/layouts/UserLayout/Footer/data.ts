import VisaIcon from 'components/icons/Visa';
import MastercardIcon from 'components/icons/Mastercard';

const iconsPaymentCollection = [MastercardIcon, VisaIcon];

const linkServiceCollection = [
  {
    title: 'Privacy Policy',
    url: 'privacy-policy',
  },
  {
    title: 'Terms Of Use',
    url: 'terms-of-use',
  },
];

const linkAppCollection = [
  {
    title: 'Apple Store',
    url: '',
    src: `${process.env.PUBLIC_URL}/images/footer/appleStore.svg`,
  },
  {
    title: 'Google Play',
    url: 'https://play.google.com/store/apps/details?id=',
    src: `${process.env.PUBLIC_URL}/images/footer/googlePlay.svg`,
  },
];

const linkNavCollection = [
  {
    title: 'system.footer.navigation.main',
    url: '',
  },
  {
    title: 'system.footer.navigation.about',
    url: '',
  },
  {
    title: 'system.footer.navigation.news',
    url: '',
  },
  {
    title: 'system.footer.navigation.courses',
    url: `${process.env.PUBLIC_URL}`,
  },
  {
    title: 'system.footer.navigation.speakers',
    url: '',
  },
  {
    title: 'system.footer.navigation.career',
    url: '',
  },
];

export {
  iconsPaymentCollection,
  linkServiceCollection,
  linkAppCollection,
  linkNavCollection,
};
