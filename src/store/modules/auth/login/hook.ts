import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loginSaga } from './saga';
import { name, reducer, actions } from './slice';

export const useLoginSlice = () => {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga: loginSaga });

  return { actions };
};
