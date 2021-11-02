import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import Input from 'components/atoms/Input';
import { media } from 'styles/media';
import MainLogo from 'components/atoms/MainLogo';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 442px;
  width: 100%;
`;

const Header = styled.div`
  text-align: center;
`;

const HeaderLabel = styled.h1`
  margin: 0;
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-size: 30px;
  line-height: 150%;
  color: ${p => p.theme.colors.primary};
`;

const HeaderLogo = styled(MainLogo)`
  margin-top: 10px;
  width: 80%;

  ${media.medium`
    margin-top: 20px;
  `}
`;

const Form = styled.form`
  margin-top: 30px;

  ${media.medium`
    margin-top: 60px;
  `}
`;

const InputStyled = styled(Input)`
  & + & {
    margin-top: 15px;
  }
`;

const LinksButtons = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

const ActionsButtons = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const ForgotPasswordLink = styled(Link)`
  align-self: flex-start;
  display: inline-block;
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-size: 16px;
  line-height: 150%;
  color: ${p => p.theme.colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SignUpLink = styled(Link)`
  align-self: flex-start;
  display: inline-block;
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-size: 16px;
  line-height: 150%;
  color: ${p => p.theme.colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ProvidersButtons = styled.div`
  margin-top: 30px;

  ${media.medium`
    margin-top: 60px;
  `}
`;

const ProvidersButtonsCaption = styled.h2`
  margin: 0;
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-size: 16px;
  line-height: 150%;
  color: ${p => p.theme.colors.primary};
  text-align: center;
`;

const ProvidersButtonsSocials = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > *:not(:first-of-type) {
    margin-left: 15px;
  }

  ${media.medium`
    margin-top: 30px;
  `}
`;

export {
  Wrapper,
  Header,
  HeaderLabel,
  HeaderLogo,
  Form,
  InputStyled as Input,
  LinksButtons,
  ActionsButtons,
  ForgotPasswordLink,
  SignUpLink,
  ProvidersButtons,
  ProvidersButtonsCaption,
  ProvidersButtonsSocials,
};
