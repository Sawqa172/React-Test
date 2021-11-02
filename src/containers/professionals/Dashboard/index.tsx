// core
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

// locales
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

// components
import { DashboardSEO } from './SEO';

export function Dashboard() {
  // router history
  const history = useHistory();

  // route match
  let { path, url } = useRouteMatch();

  // locales hook
  const { t } = useTranslation();

  // on mount
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // render
  return (
    <>
      <DashboardSEO />
    </>
  );
}
