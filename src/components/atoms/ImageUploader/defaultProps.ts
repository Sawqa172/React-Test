import { IPropsType } from './types';

const defaultProps: IPropsType = {
  name: 'file',
  disabled: false,
  src: null,
  text: '',
  description: [],
  changed: () => {},
};

export default defaultProps;
