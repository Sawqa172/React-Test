// core
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import snakeCaseKeys from 'snakecase-keys';
import camelCaseKeys from 'camelcase-keys';
import _ from 'lodash';

// types
import { IErrorResponseData } from 'types/units/response-types';

import {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';

// actions
import { actions as logoutActions } from 'store/modules/auth/logout/slice';

// hook
const useHttpClient = (
  httpClientInstance: AxiosInstance,
): [string | null, () => void] => {
  // local error state
  const [error, setError] = useState<string | null>(null);

  // translation hook
  const { i18n } = useTranslation();

  // actions
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logoutActions.fetchDataTrigger());

  // request interceptor
  const reqInterceptor = httpClientInstance.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
      setError(null);

      // formatting data
      if (config.data) {
        config.data =
          config.data instanceof FormData
            ? config.data
            : snakeCaseKeys(config.data, { deep: true });
      }

      // formatting headers
      const accessToken = await localStorage.getItem('access_token');

      if (accessToken && config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      // utm tags
      const utmSource = sessionStorage.getItem('utm_source');
      const utmMedium = sessionStorage.getItem('utm_medium');
      const utmCampaign = sessionStorage.getItem('utm_campaign');

      if (config.headers) {
        utmSource && (config.headers['X-UTM-SOURCE'] = utmSource);
        utmMedium && (config.headers['X-UTM-MEDIUM'] = utmMedium);
        utmCampaign && (config.headers['X-UTM-CAMPAIGN'] = utmCampaign);

        config.headers['X-localization'] =
          i18n.language && i18n.language.length > 2
            ? i18n.language.slice(0, 2)
            : i18n.language;
      }

      return config;
    },
    (err: AxiosError) => {
      let formattedMessage: string = JSON.stringify(err.response?.data);
      setError(formattedMessage);

      return Promise.reject(formattedMessage);
    },
  );

  // response interceptor
  const resInterceptor = httpClientInstance.interceptors.response.use(
    (res: AxiosResponse) => {
      return _.isObject(res.data)
        ? camelCaseKeys(res.data, { deep: true })
        : null;
    },
    (err: AxiosError<IErrorResponseData>) => {
      let formattedMessage: string | null = null;

      if (err?.response) {
        // errors handling
        switch (err.response.status) {
          case 401:
            onLogout();
            break;

          case 500:
            formattedMessage = 'Unknown error';

            break;

          default:
            break;
        }

        if ('message' in err.response.data) {
          formattedMessage = err.response.data.message;
        }

        if ('error' in err.response.data) {
          formattedMessage = err.response.data.error.message;
        }

        if ('errors' in err.response.data) {
          Object.keys(err.response.data.errors).forEach(errorKey => {
            // @ts-ignore
            err.response.data.errors[errorKey].forEach((line: string) => {
              formattedMessage += `\r\n${line}`;
            });
          });
        }
      }

      setError(formattedMessage);

      return Promise.reject(formattedMessage);
    },
  );

  // watch reqInterceptor & resInterceptor - eject request & response interceptors
  useEffect(
    () => () => {
      httpClientInstance.interceptors.request.eject(reqInterceptor);
      httpClientInstance.interceptors.response.eject(resInterceptor);
    },
    [
      reqInterceptor,
      resInterceptor,
      httpClientInstance.interceptors.request,
      httpClientInstance.interceptors.response,
    ],
  );

  const errorClearedHandler = () => {
    setError(null);
  };

  return [error, errorClearedHandler];
};

export default useHttpClient;
