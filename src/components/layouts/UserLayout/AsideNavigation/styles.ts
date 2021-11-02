import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 0 15px;
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const NavItem = styled.li`
  & + & {
    margin-top: 10px;
  }
`;

const NavItemLink = styled(NavLink)`
  display: inline-block;
  padding: 0 20px;
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-size: 16px;
  line-height: 44px;
  width: 100%;
  color: ${p => p.theme.colors.primary};
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: font-weight 0.3s;

  &:hover,
  &.active {
    font-weight: 700;
  }
`;

export { Wrapper, NavList, NavItem, NavItemLink };
