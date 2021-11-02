import { Home } from 'types/models/home';

// state type
export interface HomeState {
  data: Home | null;
  loading: boolean;
  done: boolean;
  error?: unknown | null;
}

// payloads types
export type FetchPayloadSuccessType = Home;
export type FetchPayloadErrorType = unknown | null;
