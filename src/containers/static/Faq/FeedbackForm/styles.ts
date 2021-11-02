import styled from 'styled-components/macro';
import { media } from 'styles/media';
import Form from './Form';
import Success from './Success';
import H2 from 'components/atoms/H2';
import starBg from 'assets/images/star-bg.png';

const Wrapper = styled.section`
  padding: ${(30 / 375) * 100}vw;
  background-color: ${p => p.theme.colors.mainGray};

  ${media.xxsmall`
    padding: 30px;
  `}

  ${media.medium`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: ${(60 / 1920) * 100}vw ${(110 / 1920) * 100}vw;
  `}

  ${media.large`
    padding: ${60 * (1440 / 1920)}px ${110 * (1440 / 1920)}px;
  `}
`;

const LeftSide = styled.div`
  ${media.medium`
    flex: 0 0 40%;
    align-self: stretch;
    background: url(${starBg}) center bottom / ${
    (530 / 1920) * 100
  }vw auto no-repeat;
  `}

  ${media.large`
    background-size: ${530 * (1440 / 1920)}px auto;
  `}
`;

const Title = styled(H2)``;

const RightSide = styled.div`
  padding: ${(25 / 375) * 100}vw 0;

  ${media.xxsmall`
    padding: 25px 0;
  `}

  ${media.medium`
    flex: 0 0 50%;
    padding: ${(100 / 1920) * 100}vw 0;
  `}

  ${media.large`
    padding: ${100 * (1440 / 1920)}px 0;
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

const StyledForm = styled(Form)``;

const StyledSuccess = styled(Success)``;

export {
  Wrapper,
  LeftSide,
  Title,
  RightSide,
  Description,
  StyledForm as Form,
  StyledSuccess as Success,
};
