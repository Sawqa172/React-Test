import {
  ElementTypesType,
  DimensionsType,
  ColorElementType,
  PropsType,
} from './types';

const defaultProps: PropsType = {
  elType: ElementTypesType.Input,
  type: 'text',
  invalid: false,
  disabled: false,
  rules: {},
  touched: false,
  changed: () => {},
  onFocus: () => {},
  onBlur: () => {},
  dimension: DimensionsType.Regular,
  color: ColorElementType.Regular,
};

export default defaultProps;
