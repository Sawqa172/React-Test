/**
 * Reset Password State
 */
export interface ResetPasswordState {
  loading: boolean;
  done: boolean;
  error?: unknown | null;
}

/**
 * Reset Password Fetch
 */
export interface FetchTriggerPayload {
  code: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export type FetchPayloadErrorType = unknown | null;
