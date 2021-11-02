import React, { useEffect } from 'react';
import { AxiosInstance } from 'axios';
import { Theme } from 'styles/theme/themes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useHttpClient from 'hooks/httpClient';

interface IProps {
  theme: Theme;
}

const withErrorHandler =
  (WrappedComponent: React.FC<IProps>, $apiClient: AxiosInstance) => props => {
    const [error, cleaError] = useHttpClient($apiClient);

    useEffect(() => {
      if (error) {
        emitToast(error);
        cleaError();
      }
    }, [error, cleaError]);

    const emitToast = message => {
      if (message) {
        toast.error(message);
      }
    };

    return <WrappedComponent {...props} />;
  };

export default withErrorHandler;
