import { $apiClient } from 'utils/request';

export function getData() {
  const url = 'api/v1/page/home';

  return $apiClient.get(url);
}
