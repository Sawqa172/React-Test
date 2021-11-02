// core
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

// utils
import checkValidity from 'utils/check-validity';

// store
import { useRestorePasswordSlice } from 'store/modules/auth/restorePassword/hook';
import {
  selectLoading,
  selectDone,
} from 'store/modules/auth/restorePassword/selectors';

// data
import { initFormData } from './data';
import { RestorePasswordSEO } from './SEO';

// locales
import { translations } from 'locales/translations';

// types
import { FormFieldType } from 'types/units/form-field';

// styled
import {
  Wrapper,
  Header,
  HeaderLabel,
  HeaderLogo,
  Form,
  LinksButtons,
  ActionsButtons,
  BackToLoginButton,
  BackToLoginLabel,
  Input,
} from './styles';
import {
  ButtonDimensionsType,
  ButtonGroupsType,
} from 'components/atoms/Button/types';
import Button from 'components/atoms/Button';

// root
export function RestorePassword() {
  // slice hook
  const { actions } = useRestorePasswordSlice();

  // react router history
  const history = useHistory();

  // locales hook
  const { t } = useTranslation();

  // selectors
  const loading = useSelector(selectLoading);
  const fetched = useSelector(selectDone);

  // local data
  const [formData, setFormData] = useState(initFormData);

  // form validation state
  const [formIsValid, setFormIsValid] = useState(false);

  // watch isDone - redirect to login && show success message
  useEffect(() => {
    if (fetched) {
      history.push('/auth/login');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetched]);

  // dispatch
  const dispatch = useDispatch();
  const onRestorePassword = payload =>
    dispatch(actions.fetchDataTrigger(payload));

  // init form validity
  useEffect(() => {
    let tempFormIsValid = Object.keys(formData).every(
      controlKey =>
        !formData[controlKey].invalid && formData[controlKey].touched,
    );

    setFormIsValid(tempFormIsValid);
  }, [formData]);

  // form inputs change handler
  const inputChangedHandler = (controlName, value) => {
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

  // form submit handler
  const submitHandler = event => {
    event.preventDefault();

    const updatedPayload = {
      email: formData.email.value,
    };

    onRestorePassword(updatedPayload);
  };

  // form formatting
  const formElementsArray: Array<FormFieldType> = [];
  Object.keys(formData).forEach(key => {
    formElementsArray.push({
      id: key,
      ...formData[key],
    });
  });

  // render
  return (
    <>
      <RestorePasswordSEO />

      <Wrapper>
        <Header>
          <HeaderLabel>
            {t(translations.containers.restorePassword.title)}
          </HeaderLabel>

          <HeaderLogo to="/" />
        </Header>

        <Form onSubmit={submitHandler}>
          {formElementsArray.map(formElement => (
            <Input
              {...formElement}
              key={formElement.id}
              changed={({ value }) =>
                inputChangedHandler(formElement.id, value)
              }
            />
          ))}

          <ActionsButtons>
            <Button
              type="submit"
              group={ButtonGroupsType.OutlinedBlack}
              dimension={ButtonDimensionsType.Regular}
              isLoading={loading}
              disabled={!formIsValid}
            >
              {t(
                translations.containers.restorePassword.actions.submitFormLabel,
              )}
            </Button>
          </ActionsButtons>

          <LinksButtons>
            <BackToLoginLabel>
              {t(
                translations.containers.restorePassword.actions.returnToLogin
                  .label,
              )}
            </BackToLoginLabel>

            <BackToLoginButton to="/auth/login">
              {t(
                translations.containers.restorePassword.actions.returnToLogin
                  .button,
              )}
            </BackToLoginButton>
          </LinksButtons>
        </Form>
      </Wrapper>
    </>
  );
}
