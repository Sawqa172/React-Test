import { $apiClient } from 'utils/request';
import axios from 'axios';
import { FetchSingleProductTriggerPayload } from './types';

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



export  function fetchAsideCategories ()  {
  return  $apiClient.get(`/products/categories`)
}
export  function fetchAllProducts ()  {
  return  $apiClient.get(`/products?limit=10`)
}
export  function fetchSingleProduct (param :FetchSingleProductTriggerPayload)  {
  return  $apiClient.get(`/products/${param.payload}`)
}
 export  async function fetchCategoryProducts (param :FetchSingleProductTriggerPayload)  {
  return  await $apiClient.get(`/products/category/${param}`)
}
