import { ProfileState } from './types';

// The initial state of the Profile
export const initialState: ProfileState = {
  profile: {
    data: null,
    fetch: {
      loading: false,
      done: false,
      error: null,
    },
    update: {
      loading: false,
      done: false,
      error: null,
    },
  },
  password: {
    update: {
      loading: false,
      done: false,
      error: null,
    },
  },
};
