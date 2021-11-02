import React from 'react';
import { ChangeEvent } from 'react';

export interface Props {
  duration: number;
  played: number;
  loaded: number;
  volume: number;
  playing: boolean;
  controlsEnabled: boolean;
  muted: boolean;
  onFullscreen(): void;
  onPlayPause(): void;
  seekMouseDown(): void;
  seekChange(e: ChangeEvent<HTMLInputElement>): void;
  seekMouseUp(e: React.MouseEvent<HTMLInputElement>): void;
  toggleMute(): void;
  volumeChange(e: ChangeEvent<HTMLInputElement>): void;
}

export interface VolumeBarItemType {
  id: number;
  isActive: boolean;
}

export interface WrapperProps {
  readonly isPaused: boolean;
  readonly isActive: boolean;
}

export interface PlayPauseButtonProps {
  readonly playing: boolean;
}

export interface PlayButtonProps {
  readonly playing: boolean;
}

export interface ToggleMuteProps {
  readonly muted: boolean;
}

export interface VolumeColProps {
  readonly isActive: boolean;
}
