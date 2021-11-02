import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

// data
import { selectContacts } from 'store/modules/selectors';
import { iconsCollection, contacts } from './data';

// types
import { Props } from './types';

// styles
import { Wrapper, NavItem, NavItemIcon, NavItemLink, NavList } from './styles';

export default function AsideContacts({ className }: Props) {
  // selectors

  // locales hook
  const { t } = useTranslation();

  return (
    <Wrapper className={className}>
      <NavList>
        {contacts &&
          contacts.map(navItem => (
            <NavItem key={navItem.value}>
              <NavItemIcon as={iconsCollection[navItem.key]} />
              <NavItemLink
                href={
                  navItem.key === 'phone'
                    ? `tel:${navItem.value}`
                    : `mailto:${navItem.value}`
                }
              >
                {navItem.value}
              </NavItemLink>
            </NavItem>
          ))}
      </NavList>
    </Wrapper>
  );
}
