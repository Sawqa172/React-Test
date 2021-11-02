import React from 'react';
import { useWindowSize } from 'react-use';

import AnimationLines from 'components/atoms/AnimationLines';

// styles
import { Wrapper, Content, Background } from './styles';
import { useLocation } from 'react-router-dom';

export function AuthLayout({ children }) {
  // hooks
  const { width: windowWidth } = useWindowSize();
  const { pathname } = useLocation();

  // local vars
  const isMobile = windowWidth < 1024;

  return (
    <Wrapper>
      <Content>{children}</Content>

      {!isMobile && (
        <Background pathname={pathname}>
          <AnimationLines />
        </Background>
      )}
    </Wrapper>
  );
}
