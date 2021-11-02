import React from 'react';
import { Helmet } from 'react-helmet-async';

// locales
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

export function ProfileSEO() {
  // locales hook
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>{t(translations.containers.profile.seo.title)}</title>
      <meta
        name="description"
        content={t(translations.containers.profile.seo.description)}
      />
    </Helmet>
  );
}
