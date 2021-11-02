import React from 'react';

// types
import { Props } from './types';
import { ColorTypes } from 'components/atoms/MainLogo/types';

// styles
import {
  Logo,
  Wrapper,
  LeftSide,
  RightSide,
  Navigation,
  Contacts,
} from './styles';

export function Footer({ className }: Props) {
  return (
    <Wrapper className={className}>
      <LeftSide>
        <Logo to="/" colorType={ColorTypes.Black} />
        <Navigation />
      </LeftSide>

      <RightSide>
        <Contacts />
      </RightSide>
    </Wrapper>
  );
}
