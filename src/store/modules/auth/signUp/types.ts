/**
 * SignUp State
 */
export interface SignUpState {
  loading: boolean;
  done: boolean;
  error?: unknown | null;
}

/**
 * SignUp Fetch
 */
export interface FetchTriggerPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirmation: string;
  reffererUrl: string | null;
}

export type FetchPayloadErrorType = unknown | null;
