import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { homeSaga } from './saga';
import { name, reducer, actions } from './slice';

export const useHomeSlice = () => {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga: homeSaga });

  return { actions };
};
