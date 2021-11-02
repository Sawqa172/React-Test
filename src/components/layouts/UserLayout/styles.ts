import styled from 'styled-components/macro';
import { media } from 'styles/media';

const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  overflow: hidden;
`;

const Inner = styled.main`
  position: relative;
  z-index: 0;
  //margin-top: 76px;
  margin-bottom: 55px;
  display: flex;
  flex-direction: column;
  //padding: 0 15px 15px;
  padding: 15px;
  min-height: calc(100vh - 76px - 55px);
  background-color: ${p => p.theme.colors.mainBlue};
  transition: padding 0.3s, margin 0.3s;

  ${media.xxsmall`
    // margin-top: 84px;
    margin-bottom: 62px;
    // min-height: calc(100vh - 84px - 62px);
    min-height: calc(100vh - 62px);
  `}

  ${media.medium`
    margin-bottom: 82px;
    // min-height: calc(100vh - 84px - 82px);
    min-height: calc(100vh - 82px);
  `}

  ${media.medium`
    margin-top: 74px;
    margin-bottom: 0;
    min-height: calc(100vh - 74px);
    padding: 30px;
  `}
`;

const Content = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 1650px;
`;

export { Wrapper, Inner, Content };
