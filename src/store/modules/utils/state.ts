import { UtilsState } from './types';

export const initialState: UtilsState = {
  file: {
    data: null,
    loading: false,
    done: false,
    error: null,
  },
};
