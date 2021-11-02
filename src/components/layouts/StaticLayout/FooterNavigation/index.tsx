import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

// store
import { selectFooterNavigation } from 'store/modules/selectors';

// types
import { Props } from './types';

// styles
import { Wrapper, NavList, NavItem, NavItemLink } from './styles';

export default function FooterNavigation({ className }: Props) {
  // selectors
  const routes = useSelector(selectFooterNavigation);

  // locales hook
  const { t } = useTranslation();

  return (
    <Wrapper className={className}>
      <NavList>
        {routes.map(navItem => (
          <NavItem key={navItem.name}>
            <NavItemLink to={navItem.link}>{t(navItem.label)}</NavItemLink>
          </NavItem>
        ))}
      </NavList>
    </Wrapper>
  );
}
