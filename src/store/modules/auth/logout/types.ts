/**
 * Logout State
 */
export interface LogoutState {
  loading: boolean;
  done: boolean;
  error?: unknown | null;
}

export type FetchPayloadErrorType = unknown | null;
