import styled from 'styled-components/macro';
import Icon from '../Icon';

const Svg = styled(Icon)`
  width: 14px;
  height: 14px;
  color: ${p => p.theme.colors.primary};
`;

export { Svg };
