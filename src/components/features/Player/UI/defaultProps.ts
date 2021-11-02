import { Props } from './types';

const defaultProps: Props = {
  duration: 0,
  played: 0,
  loaded: 0,
  volume: 0,
  playing: false,
  controlsEnabled: true,
  muted: false,
  onFullscreen: () => {},
  onPlayPause: () => {},
  seekMouseDown: () => {},
  seekChange: () => {},
  seekMouseUp: () => {},
  toggleMute: () => {},
  volumeChange: () => {},
};

export default defaultProps;
