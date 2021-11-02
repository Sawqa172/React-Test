import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import Input from 'components/atoms/Input';
import MainLogo from 'components/atoms/MainLogo';
import { media } from 'styles/media';

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

const ActionsButtons = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const LinksButtons = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const BackToLoginLabel = styled.span`
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-size: 16px;
  line-height: 24px;
  color: ${p => p.theme.colors.primary};
`;

const BackToLoginButton = styled(Link)`
  margin-left: 5px;
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-size: 16px;
  line-height: 24px;
  color: ${p => p.theme.colors.primary};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
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
  BackToLoginButton,
  BackToLoginLabel,
};
