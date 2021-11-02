import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

// store
import { selectNavigation } from 'store/modules/selectors';

// types
import { Props } from './types';

// styles
import { Wrapper, NavList, NavItem, NavItemLink } from './styles';

export default function AsideNavigation({ onToggle, className }: Props) {
  // selectors
  const routes = useSelector(selectNavigation);

  // locales hook
  const { t } = useTranslation();

  return (
    <Wrapper className={className}>
      <NavList>
        {routes.map(navItem => (
          <NavItem key={navItem.name} onClick={onToggle}>
            <NavItemLink to={navItem.link} exact>
              {t(navItem.label)}
            </NavItemLink>
          </NavItem>
        ))}
      </NavList>
    </Wrapper>
  );
}
