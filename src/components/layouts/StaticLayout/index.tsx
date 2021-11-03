import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Footer } from './Footer';

// styles
import { Wrapper, Header, Aside, Content , ContentBody} from './styles';
import { CustomMainWrapper } from 'styles/custom-global-styles';
import CustomAside from './CustomAside';


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
      <Content>
        <CustomMainWrapper>
          <ContentBody>
            <CustomAside>

            </CustomAside>
          </ContentBody>
        </CustomMainWrapper>
      </Content>
      {location.pathname !== '/test' && <Footer />}

    </Wrapper>
  );
}
