import React, { useEffect } from 'react';

import { Wrapper, Navigation, Contacts } from './styles';

// types
import { Props } from './types';

export function Aside({ isVisible, onToggle, className }: Props) {
  const fixedBody = () => {
    let fix = document.getElementById('root');
    if (isVisible) {
      fix!.style.height = '100vh';
      fix!.style.overflow = 'hidden';
    } else {
      fix!.style.height = '1px';
      fix!.style.overflow = 'visible';
    }
  };
  useEffect(() => {
    fixedBody();
  }, [isVisible]);
  return (
    <Wrapper isVisible={isVisible} className={className}>
      <Navigation onToggle={onToggle} />
      <Contacts />
    </Wrapper>
  );
}
