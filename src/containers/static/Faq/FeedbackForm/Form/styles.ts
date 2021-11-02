import styled from 'styled-components/macro';
import { media } from 'styles/media';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

const Wrapper = styled.form`
  display: inline-block;
  width: 100%;
`;

const Fields = styled.div`
  margin-top: ${(25 / 375) * 100}vw;

  ${media.xxsmall`
    margin-top: 25px;
  `}

  ${media.medium`
    margin-top: ${(50 / 1920) * 100}vw;
  `}

  ${media.large`
    margin-top: ${50 * (1440 / 1920)}px
  `}
`;

const InputStyled = styled(Input)`
  & + & {
    margin-top: ${(15 / 375) * 100}vw;

    ${media.xxsmall`
      margin-top: 10px;
    `}

    ${media.medium`
      margin-top: ${(20 / 1920) * 100}vw;
    `}

    ${media.large`
      margin-top: ${20 * (1440 / 1920)}px
    `}
  }
`;

const Actions = styled.div`
  margin-top: ${(15 / 375) * 100}vw;
  display: flex;
  justify-content: flex-end;

  ${media.xxsmall`
    margin-top: 15px;
  `}

  ${media.medium`
    display: block;
    margin-top: ${(20 / 1920) * 100}vw;
  `}

  ${media.large`
    margin-top: ${20 * (1440 / 1920)}px
  `}
`;

const SubmitButton = styled(Button)`
  width: ${(200 / 375) * 100}vw;

  ${media.xxsmall`
    width: 200px;
  `}

  ${media.medium`
    width: ${(270 / 1920) * 100}vw;
  `}

  ${media.large`
    width: ${270 * (1440 / 1920)}px
  `}
`;

export { Wrapper, Fields, InputStyled as Input, Actions, SubmitButton };
