import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

// data
import { selectContacts } from 'store/modules/selectors';
import { iconsCollection, contacts } from './data';

// types
import { Props } from './types';

// styles
import { Wrapper, NavItem, NavItemIcon, NavItemLink, NavList } from './styles';
import { useAppSlice } from '../../../../store/modules/hook';

export default function FooterContacts({ className }: Props) {
  // selectors
  const { actions } = useAppSlice();
  const dispatch = useDispatch();
  // const requestData = () => dispatch(actions.fetchContactsDataTrigger());
  // locales hook
  const { t } = useTranslation();

  // useEffect(() => {
  //   requestData();
  // }, []);

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
