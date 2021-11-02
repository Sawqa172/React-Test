import styled from 'styled-components/macro';
import Icon from '../Icon';

const Svg = styled(Icon)`
  width: 24px;
  height: 24px;
  color: ${p => p.theme.colors.primary};
`;

export { Svg };
