import Profile from 'types/models/profile';
import { RoleTypes } from 'types/models/role';

/**
 * Profile State
 */
export interface ProfileState {
  profile: {
    data: Profile | null;
    fetch: {
      loading: boolean;
      done: boolean;
      error: unknown | null;
    };
    update: {
      loading: boolean;
      done: boolean;
      error: unknown | null;
    };
  };
  password: {
    update: {
      loading: boolean;
      done: boolean;
      error: unknown | null;
    };
  };
}

/**
 * Profile Includes
 */
export enum ProfileIncludesTypes {
  Roles = 'roles',
  Purchase = 'purchase',
}

/**
 * Payloads
 */
export interface UserPayload {
  avatar?: string | null;
  firstName?: string;
  lastName?: string;
  phone?: string;
  aboutMe?: string;
}

/**
 * Reducers
 */

// fetch profile
export interface FetchDataTriggerPayload {
  role: RoleTypes;
  query: { [key: string]: number | string };
}

export type FetchDataFailurePayload = unknown | null;

// update profile
export type UpdateDataTriggerPayload = UserPayload;

export type UpdateDataFailurePayload = unknown | null;

// update password
export interface UpdatePasswordTriggerPayload {
  role: RoleTypes;
  data: {
    password: string;
    passwordConfirmation: string;
  };
}

export type UpdatePasswordFailurePayload = unknown | null;

/**
 * Services
 */

// get profile
export interface GetDataParams {
  role: RoleTypes;
  query: { [key: string]: number | string };
}

// put profile
export type PostDataParams = UserPayload;

// put password
export interface PostPasswordParams {
  role: RoleTypes;
  data: {
    password: string;
    passwordConfirmation: string;
  };
}
