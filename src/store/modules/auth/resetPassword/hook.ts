import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { resetPasswordSaga } from './saga';
import { name, reducer, actions } from './slice';

export const useResetPasswordSlice = () => {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga: resetPasswordSaga });

  return { actions };
};
