// core
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// locales
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

// atoms
import InfoContent from './InfoContent';

// components
import { ProfileEditSEO } from './SEO';

// styles
import { Wrapper, Password } from './styles';

export function ProfileEdit() {
  // locales hook
  const { t } = useTranslation();

  // react router history
  const history = useHistory();

  // dispatch
  const dispatch = useDispatch();

  // render
  return (
    <>
      <ProfileEditSEO />

      <Wrapper>
        <InfoContent />

        <Password />
      </Wrapper>
    </>
  );
}
