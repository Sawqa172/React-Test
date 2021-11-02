const pluralizate = (
  value: number,
  wordOne: string,
  wordSimple: string,
  wordMany: string,
): string => {
  let language = localStorage.getItem('i18nextLng'),
    localization =
      language && language.length > 2 ? language.slice(0, 2) : language,
    pluralWord = '';

  if (localization === 'en') {
    pluralWord = value === 1 ? wordOne : wordSimple;
  } else if (localization === 'ru' || localization === 'uk') {
    pluralWord =
      value % 10 === 1 && value % 100 !== 11
        ? wordOne
        : value % 10 >= 2 &&
          value % 10 <= 4 &&
          (value % 100 < 10 || value % 100 >= 20)
        ? wordSimple
        : wordMany;
  }
  return pluralWord;
};

export default pluralizate;
