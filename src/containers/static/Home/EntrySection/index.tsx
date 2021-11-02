import React  from 'react';

import {
  Wrapper,
  Title,
} from './styles';

// types
import { Props } from './types';
export default function EntrySection({ className }: Props) {
  return (
    <Wrapper className={className}>
      <Title>
        Hello world!
      </Title>
    </Wrapper>
  );
}
