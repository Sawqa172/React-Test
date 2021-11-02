/**
 * Login State
 */
export interface LoginState {
  loading: boolean;
  done: boolean;
  error?: unknown | null;
}

/**
 * Login Fetch
 */
export interface FetchTriggerPayload {
  email: string;
  password: string;
  reffererUrl: string | null;
}

export type FetchPayloadErrorType = unknown | null;
