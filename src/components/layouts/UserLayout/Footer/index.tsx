// core
import React from 'react';

// locales
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

// styles
import { Wrapper, Inner } from './styles';

export function Footer() {
  // locales hook
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Inner></Inner>
    </Wrapper>
  );
}
