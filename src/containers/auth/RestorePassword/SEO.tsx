import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

export function RestorePasswordSEO() {
  // locales hook
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>{t(translations.containers.restorePassword.seo.title)}</title>
      <meta
        name="description"
        content={t(translations.containers.restorePassword.seo.description)}
      />
    </Helmet>
  );
}
