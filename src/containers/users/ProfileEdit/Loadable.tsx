/**
 * Asynchronously loads the component for ProfileEdit
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';

import LoadingWrapper from 'components/atoms/LoadingWrapper';
import LoadingIndicator from 'components/atoms/LoadingIndicator';
import { TypesType, ColorType } from 'components/atoms/LoadingIndicator/types';

export const ProfileEdit = lazyLoad(
  () => import('./index'),
  module => module.ProfileEdit,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator
          type={TypesType.Local}
          color={ColorType.Light}
          size={10}
        />
      </LoadingWrapper>
    ),
  },
);