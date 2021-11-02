/**
 * Restore Password State
 */
export interface RestorePasswordState {
  loading: boolean;
  done: boolean;
  error?: unknown | null;
}

/**
 * Restore Password Fetch
 */
export interface FetchTriggerPayload {
  email: string;
}

export type FetchPayloadErrorType = unknown | null;
