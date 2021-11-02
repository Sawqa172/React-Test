import { languagesList } from 'locales/data';

const localeCurrencySymbol = (): any => {
  let language = localStorage.getItem('i18nextLng'),
    localization =
      language && language.length > 2 ? language.slice(0, 2) : language;
  return languagesList.find(lang => lang.id === localization)?.currencySymbol;
};

export default localeCurrencySymbol;
