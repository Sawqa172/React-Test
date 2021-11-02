import { $apiClient } from 'utils/request';

// types
import { GetDataParams, PostDataParams, PostPasswordParams } from './types';

// utils
import requestQueryFormatting from 'utils/request-query-formatting';

export function getProfileData({ role, query = {} }: GetDataParams) {
  // let url = `api/v1/${role}/me`;
  let url = `api/v1/me`;
  url = requestQueryFormatting(url, query);

  return $apiClient.get(url);
}

export function postProfileData(payload: PostDataParams) {
  let url = `api/v1/me/info`;

  return $apiClient.post(url, payload);
}

export function postPassword({ role, ...payload }: PostPasswordParams) {
  // let url = `api/v1/${role}/change_password`;
  let url = `api/v1/me/change_password`;

  return $apiClient.post(url, payload);
}
