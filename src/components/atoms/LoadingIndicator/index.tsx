/**
 *
 * LoadingIndicator
 *
 */

import React from 'react';

import { Wrapper, Inner, Spinner } from './styles';
import { ColorType, PropsType, TypesType } from './types';

function LoadingIndicator({
  type = TypesType.Local,
  color = ColorType.Light,
  size = 10,
}: PropsType) {
  return (
    <Wrapper type={type} color={color} size={size}>
      <Inner>
        <Spinner type={type} color={color} size={size} />
      </Inner>
    </Wrapper>
  );
}

export default LoadingIndicator;
