import styled from 'styled-components/macro';
import { media } from 'styles/media';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

const Wrapper = styled.form`
  display: block;
  background-color: ${props => props.theme.colors.mainWhite};
  padding: 10px;
  border-radius: 15px;

  ${media.medium`
    padding: 30px;
  `}
`;

const Profile = styled.div``;

const ProfileCaption = styled.h2`
  margin: 0 0 30px 0;
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-size: 18px;
  line-height: 1.5;
  color: ${p => p.theme.colors.primary};

  ${media.medium`
    flex: 1 1 auto;
    font-size: 24px;
  `}
`;

const Table = styled.div`
  ${media.medium`
    display: table;
    width: 100%;
    border: none;
    border-collapse: collapse;
  `}
`;

const TableBody = styled.div`
  ${media.medium`
    display: table-body;
  `}
`;

const TableRow = styled.div`
  & + & {
    margin-top: 15px;

    ${media.medium`
      margin-top: 0;
    `}
  }

  ${media.medium`
    display: table-row;
  `}
`;

const TableKeyCell = styled.div`
  display: none;
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-size: 16px;
  line-height: 54px;
  color: ${p => p.theme.colors.primary};
  vertical-align: top;

  ${media.medium`
    display: table-cell;
    padding: 7px 0;
    width: 160px;
  `}
`;

const TableValueCell = styled.div`
  margin-top: 5px;

  ${media.medium`
    margin-top: 0;
    display: table-cell;
    padding: 7px 0;
    border-left: 30px solid transparent;
  `}
`;

const InputStyled = styled(Input)`
  ${media.medium`
    width: 390px;
  `}
`;

const Actions = styled.div`
  margin-top: 30px;
`;

const SaveButton = styled(Button)`
  width: auto;
  min-width: 135px;
  max-width: 160px;
`;

export {
  Wrapper,
  Profile,
  ProfileCaption,
  Table,
  TableBody,
  TableRow,
  TableKeyCell,
  TableValueCell,
  InputStyled as Input,
  Actions,
  SaveButton,
};
