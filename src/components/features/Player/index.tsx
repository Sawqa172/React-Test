import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';

// 3d parties
import dayjs from 'dayjs';
import screenfull from 'screenfull';

// components
import UI from './UI';

// styles
import { Wrapper } from './styles';
import './UI/icons/style.css';

// data, types, props, default
import { initOptionsState } from './data';
import { EPlayerEventType, OnProgressType, Props } from './types';
import defaultProps from './defaultProps';
import { useDispatch } from 'react-redux';

function VideoPlayer({ source, className, onEventType }: Props) {
  // options state
  const [optionsState, setOptionsState] =
    useState<ReactPlayerProps>(initOptionsState);

  // player state
  const [playerState, setPlayerState] = useState<ReactPlayer>();

  // fullscreenFallbackEnabled enabled state
  const [fullscreenFallbackEnabled, setFullscreenFallbackEnabled] =
    useState<boolean>(false);

  // wrapper ref
  const wrapperElement = useRef<HTMLInputElement>(null);

  // actions
  const dispatch = useDispatch();

  // init
  useEffect(() => {
    if (playerState) {
      optionsInitUpdate();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerState]);

  // watch source - update url
  useEffect(() => {
    if (source && source.length > 0) {
      updateOptionsState({
        url: source,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source]);

  // options init update
  const optionsInitUpdate = () => {
    const localStorageVolume = localStorage.getItem('volume');

    const updatedOptions = {
      ...optionsState,
      volume:
        localStorageVolume !== null && parseFloat(localStorageVolume) !== 0
          ? parseFloat(localStorageVolume)
          : 0.7,
    };

    // console.log('updated options: ', updatedOptions);

    setOptionsState(updatedOptions);
  };

  // update options state
  const updateOptionsState = (newOptions: ReactPlayerProps) => {
    const updatedOptions = {
      ...optionsState,
      ...newOptions,
    };
    setOptionsState(updatedOptions);

    // console.log('updated options: ', updatedOptions);
  };

  // handle ready
  const handleReady = () => {
    // console.log('onReady');
  };

  // handle start
  const handleStart = () => {
    // console.log('onStart');
  };

  // handle play pause
  const handlePlayPause = () => {
    // console.log('play pause: ', optionsState.playing);

    updateOptionsState({
      playing: !optionsState.playing,
    });
  };

  // handle volume change
  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    localStorage.setItem('volume', e.target.value);

    // console.log('volume change: ', value);

    updateOptionsState({
      muted: !value,
      volume: value,
    });
  };

  // handle toggle muted
  const handleToggleMuted = () => {
    const localStorageVolume = localStorage.getItem('volume');
    const newLocalStorageVolume =
      localStorageVolume !== null && parseFloat(localStorageVolume) !== 0
        ? parseFloat(localStorageVolume)
        : 0.7;

    localStorage.setItem('volume', newLocalStorageVolume.toString());

    // console.log('toggle muted: ', newLocalStorageVolume);

    updateOptionsState({
      muted: !optionsState.muted,
      volume: !optionsState.muted ? 0 : newLocalStorageVolume,
    });
  };

  // handle play
  const handlePlay = () => {
    // console.log('onPlay');

    updateOptionsState({
      playing: true,
    });
  };

  // handle seek
  const handleSeek = () => {
    // console.log('onSeek');
  };

  // handle pause
  const handlePause = () => {
    // console.log('onPause');

    updateOptionsState({
      playing: false,
    });
  };

  // handle seek mouse down
  const handleSeekMouseDown = () => {
    updateOptionsState({
      seeking: true,
    });
  };

  // handle seek change
  const handleSeekChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateOptionsState({
      played: parseFloat(e.target.value),
    });
  };

  // handle seek mouse up
  const handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    updateOptionsState({
      seeking: false,
    });
    playerState && playerState.seekTo(parseFloat(target.value));
  };

  // handle progress
  const handleProgress = (state: OnProgressType) => {
    const internalPlayerOptions: ReactPlayerProps = {};

    // We only want to update time slider if we are not currently seeking
    if (!optionsState.seeking) {
      updateOptionsState({
        loaded: state.loaded,
        loadedSeconds: state.loadedSeconds,
        played: state.played,
        playedSeconds: state.playedSeconds,
        ...internalPlayerOptions,
      });
    }
  };

  // handle ended
  const handleEnded = () => {
    // console.log('onEnded');
    // setEndedState(true);

    onEventType(EPlayerEventType.Ended);
  };

  // handle duration
  const handleDuration = (duration: number) => {
    // console.log('onDuration', duration);

    updateOptionsState({
      duration,
    });
  };

  // unmute click handler
  const unmuteClickHandler = () => {
    // console.log('unmute click handler');

    handleToggleMuted();
  };

  // handle click fullscreen
  const handleClickFullscreen = () => {
    if (wrapperElement && wrapperElement.current) {
      if (screenfull.isEnabled) {
        screenfull.toggle(wrapperElement.current);
      } else {
        setFullscreenFallbackEnabled(!fullscreenFallbackEnabled);
      }
    }
  };

  const ref = (player: ReactPlayer) => {
    setPlayerState(player);
  };

  return (
    <Wrapper
      screenFullActive={'isFullscreen' in screenfull && screenfull.isFullscreen}
      fullscreenFallbackEnabled={fullscreenFallbackEnabled}
      ref={wrapperElement}
      className={className}
    >
      <ReactPlayer
        ref={ref}
        className="react-player"
        width="auto"
        height="100%"
        onReady={handleReady}
        onStart={handleStart}
        onPlay={handlePlay}
        onPause={handlePause}
        onBuffer={() => console.log('onBuffer')}
        onBufferEnd={() => console.log('onBufferEnd')}
        onSeek={handleSeek}
        onEnded={handleEnded}
        onError={e => console.log('onError', e)}
        onProgress={handleProgress}
        onDuration={handleDuration}
        {...optionsState}
      />

      {/*{!optionsState.controls ? (*/}
      {/*  <UI*/}
      {/*    duration={optionsState.duration}*/}
      {/*    playing={optionsState.playing}*/}
      {/*    played={optionsState.played}*/}
      {/*    loaded={optionsState.loaded}*/}
      {/*    muted={optionsState.muted}*/}
      {/*    volume={optionsState.volume}*/}
      {/*    onFullscreen={handleClickFullscreen}*/}
      {/*    onPlayPause={handlePlayPause}*/}
      {/*    seekMouseDown={handleSeekMouseDown}*/}
      {/*    seekChange={handleSeekChange}*/}
      {/*    seekMouseUp={handleSeekMouseUp}*/}
      {/*    toggleMute={handleToggleMuted}*/}
      {/*    volumeChange={handleVolumeChange}*/}
      {/*  />*/}
      {/*) : null}*/}
    </Wrapper>
  );
}

VideoPlayer.defaultProps = defaultProps;

export default VideoPlayer;
