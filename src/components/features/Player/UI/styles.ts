import styled from 'styled-components';
import {
  PlayButtonProps,
  PlayPauseButtonProps,
  ToggleMuteProps,
  VolumeColProps,
  WrapperProps,
} from './types';

const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: none;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  color: #fff;

  ${p =>
    p.isPaused || p.isActive
      ? `
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.25), transparent 15%);

    ${Controls} {
      opacity: 1;
    }
  `
      : null};
`;

const PlayPauseButton = styled.div<PlayPauseButtonProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &::before {
    font-family: flowplayer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14vw;
    transition: opacity 0.1s;
    opacity: 0;
    color: #b1fa00;

    @media (min-width: 768px) {
      font-size: 107px;
    }
  }

  ${p =>
    !p.playing
      ? `
        &::before {
          content: '\\e007';
        }
      `
      : `
        &::before {
          content: '\\e008';
        }
      `}
`;

const Controls = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3em;
  z-index: 2;
  padding-left: 0.3em;
  padding-right: 2.5em;
  transition: background-image 0.1s, opacity 0.1s;
  opacity: 0;
`;

const PlayButton = styled.a<PlayButtonProps>`
  margin: 0 0.5em;
  flex: 0 0 auto;
  display: inline-block;
  color: #b1fa00;

  ${p =>
    !p.playing
      ? `
        &::before {
        font-family: flowplayer;
        font-size: 1.7em;
        content: '\\e007';
      }
      `
      : `
        &::before {
          font-family: flowplayer;
          font-size: 1.7em;
          content: '\\e008';
        }
       `}
`;

const Elapsed = styled.span`
  margin: 0 0.5em;
  display: inline-block;
  flex: 0 0 auto;
  cursor: default;
`;

const Timeline = styled.div`
  position: relative;
  margin: 0 0.5em;
  background-color: rgba(255, 255, 255, 0.2);
  height: 9px;
  border-radius: 8px;
  flex: 1 1 auto;
  transition: height 0.2s;
