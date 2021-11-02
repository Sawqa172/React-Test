// core
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

// store
import { useProfileSlice } from 'store/modules/user/profile/hook';
import {
  selectPasswordUpdateLoading,
  selectPasswordUpdateDone,
} from 'store/modules/user/profile/selectors';

// config
import { initFormData } from './config';

// utils
import checkValidity from 'utils/check-validity';

// types
import { Props } from './types';
import { RoleTypes } from 'types/models/role';
import { ProfileIncludesTypes } from 'store/modules/user/profile/types';

// locales
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

// styles
import {
  Wrapper,
  Caption,
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

export default function Password({ className }: Props) {
  // slice hook
  const { actions } = useProfileSlice();

  // locales hook
  const { t } = useTranslation();

  // local data
  const [formData, setFormData] = useState(initFormData);

  // form validation state
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  // selectors
  const passwordUpdateLoading = useSelector(selectPasswordUpdateLoading);
  const passwordUpdateDone = useSelector(selectPasswordUpdateDone);

  // init form validity
  useEffect(() => {
    let tempFormIsValid = Object.keys(formData).every(
      controlKey =>
        !formData[controlKey].invalid && formData[controlKey].touched,
    );

    setFormIsValid(tempFormIsValid);
  }, [formData]);

  // watch password update done - sent success message
  useEffect(() => {
    if (passwordUpdateDone) {
      // clean form
      setFormData(initFormData);

      // success message
      toast.success(
        t(translations.containers.profileEdit.password.messages.success),
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passwordUpdateDone]);

  // dispatch
  const dispatch = useDispatch();
  const updatePasswordData = payload =>
    dispatch(actions.updatePasswordTrigger(payload));

  // form change handler
  const formChangeHandler = (controlName, value) => {
    const { isValid, errorText } = checkValidity({
      value,
      rules: formData[controlName].rules,
    });

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
      password: formData.password.value,
      passwordConfirmation: formData.passwordConfirmation.value,
    };

    updatePasswordData(updatedPayload);
  };

  // render
  return (
    <Wrapper onSubmit={submitHandler} className={className}>
      <Caption>
        {t(translations.containers.profileEdit.password.caption)}
      </Caption>

      <Table>
        <TableBody>
          <TableRow>
            <TableKeyCell>
              {t(translations.containers.profileEdit.password.fields.password)}
            </TableKeyCell>
            <TableValueCell>
              <Input
                {...formData.password}
                changed={({ value }) => formChangeHandler('password', value)}
              />
            </TableValueCell>
          </TableRow>

          <TableRow>
            <TableKeyCell>
              {t(
                translations.containers.profileEdit.password.fields
                  .passwordConfirmation,
              )}
            </TableKeyCell>
            <TableValueCell>
              <Input
                {...formData.passwordConfirmation}
                changed={({ value }) =>
                  formChangeHandler('passwordConfirmation', value)
                }
              />
            </TableValueCell>
          </TableRow>
        </TableBody>
      </Table>

      <Actions>
        <SaveButton
          type="submit"
          group={ButtonGroupsType.OutlinedBlack}
          dimension={ButtonDimensionsType.Regular}
          isLoading={passwordUpdateLoading}
          disabled={!formIsValid}
        >
          {t(translations.containers.profileEdit.info.actions.save)}
        </SaveButton>
      </Actions>
    </Wrapper>
  );
}
