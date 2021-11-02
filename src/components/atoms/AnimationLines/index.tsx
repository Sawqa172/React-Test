import React from 'react';

import { IWrapperType } from './types';

import defaultProps from './defaultProps';

import { Wrapper, Line1, Line2, Line3, Line4 } from './styles';

function AnimationLines({
  zIndex,
  intend,
  sizes,
  scale,
}: IWrapperType & typeof defaultProps) {
  return (
    <Wrapper zIndex={zIndex} intend={intend} sizes={sizes} scale={scale}>
      <Line1></Line1>
      <Line2></Line2>
      <Line3></Line3>
      <Line4></Line4>
    </Wrapper>
  );
}

AnimationLines.defaultProps = defaultProps;
export default AnimationLines;
