import styled from 'styled-components/macro';
import { media } from 'styles/media';
import H1 from 'components/atoms/H1';
import SectionSample from './SectionSample';
import { CategoriesTitleProps } from './types';

const Wrapper = styled.section`
  padding: ${(20 / 375) * 100}vw;
  position: relative;

  ${media.xxsmall`
    padding: 20px;
  `}

  ${media.medium`
    padding: ${(45 / 1920) * 100}vw ${(110 / 1920) * 100}vw;
  `}

  ${media.large`
    padding: ${45 * (1440 / 1920)}px ${110 * (1440 / 1920)}px;
  `}
`;

const Title = styled(H1)``;

const CategoriesList = styled.ul`
  margin: ${(20 / 375) * 100}vw 0 0;
  padding: 0;
  list-style-type: none;

  ${media.xxsmall`
    margin-top: 20px;
  `}

  ${media.medium`
    margin-top: ${(50 / 1920) * 100}vw;
  `}

  ${media.large`
    margin-top: ${50 * (1440 / 1920)}px;
  `}
`;

const CategoriesItem = styled.li``;

const CategoriesTitle = styled.h5<CategoriesTitleProps>`
  margin: 0;
  padding: ${(25 / 375) * 100}vw 0;
  font-family: ${p => p.theme.fontFamily.CocoGothicBold};
  font-size: ${(26 / 375) * 100}vw;
  line-height: ${(34 / 375) * 100}vw;
  text-transform: uppercase;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: ${(4 / 375) * 100}vw solid transparent;

  ${media.xxsmall`
    border-top: 0;
    border-bottom-width: 4px;
    padding: 25px 0;
    font-size: 26px;
    line-height: 34px;
  `}

  ${media.medium`
    border-bottom-width: ${(10 / 1920) * 100}vw;
    padding: ${(50 / 1920) * 100}vw 0;
    font-size: ${(36 / 1920) * 100}vw;
    line-height: ${(40 / 1920) * 100}vw;
  `}

  ${media.large`
    border-bottom-width: ${10 * (1440 / 1920)}px;
    padding: ${50 * (1440 / 1920)}px 0;
    font-size: ${36 * (1440 / 1920)}px;
    line-height: ${40 * (1440 / 1920)}px;
  `}

  ${p =>
    p.index % 1 === 0 &&
    `
      border-image: ${p.theme.gradients.linearRedBlue90} 50% 0;
    `}

  ${p =>
    p.index % 2 === 0 &&
    `
      border-image: ${p.theme.gradients.linearYellowBlue90} 50% 0;
    `}

  ${p =>
    p.index % 3 === 0 &&
    `
      border-image: ${p.theme.gradients.linearPurpleGreen90} 50% 0;
    `}
`;

const CategoriesSections = styled.ul`
  margin: 0;
  padding: ${(25 / 375) * 100}vw 0;
  list-style-type: none;

  ${media.xxsmall`
    padding: 25px 0;
  `}

  ${media.medium`
    margin-left: auto;
    width: 80%;
    padding: ${(50 / 1920) * 100}vw 0;
  `}

  ${media.large`
    padding: ${50 * (1440 / 1920)}px 0;
  `}
`;

const StyledSectionSample = styled(SectionSample)`
  & + & {
    margin-top: ${(20 / 375) * 100}%;

    ${media.xxsmall`
      margin-top: 20px;
    `}

    ${media.medium`
      margin-top: ${(40 / 1920) * 100}vw;
    `}

    ${media.large`
      margin-top: ${40 * (1440 / 1920)}px;
    `}
  }
`;

export {
  Wrapper,
  Title,
  CategoriesList,
  CategoriesItem,
  CategoriesTitle,
  CategoriesSections,
  StyledSectionSample as SectionSample,
};
