import { $apiClient } from 'utils/request';

export function setAuthAccessToken(token) {
  localStorage.setItem('access_token', token);
  $apiClient.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export function deleteAuthAccessToken() {
  localStorage.removeItem('access_token');
  delete $apiClient.defaults.headers['Authorization'];
}

export function getHasBeenAlreadyAuth(): boolean {
  return localStorage.getItem('has_been_already_auth_before') === 'true';
}

export function setHasBeenAlreadyAuthBefore() {
  localStorage.setItem('has_been_already_auth_before', 'true');
}
export function getContactsData() {
  const url = 'api/v1/variables';

  return $apiClient.get(url);
}
