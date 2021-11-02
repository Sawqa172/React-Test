import styled from 'styled-components/macro';

const H4 = styled.h4`
  margin: 0;
  font-size: 24px;
  line-height: 1.5;
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  color: ${p => p.theme.colors.primary};
`;

export default H4;
