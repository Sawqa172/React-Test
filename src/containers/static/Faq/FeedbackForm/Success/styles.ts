import styled from 'styled-components/macro';
import { media } from 'styles/media';

const Wrapper = styled.div`
  padding: ${(30 / 375) * 100}vw 0;

  ${media.xxsmall`
    padding: 30px 0;
  `}

  ${media.medium`
    padding: ${(60 / 1920) * 100}vw 0;
    height: ${(490 / 1920) * 100}vw;
  `}

  ${media.large`
    padding: ${60 * (1440 / 1920)}px 0;
    height: ${490 * (1440 / 1920)}px;
  `}
`;

const Description = styled.div`
  font-family: ${p => p.theme.fontFamily.CocoGothicBold};
  font-size: ${(26 / 375) * 100}vw;
  line-height: ${(34 / 375) * 100}vw;

  ${media.xxsmall`
    font-size: 26px;
    line-height: 30px;
  `}

  ${media.medium`
    font-size: ${(36 / 1920) * 100}vw;
    line-height: ${(40 / 1920) * 100}vw;
  `}

  ${media.large`
    font-size: ${36 * (1440 / 1920)}px;
    line-height: ${40 * (1440 / 1920)}px;
  `}
`;

export { Wrapper, Description };
