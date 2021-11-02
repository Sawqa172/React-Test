import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { media } from 'styles/media';

const Wrapper = styled.div``;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 0;
`;

const NavItem = styled.li`
  display: inline-block;

  & + & {
    margin-left: ${(20 / 375) * 100}vw;

    ${media.xxsmall`
      margin-left: 20px;
    `}

    ${media.medium`
      flex: 0 0 auto;
      margin-left: ${(45 / 1920) * 100}vw;
    `}

    ${media.large`
      margin-left: ${45 * (1440 / 1920)}px;
    `}
  }
`;

const NavItemLink = styled(NavLink)`
  display: inline-block;
  font-family: ${p => p.theme.fontFamily.CocoGothicLight};
  font-size: ${(16 / 375) * 100}vw;
  line-height: 1;
  color: ${p => p.theme.colors.primary};
  text-decoration: none;
  text-transform: uppercase;

  &:hover,
  &.active {
    font-weight: bold;
  }

  ${media.xxsmall`
    font-size: 16px;
  `}
`;

export { Wrapper, NavList, NavItem, NavItemLink };
