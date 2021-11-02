import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

export function LoginSEO() {
  // locales hook
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>{t(translations.containers.login.seo.title)}</title>
      <meta
        name="description"
        content={t(translations.containers.login.seo.description)}
      />
    </Helmet>
  );
}