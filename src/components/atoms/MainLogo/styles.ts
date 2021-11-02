import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { media } from 'styles/media';

const Link = styled(NavLink)`
  display: inline-block;
  font-size: 0;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

export { Link, Image };
