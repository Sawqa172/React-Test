import { IPropsType, EFileUploaderType } from './types';

const defaultProps: IPropsType = {
  disabled: false,
  onFileSelect: any => {},
  file: null,
  text: '',
  type: EFileUploaderType.Simple,
};

export default defaultProps;
