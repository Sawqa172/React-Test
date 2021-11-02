import styled from 'styled-components/macro';
import { media } from 'styles/media';

const Wrapper = styled.div`
  max-width: 1650px;
  width: 100%;
  margin: 35px auto 20px;
  background-color: ${p => p.theme.colors.mainBlue};
  border-top: 1px solid ${p => p.theme.colors.mainBlue};
  ${media.large`
    margin: 55px auto 20px;
  `}
`;

const Inner = styled.div`
  padding-top: 30px;
  ${media.large`
     padding-top: 50px;
  `}
`;

export { Wrapper, Inner };
