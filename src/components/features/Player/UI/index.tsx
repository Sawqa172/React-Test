/**
 *
 * UI
 *
 */

import React, { memo, useEffect, useState } from 'react';

import Duration from './Duration';

import {
  Wrapper,
  FullscreenButton,
  PlayPauseButton,
  Controls,
  PlayButton,
  Elapsed,
  Timeline,
  Seek,
  Buffer,
  Timestamp,
  Progress,
  ToggleMute,
  Volume,
  VolumeRange,
  VolumeBar,
  VolumeCol,
} from './styles';
import defaultProps from './defaultProps';
import { Props, VolumeBarItemType } from './types';
import { initVolumeBar } from './data';

const volumeBarCoef = 100 / initVolumeBar.length;

function UI({
  duration,
  played,
  loaded,
  volume,
  playing,
  controlsEnabled,
  muted,
  onFullscreen,
  onPlayPause,
  seekMouseDown,
  seekChange,
  seekMouseUp,
  toggleMute,
  volumeChange,
}: Props) {
  // volume bar state
  const [volumeBar, setVolumeBar] =
    useState<Array<VolumeBarItemType>>(initVolumeBar);

  // is controls active
  const [isControlsActive, setIsControlsActive] = useState<boolean>(true);

  // watch volume - update volume bar
  useEffect(() => {
    let updatedVolumeBar = [...volumeBar];
    updatedVolumeBar = updatedVolumeBar.map(
      (col: VolumeBarItemType, index: number) => ({
        ...col,
        isActive: volumeBarCoef * index < volume * 100,
      }),
    );
    setVolumeBar(updatedVolumeBar);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [volume]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isControlsActive) {
      timer = setTimeout(() => {
        setIsControlsActive(false);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [isControlsActive]);

  // mouse move handler
  const mouseMoveHandler = () => {
    setIsControlsActive(true);
  };

  // mouse leave handler
  const mouseLeaveHandler = () => {
    setIsControlsActive(false);
  };

  // play\pause button click handler
  const playPauseButtonClickHandler = () => {
    onPlayPause();
  };

  return (
    <Wrapper
      isPaused={!playing}
      isActive={isControlsActive}
      onMouseMove={mouseMoveHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <PlayPauseButton
        playing={playing}
        onClick={playPauseButtonClickHandler}
      />

      <Controls>
        {controlsEnabled ? (
          <PlayButton playing={playing} onClick={onPlayPause} />
        ) : null}

        {controlsEnabled ? (
          <Elapsed>
            <Duration seconds={duration * played} />
          </Elapsed>
        ) : null}

        {controlsEnabled ? (
          <Timeline>
            <Seek
              type="range"
              min={0}
              max={1}
              step="any"
              value={played}
              onMouseDown={seekMouseDown}
              onChange={seekChange}
              onMouseUp={seekMouseUp}
            />
            <Buffer style={{ width: `${loaded * 100}%` }} />
            <Timestamp />
            <Progress style={{ width: `${played * 100}%` }} />
          </Timeline>
        ) : null}

        <ToggleMute muted={muted} onClick={toggleMute} />

        <Volume>
          <VolumeRange
            type="range"
            min={0}
            max={1}
            step="any"
            value={volume}
            onChange={volumeChange}
          />
          <VolumeBar>
            {volumeBar &&
              volumeBar.map(col => (
                <VolumeCol key={col.id} isActive={col.isActive} />
              ))}
          </VolumeBar>
        </Volume>
        <FullscreenButton
          onClick={() => {
            // screenfull.request(wrapperElement.current);
            onFullscreen();
          }}
        />
      </Controls>
    </Wrapper>
  );
}

UI.defaultProps = defaultProps;

export default memo(UI);
