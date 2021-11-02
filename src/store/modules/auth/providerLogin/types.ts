export interface ProviderLoginState {
  loading: boolean;
  done: boolean;
  error?: unknown | null;
}

export enum ProviderTypes {
  Google = 'google',
  Facebook = 'facebook',
  Apple = 'apple',
}

export interface FetchTriggerPayload {
  provider: ProviderTypes;
  accessToken: string;
}

export type FetchPayloadErrorType = unknown | null;
