import { EPlayerEventType, Props } from './types';

const defaultProps: Props = {
  source: null,
  className: '',
  onEventType: (type: EPlayerEventType) => {},
};

export default defaultProps;
