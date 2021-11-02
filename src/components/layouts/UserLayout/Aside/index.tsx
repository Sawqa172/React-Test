import React from 'react';

import {
  Wrapper,
  Backdrop,
  Inner,
  Header,
  LogoWrapper,
  LogoLink,
  ToggleButton,
  Navigation,
} from './styles';

// types
import { Props } from './types';

export function Aside({ isVisible, onToggle }: Props) {
  return (
    <>
      {isVisible && <Backdrop onClick={onToggle} />}

      <Wrapper isVisible={isVisible}>
        <Inner>
          <Header>
            <ToggleButton type="button" onClick={onToggle} />
          </Header>

          <Navigation />
        </Inner>
      </Wrapper>
    </>
  );
}
