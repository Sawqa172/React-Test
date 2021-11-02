// core
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// types
import { ProfileIncludesTypes } from 'store/modules/user/profile/types';
import { RoleTypes } from 'types/models/role';
import {
  ButtonDimensionsType,
  ButtonGroupsType,
} from 'components/atoms/Button/types';

// store
import { useProfileSlice } from 'store/modules/user/profile/hook';

import {
  selectProfileData,
  selectProfileFetchLoading,
} from 'store/modules/user/profile/selectors';

// locales
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

// components
import { ProfileSEO } from './SEO';

// styles
import {
  Wrapper,
  Caption,
  EditButton,
  Header,
  Inner,
  Content,
  Aside,
  Avatar,
  DefaultAvatar,
  DefaultAvatarIcon,
  Info,
  ChangePassword,
} from './styles';
import InfoTable from './InfoTable';
import { ColorType, TypesType } from 'components/atoms/LoadingIndicator/types';
import LoadingIndicator from 'components/atoms/LoadingIndicator';

export function Profile() {
  // slice hook
  const { actions } = useProfileSlice();

  // locales hook
  const { t } = useTranslation();

  // react router history
  const history = useHistory();

  // selectors
  const profileData = useSelector(selectProfileData);
  const profileFetchLoading = useSelector(selectProfileFetchLoading);

  // dispatch
  const dispatch = useDispatch();
  const requestProfileData = payload =>
    dispatch(actions.fetchProfileDataTrigger(payload));

  // on mount
  useEffect(() => {
    const role = RoleTypes.Client;
    const profileQuery = {
      include: [ProfileIncludesTypes.Roles, ProfileIncludesTypes.Purchase].join(
        ',',
      ),
    };

    requestProfileData({ role, query: profileQuery });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // render
  return (
    <>
      <ProfileSEO />

      <Wrapper>
        <Header>
          <Caption>{t(translations.containers.profile.caption)}</Caption>

          <EditButton
            type="button"
            group={ButtonGroupsType.OutlinedBlack}
            dimension={ButtonDimensionsType.Regular}
            isLoading={false}
            disabled={false}
            onClick={() => history.push('profile/edit')}
          >
            {t(translations.containers.profile.actions.editProfile)}
          </EditButton>
        </Header>

        <Inner>
          {profileData && (
            <Content>
              <Aside>
                {profileData.avatar && profileData.avatar.length > 0 ? (
                  <Avatar src={profileData.avatar} alt="avatar" />
                ) : (
                  <DefaultAvatar>
                    <DefaultAvatarIcon />
                  </DefaultAvatar>
                )}
              </Aside>

              <Info>
                <InfoTable
                  email={profileData.email}
                  firstName={profileData.firstName}
                  lastName={profileData.lastName}
                  country={profileData.country}
                  city={profileData.city}
                  phone={profileData.phone}
                  aboutMe={profileData.aboutMe}
                />

                <ChangePassword
                  type="button"
                  group={ButtonGroupsType.OutlinedBlack}
                  dimension={ButtonDimensionsType.Regular}
                  isLoading={false}
                  disabled={false}
                  onClick={() => history.push('profile/edit#password')}
                >
                  {t(translations.containers.profile.actions.editPassword)}
                </ChangePassword>
              </Info>
            </Content>
          )}

          {profileFetchLoading && (
            <LoadingIndicator
              type={TypesType.Local}
              color={ColorType.Dark}
              size={7}
            />
          )}
        </Inner>
      </Wrapper>
    </>
  );
}
