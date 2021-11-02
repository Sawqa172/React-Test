import styled from 'styled-components/macro';
import { media } from 'styles/media';

const H2 = styled.h1`
  margin: 0;
  font-size: ${(38 / 375) * 100}vw;
  line-height: ${(54 / 375) * 100}vw;
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fontFamily.CocoGothicHeavy};
  text-transform: uppercase;
  letter-spacing: 0.03em;

  ${media.xxsmall`
    font-size: 38px;
    line-height: 54px;
  `}

  ${media.medium`
    font-size: ${(72 / 1920) * 100}vw;
    line-height: ${(90 / 1920) * 100}vw;
  `}

  ${media.large`
    font-size: ${72 * (1440 / 1920)}px;
    line-height: ${90 * (1440 / 1920)}px;
  `}
`;

export default H2;
