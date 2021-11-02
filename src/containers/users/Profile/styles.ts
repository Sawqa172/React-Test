import styled from 'styled-components/macro';
import { media } from 'styles/media';
import Button from 'components/atoms/Button';

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.mainWhite};
  padding: 10px;
  border-radius: 15px;

  ${media.medium`
    padding: 30px;
  `}
`;

const Header = styled.div`
  ${media.medium`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`;

const Caption = styled.h1`
  margin: 0;
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-size: 18px;
  line-height: 1.5;
  color: ${p => p.theme.colors.primary};

  ${media.medium`
    flex: 1 1 auto;
    font-size: 24px;
  `}
`;

const EditButton = styled(Button)`
  margin-top: 10px;
  width: 100%;

  ${media.medium`
    margin-top: 0px;
    margin-left: 30px;
    flex: 0 0 auto;
    width: auto;
  `}
`;

const Inner = styled.div`
  min-height: 800px;

  ${media.medium`
    min-height: 400px;
  `}
`;

const Content = styled.div`
  margin-top: 30px;

  ${media.medium`
    display: flex;
    flex-direction: row;
  `}
`;

const Aside = styled.div`
  text-align: center;

  ${media.medium`
    flex: 0 0 auto;
  `}
`;

const Avatar = styled.img`
  width: 192px;
  height: 192px;
  border-radius: 50%;
  object-fit: cover;
`;

const DefaultAvatar = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 192px;
  height: 192px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.colors.mainBlue};
`;

const DefaultAvatarIcon = styled.span`
  width: 100px;
  height: 100px;
`;

const Info = styled.div`
  margin-top: 30px;

  ${media.medium`
    margin-top: 0;
    margin-left: 30px;
    flex: 1 1 auto;
    max-width: 1032px;
  `}

  ${media.large`
    margin-left: 150px;
  `}
`;

const ChangePassword = styled(Button)`
  margin-top: 15px;

  ${media.medium`
    width: auto;
  `}
`;

export {
  Wrapper,
  Header,
  Caption,
  EditButton,
  Inner,
  Content,
  Aside,
  Avatar,
  DefaultAvatar,
  DefaultAvatarIcon,
  Info,
  ChangePassword,
};
