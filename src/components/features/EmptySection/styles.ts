import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.p`
  margin: 60px auto;
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  color: ${p => p.theme.colors.primary};
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
`;

const Link = styled(NavLink)`
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  color: ${p => p.theme.colors.primary};
  font-size: 14px;
  line-height: 1.2;
  &:hover,
  &:active {
    text-decoration: none;
  }
`;

export { Wrapper, Link };
