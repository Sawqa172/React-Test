import React, { useState } from 'react';

import { Aside } from './Aside';
import { Header } from './Header';
import { Footer } from './Footer';

// styles
import { Wrapper, Inner, Content } from './styles';

export function UserLayout({ children }) {
  // local state
  const [asideVisibilityStatus, toggleAsideVisibility] =
    useState<boolean>(false);

  // toggle aside handler
  const toggleAsideHandler = () => {
    toggleAsideVisibility(!asideVisibilityStatus);
  };

  return (
    <Wrapper>
      <Header />

      <Aside isVisible={asideVisibilityStatus} onToggle={toggleAsideHandler} />

      <Inner>
        <Content>{children}</Content>
        <Footer />
      </Inner>
    </Wrapper>
  );
}
