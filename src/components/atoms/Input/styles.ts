import styled from 'styled-components/macro';

import Select from 'react-select';
import 'react-phone-input-2/lib/style.css';

import {
  ColorElementType,
  DimensionsType,
  StyledInputProps,
  StyledTextareaProps,
} from './types';
import { media } from 'styles/media';

const Wrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input<StyledInputProps>`
  display: inline-block;
  height: ${p => (theme.dimensions[p.dimension].mobile.height / 375) * 100}vw;
  width: 100%;
  padding: 0
    ${p =>
      (theme.dimensions[p.dimension].mobile.paddingHorizontal / 375) * 100}vw;
  background-color: ${p => theme.colors[p.color].backgroundColor};
  border-width: ${p =>
    (theme.dimensions[p.dimension].mobile.borderWidth / 375) * 100}vw;
  border-color: ${p => theme.colors[p.color].borderColor.default};
  border-style: solid;
  border-radius: ${p =>
    (theme.dimensions[p.dimension].mobile.borderRadius / 375) * 100}vw;
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-size: ${p =>
    (theme.dimensions[p.dimension].mobile.fontSize / 375) * 100}vw;
  font-weight: normal;
  line-height: 1.5;
  color: ${p => theme.colors[p.color].color};
  outline: none;
  transition: all 0.2s;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }


  ${media.xxsmall`
    height: ${p => theme.dimensions[p.dimension].mobile.height}px;
    padding: 0 ${p => theme.dimensions[p.dimension].mobile.paddingHorizontal}px;
    font-size: ${p => theme.dimensions[p.dimension].mobile.fontSize}px;
    border-width: ${p => theme.dimensions[p.dimension].mobile.borderWidth}px;
    border-radius: ${p => theme.dimensions[p.dimension].mobile.borderRadius}px;
  `}

  ${media.medium`
    height: ${p =>
      (theme.dimensions[p.dimension].desktop.height / 1920) * 100}vw;
    padding: 0 ${p =>
      (theme.dimensions[p.dimension].desktop.paddingHorizontal / 1920) * 100}vw;
    font-size: ${p =>
      (theme.dimensions[p.dimension].desktop.fontSize / 1920) * 100}vw;
    border-width: ${p =>
      (theme.dimensions[p.dimension].desktop.borderWidth / 1920) * 100}vw;
    border-radius: ${p =>
      (theme.dimensions[p.dimension].desktop.borderRadius / 1920) * 100}vw;
    font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  `}

  ${media.large`
    height: ${p =>
      theme.dimensions[p.dimension].desktop.height * (1440 / 1920)}px;
    padding: 0 ${p =>
      theme.dimensions[p.dimension].desktop.paddingHorizontal *
      (1440 / 1920)}px;
    font-size: ${p =>
      theme.dimensions[p.dimension].desktop.fontSize * (1440 / 1920)}px;
    border-width: ${p =>
      theme.dimensions[p.dimension].desktop.borderWidth * (1440 / 1920)}px;
    border-radius: ${p =>
      theme.dimensions[p.dimension].desktop.borderRadius * (1440 / 1920)}px;
  `}

  &:hover {
    border-color: ${p => theme.colors[p.color].borderColor.hover};
  }

  &:active {
    border-color: ${p => theme.colors[p.color].borderColor.active};
  }

  &:focus {
    border-color: ${p => theme.colors[p.color].borderColor.focus};
  }

  &::placeholder {
    color: ${p => theme.colors[p.color].placeholderColor};
    opacity: 1;
  }

  &:disabled {
    background-color: #f8f8f8;
    pointer-events: none;
  }

  ${p =>
    p.invalid && `border-color: ${theme.colors[p.color].borderColor.error};`};
`;

