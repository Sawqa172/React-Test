import { $apiClient } from 'utils/request';
import { FetchTriggerPayload } from './types';

export function signUpService(payload: FetchTriggerPayload) {
  const url = 'api/v1/register';

  return $apiClient.post(url, payload);
}
