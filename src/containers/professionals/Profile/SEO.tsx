import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

export function ProfileSEO() {
  // locales hook
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>Profile</title>
      <meta name="description" content="Profile" />
    </Helmet>
  );
}
