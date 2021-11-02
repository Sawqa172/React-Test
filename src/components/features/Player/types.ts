export enum EPlayerEventType {
  Start = 'start',
  Play = 'play',
  Pause = 'pause',
  Stop = 'stop',
  Ended = 'ended',
}

export interface Props {
  source: string | null;
  className: string;
  onEventType: (type: EPlayerEventType) => void;
}

export interface OnProgressType {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
}
