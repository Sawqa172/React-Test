import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { utilsSaga } from './saga';
import { name, reducer, actions } from './slice';

export const useUtilsSlice = () => {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga: utilsSaga });

  return { actions };
};
