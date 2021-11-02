import styled from 'styled-components/macro';
import Icon from '../Icon';

const Svg = styled(Icon)`
  width: 17px;
  height: 12px;
  color: ${p => p.theme.colors.primary};
`;

export { Svg };
