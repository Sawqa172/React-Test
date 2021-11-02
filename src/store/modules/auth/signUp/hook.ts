import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { signUpSaga } from './saga';
import { name, reducer, actions } from './slice';

export const useSignUpSlice = () => {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga: signUpSaga });

  return { actions };
};
