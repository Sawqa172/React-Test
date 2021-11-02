import { PropsType, ButtonDimensionsType, ButtonGroupsType } from './types';

const defaultProps: PropsType = {
  dimension: ButtonDimensionsType.Regular,
  group: ButtonGroupsType.OutlinedBlack,
  isLoading: false,
  children: null,
  onClick: () => {},
};

export default defaultProps;
