import { Home } from '../../types/models/home';

/**
 * App state
 */

export interface AppState {
  token: string | null;
  navigation: NavigationItem[];
  contacts: Contacts;
  utmTags: IUtmTags;
  error?: any | null;
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

export interface IUtmTags {
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
}

export interface AutoLoginSetSuccessPayload {
  token: string;
}
