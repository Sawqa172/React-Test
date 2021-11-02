import { $apiClient } from 'utils/request';
import { FetchTriggerPayload } from './types';

export function restorePasswordService(payload: FetchTriggerPayload) {
  const url = 'api/v1/password/restore';
  return $apiClient.post(url, payload);
}
