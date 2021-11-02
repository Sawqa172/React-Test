import styled from 'styled-components/macro';
import { media } from 'styles/media';

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  min-width: 310px;
  background-color: ${p => p.theme.colors.mainBlue};

  ${media.medium`
    border-bottom: 1px solid ${p => p.theme.colors.mainBlue};
  `}
`;

const Inner = styled.div`
  height: 76px;
  padding: 15px;
  transition: padding 0.3s, margin 0.3s;

  ${media.xxsmall`
    height: 84px;
  `}

  ${media.medium`
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    justify-content: flex-end;
    align-items: center;
    height: 74px;
    margin-left: 257px;
    padding: 15px 30px;
  `}

  ${media.large`
    padding-left: 105px;
    padding-right: 35px;
  `}
`;

export { Wrapper, Inner };
