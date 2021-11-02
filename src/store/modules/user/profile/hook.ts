import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { profileSaga } from './saga';
import { name, reducer, actions } from './slice';

export const useProfileSlice = () => {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga: profileSaga });

  return { actions };
};
