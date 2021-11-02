import React from 'react';
import ball from '../../../../assets/images/ball-logo.png';
// types
import { Props } from './types';
import { ColorTypes } from 'components/atoms/MainLogo/types';

// styles
import { Wrapper, Container, Item } from './styles';

export function Loader({ className }: Props) {
  return (
    <Wrapper className={className}>
      <Container>
        <Item />
        <Item />
      </Container>
    </Wrapper>
  );
}
