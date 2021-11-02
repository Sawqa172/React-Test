import { $apiClient } from 'utils/request';
import { PostFileServicePayload } from './types';

export default function postFile(payload: PostFileServicePayload) {
  const url = 'api/v1/avatar/upload';

  return $apiClient.post(url, payload);
}
