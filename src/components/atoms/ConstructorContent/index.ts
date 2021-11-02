import styled from 'styled-components/macro';

import listImageIcon from 'assets/images/icons/check-double.svg';

// utils
import { media } from 'styles/media';

const ConstructorContent = styled.div`
  font-size: 14px;
  line-height: 1.4;
  div {
    margin: 15px 0;
  }
  p {
    margin: 15px 0;
  }
  ul {
    list-style: none;
    margin: 15px 0;
    padding: 0;
    > li {
      position: relative;
      padding-left: 34px;
      &::before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        height: 24px;
        width: 24px;
        background-size: 24px 24px;
        background-color: ${p => p.theme.colors.mainGreen};
        mask-image: url(${listImageIcon});
      }
      &:not(:first-child) {
        margin-top: 15px;
      }
    }
  }
  ol {
    margin: 15px 0;
    padding-left: 24px;
    > li {
      position: relative;
      padding-left: 14px;

      &:not(:first-child) {
        margin-top: 15px;
      }
    }
  }
  ${media.medium`
    font-size: 18px;
    line-height: 1.35;
  `}
`;

export default ConstructorContent;
