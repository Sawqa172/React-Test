// core
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// utils
import checkValidity from 'utils/check-validity';

// hooks
import useQuery from 'hooks/useQuery';

// store
import { useResetPasswordSlice } from 'store/modules/auth/resetPassword/hook';
import { useLoginSlice } from 'store/modules/auth/login/hook';
import { selectIsAuthenticated } from 'store/modules/selectors';
import { selectLoading } from 'store/modules/auth/resetPassword/selectors';

// data
import { initFormData } from './data';
import { ResetPasswordSEO } from './SEO';

// locales
import { translations } from 'locales/translations';

// types
import { FormFieldType } from 'types/units/form-field';

// styled
import {
  LinksButtons,
  ActionsButtons,
  BackToLoginButton,
  Input,
  Wrapper,
  BackToLogin,
  BackToLoginLabel,
  Form,
  Header,
  HeaderLabel,
  HeaderLogo,
} from './styles';
import {
  ButtonDimensionsType,
  ButtonGroupsType,
} from 'components/atoms/Button/types';
import Button from 'components/atoms/Button';

// root
export function ResetPassword() {
  /*
   * Login slice hook to import login store module chunk for auto login in
   * reset password saga
   */
  useLoginSlice();
  // slice hook
  const { actions } = useResetPasswordSlice();

  // router hooks
  const history = useHistory();
  const location = useLocation();
  const query = useQuery();

  // locales hook
  const { t } = useTranslation();

  // selectors
  const loading = useSelector(selectLoading);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  // local data
  const [formData, setFormData] = useState(initFormData);

  // form validation state
  const [formIsValid, setFormIsValid] = useState(false);

  // dispatch
  const dispatch = useDispatch();
  const onResetPassword = payload =>
    dispatch(actions.fetchDataTrigger(payload));

  // module init
  useEffect(() => {
    checkSearchQueryValidity();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // init form validity
  useEffect(() => {
    let tempFormIsValid = Object.keys(formData).every(
      controlKey =>
        !formData[controlKey].invalid && formData[controlKey].touched,
    );

    setFormIsValid(tempFormIsValid);
  }, [formData]);

  // check search query validity
  const checkSearchQueryValidity = () => {
    if (!query.has('code') || !query.has('email')) {
      history.replace('/auth/login');
    }
  };

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
      email: query.get('email'),
      code: query.get('code'),
      password: formData.password.value,
      passwordConfirmation: formData.password.value,
    };

    onResetPassword(updatedPayload);
  };

  // form formatting
  const formElementsArray: Array<FormFieldType> = [];
  Object.keys(formData).forEach(key => {
    formElementsArray.push({
      id: key,
      ...formData[key],
    });
  });

  const isMigrationFlow =
    query.get('type') && query.get('type') === 'migration';

  // if isAuthenticated and redirect is absent in query, then try to replace to from-location
  if (isAuthenticated) {
    if (query.has('redirect')) {
      const redirectUrl = query.get('redirect');
      query.delete('redirect');

      return (
        <Redirect
          to={{
            pathname: `/${redirectUrl}`,
            search: `?${query.toString()}`,
          }}
        />
      );
    } else {
      const { from } = (location.state as any) || {
        from: { pathname: '/courses' },
      };
      // history.replace(from);
      return <Redirect to={from} />;
    }
  }

  // render
  return (
    <>
      <ResetPasswordSEO />

      <Wrapper>
        <Header>
          <HeaderLabel>
            {isMigrationFlow
              ? t(translations.containers.resetPassword.title.migration)
              : t(translations.containers.resetPassword.title.reset)}
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
              {isMigrationFlow
                ? t(translations.containers.resetPassword.actions.submit.update)
                : t(
                    translations.containers.resetPassword.actions.submit
                      .restore,
                  )}
            </Button>
          </ActionsButtons>

          <LinksButtons>
            {!isMigrationFlow && (
              <BackToLogin>
                <BackToLoginLabel>
                  {t(
                    translations.containers.resetPassword.actions.returnToLogin
                      .label,
                  )}
                </BackToLoginLabel>

                <BackToLoginButton to="/auth/login">
                  {t(
                    translations.containers.resetPassword.actions.returnToLogin
                      .button,
                  )}
                </BackToLoginButton>
              </BackToLogin>
            )}
          </LinksButtons>
        </Form>
      </Wrapper>
    </>
  );
}
