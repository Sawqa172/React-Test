import styled from 'styled-components/macro';

const Text = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.4;
  color: ${p => p.theme.colors.primary};
`;

export default Text;
