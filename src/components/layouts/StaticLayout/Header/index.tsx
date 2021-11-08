import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

//store
import { selectBag, selectIsAuthenticated } from 'store/modules/selectors';

// types
import { Props } from './types';
import { ColorTypes } from 'components/atoms/MainLogo/types';

import { data } from './data';

//atom component
import { Link } from '../../../../components/atoms/Link/index';

// styles
import { Button, Logo, Wrapper, HeaderTop, HeaderBottom, HeaderTopInteraction, HeaderTopButton } from './styles';
import { CustomMainWrapper } from 'styles/custom-global-styles';

//icons
import SearchIcon from '../../../icons/Search';
import LoginIcon from '../../../icons/Login';
import LikesIcon from '../../../icons/Likes';
import BagIcon from '../../../icons/Bag';

export function Header({ isToggled, onToggle, className }: Props) {

  let [isOpenBag, setIsOpenBag] = useState<boolean>(false);
  // selectors
  const isAuthenticated = useSelector(selectIsAuthenticated);

  let bag = useSelector(selectBag);



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
          <HeaderTopInteraction className={isOpenBag ? 'header__bag_opened' : ''}>
            <HeaderTopButton>
              <LoginIcon />
            </HeaderTopButton>
            <HeaderTopButton>
              <LikesIcon />
              <span className={'header__quantity'}>
                0
              </span>
            </HeaderTopButton>
            <HeaderTopButton

              onClick={() => setIsOpenBag(!isOpenBag)}
            >
              <BagIcon />
              <span className={'header__quantity'}>
                {bag.length
                  ?
                  bag.length
                  :
                  '0'
                }
              </span>

            </HeaderTopButton>
            {bag.length
              ?
              <div className={'header__bag-container'}>
                {bag && bag.map((item, index) =>

                  <span key={index} className={'header__bag-container__name'}>
                     {index + 1}. {item}
                  </span>,
                )}
              </div>
              :
              <div className={'header__bag-container'}>
                <span>
                Нема нічого в корзині
              </span>
              </div>

            }

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
