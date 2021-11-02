// npm
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Redirect, useLocation } from 'react-router-dom';

// utils
import checkValidity from 'utils/check-validity';

// store
import { selectIsAuthenticated } from 'store/modules/selectors';
import { useLoginSlice } from 'store/modules/auth/login/hook';
import { useProviderLoginSlice } from 'store/modules/auth/providerLogin/hook';
import { selectLoading } from 'store/modules/auth/login/selectors';

// data
import { initFormData } from './data';
import { LoginSEO } from './SEO';

// locales
import { translations } from 'locales/translations';

// types
import { FormFieldType } from 'types/units/form-field';
import {
  ButtonDimensionsType,
  ButtonGroupsType,
} from 'components/atoms/Button/types';
import { ProviderTypes } from 'store/modules/auth/providerLogin/types';

// components
import GoogleLoginButton from 'components/features/GoogleLoginButton';
import FacebookLoginButton from 'components/features/FacebookLoginButton';

// styled
import {
  Wrapper,
  Header,
  HeaderLabel,
  HeaderLogo,
  Form,
  Input,
  ForgotPasswordLink,
  SignUpLink,
  LinksButtons,
  ActionsButtons,
  ProvidersButtons,
  ProvidersButtonsCaption,
  ProvidersButtonsSocials,
} from './styles';
import Button from 'components/atoms/Button';
import useQuery from 'hooks/useQuery';

// root
export function Login() {
  // slice hook
  const { actions: loginActions } = useLoginSlice();
  const { actions: providerLoginActions } = useProviderLoginSlice();

  // locales hook
  const { t } = useTranslation();

  // router hook
  const location = useLocation();
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
  const onLogin = payload => dispatch(loginActions.fetchDataTrigger(payload));
  const onProviderLogin = payload =>
    dispatch(providerLoginActions.fetchTrigger(payload));

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

  // provider failure handler
  const providerFailureHandler = err => {
    console.log(err);
  };

  // form submit handler
  const submitHandler = event => {
    event.preventDefault();

    let reffererUrl: string | null = null;

    if (query.has('action') && query.get('action') === 'sign-to-product') {
      reffererUrl = `${window.location.origin}/${query.get('redirect')}`;
    }

    const updatedPayload = {
      email: formData.email.value,
      password: formData.password.value,
      reffererUrl: reffererUrl,
    };

    onLogin(updatedPayload);
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
      <LoginSEO />

      <Wrapper>
        <Header>
          <HeaderLabel>{t(translations.containers.login.title)}</HeaderLabel>

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

          <LinksButtons>
            <ForgotPasswordLink to="/password/restore">
              {t(translations.containers.login.actions.forgotPasswordLabel)}
            </ForgotPasswordLink>

            <SignUpLink
              to={{
                pathname: '/auth/sign-up',
                state: { from: location },
                search: `?${query.toString()}`,
              }}
            >
              {t(translations.containers.login.actions.signUpLabel)}
            </SignUpLink>
          </LinksButtons>

          <ActionsButtons>
            <Button
              type="submit"
              group={ButtonGroupsType.OutlinedBlack}
              dimension={ButtonDimensionsType.Regular}
              isLoading={loading}
              disabled={!formIsValid}
            >
              {t(translations.containers.login.actions.submitFormLabel)}
            </Button>
          </ActionsButtons>

          <ProvidersButtons>
            <ProvidersButtonsCaption>
              {t(translations.containers.login.providers.caption)}
            </ProvidersButtonsCaption>

            <ProvidersButtonsSocials>
              <GoogleLoginButton
                onSuccess={accessToken =>
                  onProviderLogin({
                    provider: ProviderTypes.Google,
                    accessToken,
                  })
                }
                onFailure={providerFailureHandler}
              />
              <FacebookLoginButton
                onSuccess={accessToken =>
                  onProviderLogin({
                    provider: ProviderTypes.Facebook,
                    accessToken,
                  })
                }
                onFailure={providerFailureHandler}
              />
            </ProvidersButtonsSocials>
          </ProvidersButtons>
        </Form>
      </Wrapper>
    </>
  );
}
