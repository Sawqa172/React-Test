// core
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// store
import { useProfileSlice } from 'store/modules/user/profile/hook';
import { selectProfileFetchLoading } from 'store/modules/user/profile/selectors';

// locales
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

// types
import { RoleTypes } from 'types/models/role';

// components
import { ProfileSEO } from './SEO';

export function Profile() {
  // slice hook
  const { actions } = useProfileSlice();

  // locales hook
  const { t } = useTranslation();

  // selectors
  const fetchLoading = useSelector(selectProfileFetchLoading);

  // dispatch
  const dispatch = useDispatch();
  const requestData = payload =>
    dispatch(actions.fetchProfileDataTrigger(payload));

  // on mount
  useEffect(() => {
    const role = RoleTypes.Professional;
    requestData({ role });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // render
  return (
    <>
      <ProfileSEO />
    </>
  );
}
