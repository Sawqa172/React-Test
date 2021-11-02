import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { providerLoginSaga } from './saga';
import { name, reducer, actions } from './slice';

export const useProviderLoginSlice = () => {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga: providerLoginSaga });

  return { actions };
};
