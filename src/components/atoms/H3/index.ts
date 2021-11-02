import styled from 'styled-components/macro';
import { media } from 'styles/media';

const H3 = styled.h3`
  margin: 0;
  font-size: ${(26 / 375) * 100}vw;
  line-height: ${(45 / 375) * 100}vw;
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fontFamily.CocoGothicHeavy};
  text-transform: uppercase;
  letter-spacing: 0.03em;

  ${media.xxsmall`
    font-size: 26px;
    line-height: 45px;
  `}

  ${media.medium`
    font-size: ${(52 / 1920) * 100}vw;
    line-height: ${(90 / 1920) * 100}vw;
  `}

  ${media.large`
    font-size: ${52 * (1440 / 1920)}px;
    line-height: ${90 * (1440 / 1920)}px;
  `}
`;

export default H3;
