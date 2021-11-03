import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

//store
import { selectIsAuthenticated } from 'store/modules/selectors';

// types
import { Props } from './types';
import { ColorTypes } from 'components/atoms/MainLogo/types';

import { data } from './data';

//atom component
import {Link} from '../../../../components/atoms/Link/index'

// styles
import { Button, Logo, Wrapper, HeaderTop, HeaderBottom, HeaderTopInteraction, HeaderTopButton } from './styles';
import { CustomMainWrapper } from 'styles/custom-global-styles';

//icons
import SearchIcon from '../../../icons/Search';
import LoginIcon from '../../../icons/Login';
import LikesIcon from '../../../icons/Likes';
import BagIcon from '../../../icons/Bag';

export function Header({ isToggled, onToggle, className }: Props) {
  // slice hook

  // selectors
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <Wrapper>
      <CustomMainWrapper>
        <HeaderTop>
          <HeaderTopButton>
            <SearchIcon />
          </HeaderTopButton>
          <Logo>
            Shop
          </Logo>
          <HeaderTopInteraction>
            <HeaderTopButton>
              <LoginIcon />
            </HeaderTopButton>
            <HeaderTopButton>
              <LikesIcon />
              <span>
                0
              </span>
            </HeaderTopButton>
            <HeaderTopButton>
              <BagIcon />
              <span>
                0
              </span>
            </HeaderTopButton>

          </HeaderTopInteraction>
        </HeaderTop>
          <HeaderBottom>
            {data.map(item =>
              <Link
                key={item.path}
                to={item.path}
              >
                {item.name}
              </Link>,
            )}
          </HeaderBottom>

      </CustomMainWrapper>
    </Wrapper>
  );
}
