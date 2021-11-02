import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { faqSaga } from './saga';
import { name, reducer, actions } from './slice';

export const useFaqSlice = () => {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga: faqSaga });

  return { actions };
};
