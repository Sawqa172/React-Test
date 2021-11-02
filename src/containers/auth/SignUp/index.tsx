// core
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Redirect, useHistory, useLocation } from 'react-router-dom';

// utils
import checkValidity from 'utils/check-validity';

// store
import { useSignUpSlice } from 'store/modules/auth/signUp/hook';
import { useLoginSlice } from 'store/modules/auth/login/hook';
import { selectLoading } from 'store/modules/auth/signUp/selectors';
import { selectIsAuthenticated } from 'store/modules/selectors';

// data
import { initFormData } from './data';
import { SignUpSEO } from './SEO';

// locales
import { translations } from 'locales/translations';

// types
import { FormFieldType } from 'types/units/form-field';
import {
  ButtonDimensionsType,
  ButtonGroupsType,
} from 'components/atoms/Button/types';

// styled
import {
  Wrapper,
  Header,
  HeaderLabel,
  HeaderLogo,
  Form,
  Input,
  LinksButtons,
  ActionsButtons,
  BackToLoginButton,
  BackToLoginLabel,
} from './styles';
import Button from 'components/atoms/Button';
import useQuery from 'hooks/useQuery';

// root
export function SignUp() {
  /*
   * Login slice hook to import login store module chunk for auto login in
   * reset password saga
   */
  useLoginSlice();
  // sign up slice hook
  const { actions } = useSignUpSlice();

  // locales hook
  const { t } = useTranslation();

  // router hook
  const location = useLocation();
  const history = useHistory();
  const query = useQuery();

  // selectors
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const loading = useSelector(selectLoading);

  // local data
  const [formData, setFormData] = useState(initFormData);

  // form validation state
  const [formIsValid, setFormIsValid] = useState(false);

  // dispatch
  const dispatch = useDispatch();
  const onSignUp = payload => dispatch(actions.fetchDataTrigger(payload));

  // init form validity
  useEffect(() => {
    let tempFormIsValid = Object.keys(formData).every(
      controlKey =>
        !formData[controlKey].invalid && formData[controlKey].touched,
    );

    setFormIsValid(tempFormIsValid);
  }, [formData]);

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

    let reffererUrl: string | null = null;

    if (query.has('action') && query.get('action') === 'sign-to-product') {
      reffererUrl = `${window.location.origin}/${query.get('redirect')}`;
    }

    const updatedPayload = {
      firstName: formData.firstName.value,
      lastName: formData.lastName.value,
      email: formData.email.value,
      phone: formData.phone.value,
      password: formData.password.value,
      passwordConfirmation: formData.password.value,
      reffererUrl: reffererUrl,
    };

    onSignUp(updatedPayload);
  };

  // form formatting
  const formElementsArray: Array<FormFieldType> = [];
  Object.keys(formData).forEach(key => {
    formElementsArray.push({
      id: key,
      ...formData[key],
    });
  });

  // if isAuthenticated and redirect is absent in query, then try to replace to from-location
  if (isAuthenticated) {
    if (query.has('redirect')) {
      const redirectUrl = query.get('redirect');
      query.delete('redirect');
      query.append('auth', 'sign-up-success');

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
      <SignUpSEO />

      <Wrapper>
        <Header>
          <HeaderLabel>{t(translations.containers.signUp.title)}</HeaderLabel>

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
              {t(translations.containers.signUp.actions.submitFormLabel)}
            </Button>
          </ActionsButtons>

          <LinksButtons>
            <BackToLoginLabel>
              {t(translations.containers.signUp.actions.returnToLogin.label)}
            </BackToLoginLabel>

            <BackToLoginButton
              to={{
                pathname: '/auth/login',
                state: { from: location },
                search: `?${query.toString()}`,
              }}
            >
              {t(translations.containers.signUp.actions.returnToLogin.button)}
            </BackToLoginButton>
          </LinksButtons>
        </Form>
      </Wrapper>
    </>
  );
}
