import { $apiClient } from 'utils/request';

export function logoutService() {
  const url = 'api/v1/logout';

  return $apiClient.post(url);
}

export function deleteAuthAccessToken() {
  localStorage.removeItem('access_token');
  delete $apiClient.defaults.headers['Authorization'];
}
