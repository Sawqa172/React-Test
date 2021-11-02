import { FaqState } from './types';

// The initial state of the Faq container
export const initialState: FaqState = {
  list: {
    data: [],
    loading: false,
    done: false,
    error: null,
  },
  feedback: {
    loading: false,
    done: false,
    error: null,
  },
};
