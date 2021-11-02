import styled from 'styled-components/macro';
import Icon from '../Icon';

const Svg = styled(Icon)`
  width: 38px;
  height: 21px;
  color: ${p => p.theme.colors.primary};
`;

export { Svg };
