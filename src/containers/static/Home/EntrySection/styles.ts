import styled from 'styled-components/macro';
import { media } from 'styles/media';
import H2 from 'components/atoms/H2';
import VideoPlayer from 'components/features/Player';
import { BackgroundImageProps } from './types';

const Wrapper = styled.section`
  position: relative;
  padding-top: ${(20 / 375) * 100}vw;

  ${media.xxsmall`
    padding-top: 20px;
  `}

  ${media.medium`
    padding-top: ${(150 / 1920) * 100}vw;
  `}
  
  ${media.large`
    padding-top: ${150 * (1440 / 1920)}px;
  `}
`;

const Title = styled(H2)`
  position: relative;
  z-index: 2;
  padding: 0 20px;

  ${media.medium`
    width: 50%;
    padding: 0 ${(110 / 1920) * 100}vw;
  `}

  ${media.large`
    padding: 0 ${110 * (1440 / 1920)}px;
  `}
`;

const Background = styled.div`
  position: relative;
  z-index: 1;
  padding-bottom: 80%;
  margin-top: ${(50 / 375) * 100}vw;

  ${media.xxsmall`
    margin-top: 50px;
    padding-bottom: 300px;
  `}

  ${media.medium`
    margin-top: ${-(90 / 1920) * 100}vw;
    padding-bottom: ${(650 / 1920) * 100}vw
  `}

  ${media.large`
    margin-top: ${-90 * (1440 / 1920)}px;
    padding-bottom: ${650 * (1440 / 1920)}px;
  `}
`;

const BackgroundVideo = styled(VideoPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const BackgroundImage = styled.div<BackgroundImageProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${p => p.src});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  ${media.xxsmall`
    background-size: auto 90%;
  `}

  ${media.medium`
    background-size: auto 65%;
  `}
`;

export { Wrapper, Title, Background, BackgroundVideo, BackgroundImage };
