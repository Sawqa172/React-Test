import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { restorePasswordSaga } from './saga';
import { name, reducer, actions } from './slice';

export const useRestorePasswordSlice = () => {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga: restorePasswordSaga });

  return { actions };
};
