import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { logoutSaga } from './saga';
import { name, reducer, actions } from './slice';

export const useLogoutSlice = () => {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga: logoutSaga });

  return { actions };
};
