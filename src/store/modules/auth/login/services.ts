import { $apiClient } from 'utils/request';
import { FetchTriggerPayload } from './types';

export function loginService(payload: FetchTriggerPayload) {
  const url = 'api/v1/login';
  return $apiClient.post(url, payload);
}
