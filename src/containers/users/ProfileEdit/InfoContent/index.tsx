// core
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// store
import { useProfileSlice } from 'store/modules/user/profile/hook';
import {
  selectProfileData,
  selectProfileFetchLoading,
  selectProfileUpdateLoading,
} from 'store/modules/user/profile/selectors';

// config
import { initFormData } from './config';

// utils
import checkValidity from 'utils/check-validity';

// types
import { RoleTypes } from 'types/models/role';
import { ProfileIncludesTypes } from 'store/modules/user/profile/types';

// locales
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

// styles
import {
  Wrapper,
  Profile,
  ProfileCaption,
  Table,
  TableBody,
  TableRow,
  TableKeyCell,
  TableValueCell,
  Input,
  Actions,
  SaveButton,
} from './styles';

import {
  ButtonDimensionsType,
  ButtonGroupsType,
} from 'components/atoms/Button/types';
import _ from 'lodash';
import ImageUploader from 'components/atoms/ImageUploader';

export default function InfoContent() {
  // slice hook
  const { actions } = useProfileSlice();

  // locales hook
  const { t } = useTranslation();

  // local data
  const [formData, setFormData] = useState(initFormData);

  // form validation state
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  // selectors
  const profileData = useSelector(selectProfileData);
  const profileFetchLoading = useSelector(selectProfileFetchLoading);
  const profileUpdateLoading = useSelector(selectProfileUpdateLoading);

  // dispatch
  const dispatch = useDispatch();
  const requestProfileData = payload =>
    dispatch(actions.fetchProfileDataTrigger(payload));
  const updateProfileData = payload =>
    dispatch(actions.updateProfileDataTrigger(payload));

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

  // watch profile - update fields
  useEffect(() => {
    let updatedFields = _.cloneDeep(formData);

    if (profileData) {
      Object.keys(profileData).forEach(fieldKey => {
        if (updatedFields[fieldKey]) {
          const { isValid, errorText } = checkValidity({
            value: profileData[fieldKey],
            rules: formData[fieldKey].rules,
          });

          updatedFields = {
            ...updatedFields,
            [fieldKey]: {
              ...formData[fieldKey],
              value: profileData[fieldKey],
              invalid: !isValid,
              errorMessage: isValid ? '' : errorText,
              touched: true,
            },
          };
        }
      });
    }

    console.log(updatedFields);

    setFormData(updatedFields);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileData]);

  // watch form data - init validation
  useEffect(() => {
    let tempFormIsValid = Object.keys(formData).every(
      controlKey =>
        !formData[controlKey].invalid && formData[controlKey].touched,
    );

    setFormIsValid(tempFormIsValid);
  }, [formData]);

  // form change handler
  const formChangeHandler = (controlName, value) => {
    const { isValid, errorText } = checkValidity({
      value,
      rules: formData[controlName].rules,
    });

    console.log(`${controlName}: ${value}`);

    const updatedFields = {
      ...formData,
      [controlName]: {
        ...formData[controlName],
        value,
        invalid: !isValid,
        errorMessage: isValid ? '' : errorText,
        touched: true,
      },
    };

    setFormData(updatedFields);
  };

  const submitHandler = event => {
    event.preventDefault();

    const updatedPayload = {
      avatar: formData.avatar.value,
      firstName: formData.firstName.value,
      lastName: formData.lastName.value,
      phone: formData.phone.value,
      country: formData.country.value,
      city: formData.city.value,
      aboutMe: formData.aboutMe.value,
      facebook: formData.facebook.value,
      linkedin: formData.linkedin.value,
      google: formData.google.value,
      instagram: formData.instagram.value,
    };

    updateProfileData(updatedPayload);
  };

  // render
  return (
    <Wrapper onSubmit={submitHandler}>
      <Profile>
        <ProfileCaption>
          {t(translations.containers.profileEdit.info.profile.caption)}
        </ProfileCaption>

        <Table>
          <TableBody>
            <TableRow>
              <TableKeyCell>
                {t(
                  translations.containers.profileEdit.info.profile.fields.avatar
                    .label,
                )}
              </TableKeyCell>
              <TableValueCell>
                <ImageUploader
                  name="avatar"
                  src={formData.avatar.value}
                  text={t(
                    translations.containers.profileEdit.info.profile.fields
                      .avatar.placeholder,
                  )}
                  description={[
                    t(
                      translations.containers.profileEdit.info.profile.fields
                        .avatar.tips.size,
                    ),
                    t(
                      translations.containers.profileEdit.info.profile.fields
                        .avatar.tips.extension,
                    ),
                  ]}
                  changed={({ value }) => formChangeHandler('avatar', value)}
                />
              </TableValueCell>
            </TableRow>

            <TableRow>
              <TableKeyCell>
                {t(
                  translations.containers.profileEdit.info.profile.fields
                    .firstName,
                )}
              </TableKeyCell>
              <TableValueCell>
                <Input
                  {...formData.firstName}
                  changed={({ value }) => formChangeHandler('firstName', value)}
                />
              </TableValueCell>
            </TableRow>

            <TableRow>
              <TableKeyCell>
                {t(
                  translations.containers.profileEdit.info.profile.fields
                    .lastName,
                )}
              </TableKeyCell>
              <TableValueCell>
                <Input
                  {...formData.lastName}
                  changed={({ value }) => formChangeHandler('lastName', value)}
                />
              </TableValueCell>
            </TableRow>

            <TableRow>
              <TableKeyCell>
                {t(
                  translations.containers.profileEdit.info.profile.fields.phone,
                )}
              </TableKeyCell>
              <TableValueCell>
                <Input
                  {...formData.phone}
                  changed={({ value }) => formChangeHandler('phone', value)}
                />
              </TableValueCell>
            </TableRow>

            <TableRow>
              <TableKeyCell>
                {t(
                  translations.containers.profileEdit.info.profile.fields
                    .country,
                )}
              </TableKeyCell>
              <TableValueCell>
                <Input
                  {...formData.country}
                  changed={({ value }) => formChangeHandler('country', value)}
                />
              </TableValueCell>
            </TableRow>

            <TableRow>
              <TableKeyCell>
                {t(
                  translations.containers.profileEdit.info.profile.fields.city,
                )}
              </TableKeyCell>
              <TableValueCell>
                <Input
                  {...formData.city}
                  changed={({ value }) => formChangeHandler('city', value)}
                />
              </TableValueCell>
            </TableRow>

            <TableRow>
              <TableKeyCell>
                {t(
                  translations.containers.profileEdit.info.profile.fields
                    .aboutMe,
                )}
              </TableKeyCell>
              <TableValueCell>
                <Input
                  {...formData.aboutMe}
                  changed={({ value }) => formChangeHandler('aboutMe', value)}
                />
              </TableValueCell>
            </TableRow>
          </TableBody>
        </Table>
      </Profile>

      <Actions>
        <SaveButton
          type="submit"
          group={ButtonGroupsType.OutlinedBlack}
          dimension={ButtonDimensionsType.Regular}
          isLoading={profileUpdateLoading}
          disabled={!formIsValid}
        >
          {t(translations.containers.profileEdit.info.actions.save)}
        </SaveButton>
      </Actions>
    </Wrapper>
  );
}
