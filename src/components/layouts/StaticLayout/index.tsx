import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Footer } from './Footer';

// styles
import { Wrapper, Header, Aside, Content } from './styles';

export function StaticLayout({ children }) {
  // router hooks
  const location = useLocation();

  // local state
  const [asideVisibilityStatus, toggleAsideVisibility] =
    useState<boolean>(false);

  // toggle aside handler
  const toggleAsideHandler = () => {
    toggleAsideVisibility(!asideVisibilityStatus);
  };

  return (
    <Wrapper>
      <Header isToggled={asideVisibilityStatus} onToggle={toggleAsideHandler} />

      <Aside isVisible={asideVisibilityStatus} onToggle={toggleAsideHandler} />

      <Content>{children}</Content>

      {location.pathname !== '/test' && <Footer />}
    </Wrapper>
  );
}
