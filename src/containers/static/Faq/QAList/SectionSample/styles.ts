import styled from 'styled-components/macro';
import { media } from 'styles/media';
import ArrowDownIcon from 'components/icons/ArrowDown';
import { AnswerProps, QuestionIconProps } from './types';

const Wrapper = styled.li`
  padding-right: ${(34 / 375) * 100}vw;

  ${media.xxsmall`
    padding-right: 34px;
  `}

  ${media.medium`
    padding-right: ${(50 / 1920) * 100}vw;
  `}

  ${media.large`
    padding-right: ${50 * (1440 / 1920)}px;
  `}
`;

const Question = styled.h6`
  margin: 0;
  position: relative;
  font-family: ${p => p.theme.fontFamily.CocoGothicLight};
  font-size: ${(26 / 375) * 100}vw;
  line-height: ${(34 / 375) * 100}vw;
  cursor: pointer;

  ${media.xxsmall`
    font-size: 26px;
    line-height: 34px;
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

const QuestionIcon = styled.div<QuestionIconProps>`
  position: absolute;
  content: '';
  top: 0;
  left: 100%;
  width: ${(34 / 375) * 100}vw;
  height: ${(34 / 375) * 100}vw;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scaleY(${p => (p.isToggled ? -1 : 1)});
  transition: 0.3s transform;

  ${media.xxsmall`
    width: 34px;
    height: 34px;
  `}

  ${media.medium`
    width: ${(50 / 1920) * 100}vw;
    height: ${(50 / 1920) * 100}vw;
  `}

  ${media.large`
    width: ${50 * (1440 / 1920)}px;
    height: ${50 * (1440 / 1920)}px;
  `}
`;

const QuestionIconContent = styled(ArrowDownIcon)`
  width: ${(22 / 375) * 100}%;
  height: ${(11 / 375) * 100}%;

  ${media.xxsmall`
    width: 22px;
    height: 11px;
  `}

  ${media.medium`
    width: ${(34 / 1920) * 100}vw;
    height: ${(17 / 1920) * 100}vw;
  `}

  ${media.large` d
    width: ${34 * (1440 / 1920)}px;
    height: ${17 * (1440 / 1920)}px;
  `}
`;

const Answer = styled.div<AnswerProps>`
  margin-top: ${p => (p.isToggled ? (15 / 375) * 100 : 0)}vw;
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-size: ${(18 / 375) * 100}vw;
  line-height: ${(28 / 375) * 100}vw;
  color: ${p => p.theme.colors.primary};
  max-height: ${p => (p.isToggled ? '300vh' : 0)};
  opacity: ${p => (p.isToggled ? 1 : 0)};
  overflow: hidden;
  transition: margin 0.3s, max-height 0.3s, opacity 0.3s;

  ${media.xxsmall`
    margin-top: ${p => (p.isToggled ? 15 : 0)}px;
    font-size: 18px;
    line-height: 28px;
  `}

  ${media.medium`
    margin-top: ${p => (p.isToggled ? (20 / 1920) * 100 : 0)}vw;
    font-size: ${(24 / 1920) * 100}vw;
    line-height: ${(36 / 1920) * 100}vw;
    max-height: ${p => (p.isToggled ? '100vh' : 0)};
  `}

  ${media.large`
    margin-top: ${p => (p.isToggled ? 20 * (1440 / 1920) : 0)}px;
    font-size: ${24 * (1440 / 1920)}px;
    line-height: ${36 * (1440 / 1920)}px;
  `}

  & p {
    margin: 1em 0;
  }
`;

export { Wrapper, Question, QuestionIcon, QuestionIconContent, Answer };
