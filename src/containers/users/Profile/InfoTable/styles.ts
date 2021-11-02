import styled from 'styled-components/macro';
import { media } from 'styles/media';

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
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-size: 16px;
  line-height: 1.5;
  color: ${p => p.theme.colors.primary};

  ${media.medium`
    display: table-cell;
    padding: 7px 0;
    width: 160px;
  `}
`;

const TableValueCell = styled.div`
  margin-top: 5px;
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-size: 18px;
  line-height: 1.35;
  color: ${p => p.theme.colors.primary};

  ${media.medium`
    margin-top: 0;
    display: table-cell;
    padding: 7px 0;
    border-left: 10px solid transparent;
  `}
`;

export { Table, TableBody, TableRow, TableKeyCell, TableValueCell };