const StyledTextarea = styled.textarea<StyledTextareaProps>`
  display: inline-block;
  width: 100%;
  min-height: ${p =>
    ((theme.dimensions[p.dimension].mobile.height * 2.5) / 375) * 100}vw;
  padding: ${p =>
    (theme.dimensions[p.dimension].mobile.paddingHorizontal / 375) * 100}vw;
  background-color: ${p => theme.colors[p.color].backgroundColor};
  border-width: ${p =>
    (theme.dimensions[p.dimension].mobile.borderWidth / 375) * 100}vw;
  border-color: ${p => theme.colors[p.color].borderColor.default};
  border-style: solid;
  border-radius: ${p =>
    (theme.dimensions[p.dimension].mobile.borderRadius / 375) * 100}vw;
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-size: ${p =>
    (theme.dimensions[p.dimension].mobile.fontSize / 375) * 100}vw;
  line-height: 1.4;
  color: ${p => theme.colors[p.color].color};
  outline: none;
  transition: all 0.2s;

  ${media.xxsmall`
    min-height: ${p => theme.dimensions[p.dimension].mobile.height * 2.5}px;
    padding: ${p => theme.dimensions[p.dimension].mobile.paddingHorizontal}px;
    font-size: ${p => theme.dimensions[p.dimension].mobile.fontSize}px;
    border-width: ${p => theme.dimensions[p.dimension].mobile.borderWidth}px;
    border-radius: ${p => theme.dimensions[p.dimension].mobile.borderRadius}px;
  `}

  ${media.medium`
    min-height: ${p =>
      ((theme.dimensions[p.dimension].desktop.height * 2.5) / 1920) * 100}vw;
    padding: ${p =>
      (theme.dimensions[p.dimension].desktop.paddingHorizontal / 1920) * 100}vw;
    font-size: ${p =>
      (theme.dimensions[p.dimension].desktop.fontSize / 1920) * 100}vw;
    border-width: ${p =>
      (theme.dimensions[p.dimension].desktop.borderWidth / 1920) * 100}vw;
    border-radius: ${p =>
      (theme.dimensions[p.dimension].desktop.borderRadius / 1920) * 100}vw;
    font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  `}

  ${media.large`
    min-height: ${p =>
      theme.dimensions[p.dimension].desktop.height * 2.5 * (1440 / 1920)}px;
    padding: ${p =>
      theme.dimensions[p.dimension].desktop.paddingHorizontal *
      (1440 / 1920)}px;
    font-size: ${p =>
      theme.dimensions[p.dimension].desktop.fontSize * (1440 / 1920)}px;
    border-width: ${p =>
      theme.dimensions[p.dimension].desktop.borderWidth * (1440 / 1920)}px;
    border-radius: ${p =>
      theme.dimensions[p.dimension].desktop.borderRadius * (1440 / 1920)}px;
  `}
  
  &:hover {
    border-color: ${p => theme.colors[p.color].borderColor.hover};
  }

  &:active {
    border-color: ${p => theme.colors[p.color].borderColor.active};
  }

  &:focus {
    border-color: ${p => theme.colors[p.color].borderColor.focus};
  }

  &::placeholder {
    color: ${p => theme.colors[p.color].placeholderColor};
    opacity: 1;
  }

  &:disabled {
    background-color: #f8f8f8;
    pointer-events: none;
  }

  ${p =>
    p.invalid && `border-color: ${theme.colors[p.color].borderColor.error};`};
`;

const ErrorMessage = styled.span`
  margin-top: 10px;
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-size: 14px;
  line-height: 1.25;
  color: ${p => p.theme.colors.mainPurple};
`;

const theme = {
  dimensions: {
    [DimensionsType.Regular]: {
      mobile: {
        height: 65,
        borderRadius: 10,
        borderWidth: 5,
        fontSize: 22,
        paddingHorizontal: 15,
        separatorSize: 2,
      },
      desktop: {
        height: 87,
        borderRadius: 20,
        borderWidth: 5,
        fontSize: 22,
        separatorSize: 2,
        paddingHorizontal: 30,
      },
    },
    [DimensionsType.Large]: {
      mobile: {
        height: 65,
        borderRadius: 10,
        borderWidth: 5,
        fontSize: 22,
        paddingHorizontal: 15,
        separatorSize: 2,
      },
      desktop: {
        height: 87,
        borderRadius: 20,
        borderWidth: 5,
        fontSize: 22,
        separatorSize: 2,
        paddingHorizontal: 30,
      },
    },
  },
  colors: {
    [ColorElementType.Regular]: {
      backgroundColor: 'transparent',
      borderColor: {
        default: '#414042',
        hover: '#414042',
        active: '#414042',
        focus: '#414042',
        disabled: '#414042',
        error: '#FF626C',
      },
      color: '#414042',
      iconColor: '#414042',
      placeholderColor: '#414042',
    },
  },
};

export { Wrapper, StyledInput, StyledTextarea, ErrorMessage };
