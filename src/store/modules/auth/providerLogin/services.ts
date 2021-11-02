import { $apiClient } from 'utils/request';
import { FetchTriggerPayload } from './types';

export function providerLoginService(payload: FetchTriggerPayload) {
  const url = `api/v1/oauth/${payload.provider}/login`;

  return $apiClient.post(url, {
    accessToken: payload.accessToken,
  });
}