`;

const Seek = styled.input`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: transparent;

  &[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    margin: 0;
  }
  &[type='range']:focus {
    outline: none;
  }
  &[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 15px;
    box-shadow: 0px 0px 0.6px rgba(177, 250, 0, 0),
      0px 0px 0px rgba(177, 250, 0, 0);
    background: rgba(177, 250, 0, 0);
    border-radius: 0px;
    border: 0px solid rgba(177, 250, 0, 0);
    cursor: col-resize;
  }
  &[type='range']::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px rgba(177, 250, 0, 0),
      0px 0px 0px rgba(177, 250, 0, 0);
    border: 0px solid rgba(177, 250, 0, 0);
    height: 20px;
    width: 20px;
    border-radius: 20px;
    background: rgba(177, 250, 0, 0);
    cursor: col-resize;
    -webkit-appearance: none;
    margin-top: -2.5px;
  }
  &[type='range']:focus::-webkit-slider-runnable-track {
    background: rgba(177, 250, 0, 0);
  }
  &[type='range']::-moz-range-track {
    width: 100%;
    height: 15px;
    box-shadow: 0px 0px 0.6px rgba(177, 250, 0, 0),
      0px 0px 0px rgba(177, 250, 0, 0);
    background: rgba(177, 250, 0, 0);
    border-radius: 0px;
    border: 0px solid rgba(177, 250, 0, 0);
    cursor: col-resize;
  }
  &[type='range']::-moz-range-thumb {
    box-shadow: 0px 0px 0px rgba(177, 250, 0, 0),
      0px 0px 0px rgba(177, 250, 0, 0);
    border: 0px solid rgba(177, 250, 0, 0);
    height: 20px;
    width: 20px;
    border-radius: 20px;
    background: rgba(177, 250, 0, 0);
    cursor: col-resize;
  }
  &[type='range']::-ms-track {
    width: 100%;
    height: 15px;
    cursor: col-resize;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &[type='range']::-ms-fill-lower {
    background: rgba(242, 242, 242, 0);
    border: 0px solid rgba(177, 250, 0, 0);
    border-radius: 0px;
    box-shadow: 0px 0px 0.6px rgba(177, 250, 0, 0),
      0px 0px 0px rgba(177, 250, 0, 0);
  }
  &[type='range']::-ms-fill-upper {
    background: rgba(177, 250, 0, 0);
    border: 0px solid rgba(177, 250, 0, 0);
    border-radius: 0px;
    box-shadow: 0px 0px 0.6px rgba(177, 250, 0, 0),
      0px 0px 0px rgba(177, 250, 0, 0);
  }
  &[type='range']::-ms-thumb {
    box-shadow: 0px 0px 0px rgba(177, 250, 0, 0),
      0px 0px 0px rgba(177, 250, 0, 0);
    border: 0px solid rgba(177, 250, 0, 0);
    width: 20px;
    height: 15px;
    border-radius: 20px;
    background: rgba(177, 250, 0, 0);
    cursor: col-resize;
  }
  &[type='range']:focus::-ms-fill-lower {
    background: rgba(177, 250, 0, 0);
  }
  &[type='range']:focus::-ms-fill-upper {
    background: rgba(177, 250, 0, 0);
  }
`;

const Buffer = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  max-width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 0.24em;
  transition: width 0.25s linear;
`;

const Timestamp = styled.span`
  position: absolute;
  background-color: rgba(177, 250, 0, 0.65);
  display: none;
  border-radius: 0.2em;
  padding: 0.1em 0.3em;
  font-size: 90%;
  bottom: 1.4em;
  height: auto;
`;

const Progress = styled.div`
  position: absolute;
  height: 100%;
  max-width: 100%;
  border-radius: 0.24em;
  background-color: #b1fa00;
  fill: rgba(0, 0, 0, 0.2);
  transition: width 0.25s linear;
`;

const ToggleMute = styled.a<ToggleMuteProps>`
  margin: 0 0.5em;
  display: inline-block;
  flex: 0 0 auto;

  ${p =>
    !p.muted
      ? `
    &::before {
    font-family: flowplayer;
    font-size: 1.7em;
    content: '\\e00b';
  }
  `
      : `
  &::before {
    font-family: flowplayer;
    font-size: 1.7em;
    content: '\\e00d';
  }
   `}
`;

const Volume = styled.div`
  margin: 0 0.5em;
  flex: 0 0 auto;
  position: relative;
`;

const VolumeRange = styled.input`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: transparent;

  &[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    margin: 0;
  }
  &[type='range']:focus {
    outline: none;
  }
  &[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 15px;
    box-shadow: 0px 0px 0.6px rgba(177, 250, 0, 0),
      0px 0px 0px rgba(177, 250, 0, 0);
    background: rgba(177, 250, 0, 0);
    border-radius: 0px;
    border: 0px solid rgba(177, 250, 0, 0);
    cursor: col-resize;
  }
  &[type='range']::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px rgba(177, 250, 0, 0),
      0px 0px 0px rgba(177, 250, 0, 0);
    border: 0px solid rgba(177, 250, 0, 0);
    height: 1px;
    width: 1px;
    border-radius: 20px;
    background: rgba(177, 250, 0, 0);
    cursor: col-resize;
    -webkit-appearance: none;
    margin-top: -2.5px;
  }
  &[type='range']:focus::-webkit-slider-runnable-track {
    background: rgba(177, 250, 0, 0);
  }
  &[type='range']::-moz-range-track {
    width: 100%;
    height: 15px;
    box-shadow: 0px 0px 0.6px rgba(177, 250, 0, 0),
      0px 0px 0px rgba(177, 250, 0, 0);
    background: rgba(177, 250, 0, 0);
    border-radius: 0px;
    border: 0px solid rgba(177, 250, 0, 0);
    cursor: col-resize;
  }
  &[type='range']::-moz-range-thumb {
    box-shadow: 0px 0px 0px rgba(177, 250, 0, 0),
      0px 0px 0px rgba(177, 250, 0, 0);
    border: 0px solid rgba(177, 250, 0, 0);
    height: 1px;
    width: 1px;
    border-radius: 20px;
    background: rgba(177, 250, 0, 0);
    cursor: col-resize;
  }
  &[type='range']::-ms-track {
    width: 100%;
    height: 15px;
    cursor: col-resize;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &[type='range']::-ms-fill-lower {
    background: rgba(242, 242, 242, 0);
    border: 0px solid rgba(177, 250, 0, 0);
    border-radius: 0px;
    box-shadow: 0px 0px 0.6px rgba(177, 250, 0, 0),
      0px 0px 0px rgba(177, 250, 0, 0);
  }
  &[type='range']::-ms-fill-upper {
    background: rgba(177, 250, 0, 0);
    border: 0px solid rgba(177, 250, 0, 0);
    border-radius: 0px;
    box-shadow: 0px 0px 0.6px rgba(177, 250, 0, 0),
      0px 0px 0px rgba(177, 250, 0, 0);
  }
  &[type='range']::-ms-thumb {
    box-shadow: 0px 0px 0px rgba(177, 250, 0, 0),
      0px 0px 0px rgba(177, 250, 0, 0);
    border: 0px solid rgba(177, 250, 0, 0);
    width: 1px;
    height: 1px;
    border-radius: 20px;
    background: rgba(177, 250, 0, 0);
    cursor: col-resize;
  }
  &[type='range']:focus::-ms-fill-lower {
    background: rgba(177, 250, 0, 0);
  }
  &[type='range']:focus::-ms-fill-upper {
    background: rgba(177, 250, 0, 0);
  }
`;

const VolumeBar = styled.div`
  flex: 1;
  position: relative;
  cursor: col-resize;
  height: 0.9em;
  border-radius: 0.24em;
  background-color: transparent;
  user-select: none;
  transition: height 0.2s;
  white-space: nowrap;
`;

const VolumeCol = styled.em<VolumeColProps>`
  border-radius: 2px;
  display: inline-block;
  width: 5px;
  height: 100%;
  position: relative;
  vertical-align: top;
  transition: transform 0.4s;
  transform-origin: bottom;
  user-select: none;
  transform: scale(1.1);
  ${p =>
    p.isActive
      ? `
    background-color: #b1fa00;
    fill: rgba(0, 0, 0, 0.2);
    `
      : `
    background-color: rgba(255, 255, 255, 0.75);
    `}

  & + & {
    margin-left: 3px;
  }

  &:hover {
    transform: scaleY(1.35);
    transition: transform 0.2s;
  }
`;

const FullscreenButton = styled.a`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  padding: 0 0.7em 0 0.3em;

  &::before {
    font-family: flowplayer;
    font-size: 1.45em;
    content: '\\e002';
  }
`;

export {
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
};
