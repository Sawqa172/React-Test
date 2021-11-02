import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { media } from 'styles/media';

const Wrapper = styled.div``;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled.li`
  display: inline-flex;
  align-items: center;

  & + & {
    margin-left: ${(20 / 375) * 100}vw;

    ${media.xxsmall`
      margin-left: 20px;
    `}

    ${media.medium`
      flex: 0 0 auto;
      margin-left: ${(60 / 1920) * 100}vw;
    `}

    ${media.large`
      margin-left: ${60 * (1440 / 1920)}px;
    `}
  }
`;

const NavItemIcon = styled.span`
  margin-right: ${(8 / 375) * 100}vw;

  ${media.xxsmall`
    margin-right: 8px;
  `}
`;

const NavItemLink = styled.a`
  display: inline-block;
  font-family: ${p => p.theme.fontFamily.CocoGothicLight};
  font-size: ${(14 / 375) * 100}vw;
  line-height: 1;
  color: ${p => p.theme.colors.primary};
  text-decoration: none;

  ${media.xxsmall`
    font-size: 14px;
  `}

  &:hover,
  &.active {
    text-decoration: underline;
  }
`;

export { Wrapper, NavList, NavItem, NavItemIcon, NavItemLink };
