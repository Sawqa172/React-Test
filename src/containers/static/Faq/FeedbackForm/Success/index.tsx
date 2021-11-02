import React from 'react';

import { Wrapper, Description } from './styles';

// types
import { Props } from './types';

export default function Success({ className }: Props) {
  return (
    <Wrapper className={className}>
      <Description>
        <p>Дякуємо за ваше запитання.</p>
        <p>Найближчим часом відповідь буде надіслано на електронну пошту</p>
      </Description>
    </Wrapper>
  );
}
