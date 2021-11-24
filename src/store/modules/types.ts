import { Home } from '../../types/models/home';
import {IProducts } from 'types/models/products'


/**
 * App state
 */

export interface AppState {
  token: string | null;
  navigation: NavigationItem[];
  contacts: Contacts;
  utmTags: IUtmTags;
  error?: any | null;
  allProducts:IProductsState;
  singleProduct:ISingleProductState;
  categories: ICategories;
  bag: IBagState;

}

export interface NavigationItem {
  name: string;
  label: string;
  link: string;
  footerNav: boolean;
}


export interface Contacts {
  data: Array<ContactsItem> | null;
  loading: boolean;
  done: boolean;
  error?: unknown | null;
}
export interface ContactsItem {
  data: [];
  key: string;
  status: boolean;
  value: string;
}


export interface ICategories {
  data: Array<string> | null;
  loading: boolean;
  done: boolean;
  error?: unknown | null;
}
export interface IProductsState {
  data: Array<IProducts> | null,
  loading: boolean;
  done: boolean;
  error?: unknown | null;
}
export interface ISingleProductState {
  data: IProducts | null,
  loading: boolean;
  done: boolean;
  error?: unknown | null;
}
export interface IBagState {
  data: any | null,
  done: boolean;
  loading: boolean;
  error?: unknown | null;

}

export interface IUtmTags {
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
}


export interface AutoLoginSetSuccessPayload {
  token: string;
}

export interface FetchSingleProductTriggerPayload {
  payload?: number;
}
export interface setBagTriggerPayload {
  payload?: string;
}
