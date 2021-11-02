import React from 'react';

// styles
import { Wrapper, Inner, Header, Logo, Content } from './styles';

export function ProfessionalLayout({ children, profile }) {
  return (
    <Wrapper>
      <Inner>
        <Header>{/*<Logo src={LogoImage} alt="Logo" />*/}</Header>

        <Content>{children}</Content>
      </Inner>
    </Wrapper>
  );
}
