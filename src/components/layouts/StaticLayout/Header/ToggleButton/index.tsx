import React from 'react';

// types
import { Props } from './types';

// styles
import { Wrapper } from './styles';

export function ToggleButton({ isToggled, onClick, className }: Props) {
  return (
    <Wrapper
      type="button"
      isToggled={isToggled}
      onClick={onClick}
      className={className}
    >
      <span></span>
      <span></span>
      <span></span>
    </Wrapper>
  );
}
