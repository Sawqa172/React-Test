import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

export function DashboardSEO() {
  // locales hook
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>Dashboard</title>
      <meta name="description" content="Dashboard" />
    </Helmet>
  );
}
