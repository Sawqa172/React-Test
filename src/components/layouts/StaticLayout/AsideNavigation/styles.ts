import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { media } from 'styles/media';

const Wrapper = styled.div`
  padding: 0 15px;
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 0;
`;

const NavItem = styled.li`
  text-align: center;

  & + & {
    margin-top: ${(10 / 375) * 100}vw;

    ${media.xxsmall`
      margin-top: 10px;
    `}

    ${media.medium`
      margin-top: ${(40 / 1920) * 100}vw;
    `}

    ${media.large`
      margin-top: ${40 * (1440 / 1920)}px;
    `}
  }
`;

const NavItemLink = styled(NavLink)`
  display: inline-block;
  font-family: ${p => p.theme.fontFamily.CocoGothicHeavy};
  font-size: ${(38 / 375) * 100}vw;
  line-height: ${(54 / 375) * 100}vw;
  color: ${p => p.theme.colors.primary};
  background: ${p => p.theme.colors.primary};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background 0.3s;

  &:hover,
  &.active {
    background: ${p => p.theme.gradients.radialBlue};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  ${media.xxsmall`
    font-size: 38px;
    line-height: 54px;
  `}

  ${media.medium`
    font-size: ${(72 / 1440) * 100}vw;
    line-height: ${(90 / 1440) * 100}vw;
  `}

  ${media.large`
    font-size: ${72 * (1440 / 1920)}px;
    line-height: ${90 * (1440 / 1920)}px;
  `}
`;

export { Wrapper, NavList, NavItem, NavItemLink };
