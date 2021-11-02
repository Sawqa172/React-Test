import { ReactPlayerProps } from 'react-player';

const initOptionsState: ReactPlayerProps = {
  url: '',
  pip: true,
  playing: true,
  controls: false,
  light: false,
  volume: 0,
  muted: true,
  played: 0,
  loaded: 0,
  loop: true,
  duration: 0,
  playbackRate: 1.0,
  playsinline: true,
};

export { initOptionsState };
