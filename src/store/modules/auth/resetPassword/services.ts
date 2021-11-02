import { $apiClient } from 'utils/request';
import { FetchTriggerPayload } from './types';

export default function resetPasswordService(payload: FetchTriggerPayload) {
  const url = 'api/v1/password/reset';

  return $apiClient.post(url, payload);
}
