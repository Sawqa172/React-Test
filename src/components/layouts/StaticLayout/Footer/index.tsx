import React from 'react';

// types
import { Props } from './types';
import { ColorTypes } from 'components/atoms/MainLogo/types';

//data
import { data } from './data';


// styles

import {
  Logo,
  Wrapper,
  FooterTop,
  FooterTopContent,
  FooterTopNav,
  FooterTopSocial,
  FooterBottom,
  Copyright,
} from './styles';
import { CustomMainWrapper } from 'styles/custom-global-styles';

// atom component link
import { Link } from '../../../../components/atoms/Link/index';

//icons
import FacebookIcon from '../../../icons/Facebook';
import InstagramIcon from '../../../icons/Instagram';


export function Footer({ className }: Props) {
  return (
    <Wrapper className={className}>
      <FooterTop>
        <CustomMainWrapper>
          <FooterTopContent>
            <Logo>
              Shop
            </Logo>
            <FooterTopNav>
              {data.map(item =>
                <Link
                  key={item.path}
                  to={item.path}
                >
                  {item.name}
                </Link>,
              )}
            </FooterTopNav>
            <FooterTopSocial>
              <a href = '#'>
                <FacebookIcon>

                </FacebookIcon>
              </a>
              <a href = '#'>
                <InstagramIcon>

                </InstagramIcon>
              </a>
            </FooterTopSocial>



          </FooterTopContent>

        </CustomMainWrapper>
      </FooterTop>
      <FooterBottom>
        <CustomMainWrapper>
          <Copyright>
            Copyright © 2021, All Right Reserved
          </Copyright>
        </CustomMainWrapper>

      </FooterBottom>


    </Wrapper>
  );
}
