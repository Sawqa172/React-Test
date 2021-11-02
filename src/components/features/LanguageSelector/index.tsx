import React from 'react';
import { useTranslation } from 'react-i18next';

import { languagesList } from 'locales/data';

// styles
import {
  Wrapper,
  CurrentLang,
  CurrentLangText,
  CurrentLangIcon,
  LangModal,
  LangList,
  LangItem,
  LangButton,
} from './styles';

export function LanguageSelector(props) {
  // translation hook
  const { t, i18n } = useTranslation();

  const handleLanguageChange = language => {
    i18n.changeLanguage(language);
    window.location.reload();
  };

  const localization =
    i18n.language && i18n.language.length > 2
      ? i18n.language.slice(0, 2)
      : i18n.language;

  // remove current language
  const updatedLangList = languagesList.filter(
    lang => lang.id !== localization,
  );

  // current locale language
  const currentLanguage = languagesList.find(
    lang => lang.id === localization,
  )?.short;

  return (
    <Wrapper {...props}>
      <CurrentLang>
        <CurrentLangText>{currentLanguage}</CurrentLangText>
        <CurrentLangIcon />
      </CurrentLang>

      <LangModal>
        <LangList>
          {updatedLangList.map(lang => (
            <LangItem key={lang.id}>
              <LangButton onClick={() => handleLanguageChange(lang.id)}>
                {lang.label}
              </LangButton>
            </LangItem>
          ))}
        </LangList>
      </LangModal>
    </Wrapper>
  );
}
