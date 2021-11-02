import styled from 'styled-components';
import { ButtonGroupsType, ButtonDimensionsType, ButtonProps } from './types';
import { media } from 'styles/media';
import { NavLink } from 'react-router-dom';

const AfterIcon = styled.svg`
  display: inline-block;
  vertical-align: middle;

  && {
    width: 20px;
    height: 20px;
  }
`;

const Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  transition: all 0.2s;
  & + ${AfterIcon} {
    margin-left: 10px;

    ${media.medium`
      margin-left: 20px;
    `}
  }
`;

const BeforeIcon = styled.svg`
  display: inline-block;
  vertical-align: middle;

  && {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  & + ${Text} {
    margin-left: 10px;

    ${media.medium`
      margin-left: 20px;
    `}
  }
`;

const StyledButton = styled(NavLink)<ButtonProps>`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  height: ${p => (theme.dimensions[p.dimension].mobile.height / 375) * 100}vw;
  width: 100%;
  padding: 0
    ${p =>
      (theme.dimensions[p.dimension].mobile.paddingHorizontal / 375) * 100}vw;
  background: ${p => theme.groups[p.group].backgroundColor};
  box-shadow: ${p => theme.groups[p.group].boxShadow};
  font-family: ${p => p.theme.fontFamily.CocoGothicBold};
  font-size: ${p =>
    (theme.dimensions[p.dimension].mobile.fontSize / 375) * 100}vw;
  line-height: 1;
  text-align: center;
  color: ${p => theme.groups[p.group].color};
  text-decoration: none;
  text-transform: uppercase;
  border-width: ${p =>
    (theme.dimensions[p.dimension].mobile.borderWidth / 375) * 100}vw;
  border-color: ${p => theme.groups[p.group].borderColor};
  border-style: solid;
  border-radius: ${p =>
    (theme.dimensions[p.dimension].mobile.borderRadius / 375) * 100}vw;
  outline: none;
  appearance: none;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;

  ${media.xxsmall`
    height: ${p => theme.dimensions[p.dimension].mobile.height}px;
    padding: 0 ${p => theme.dimensions[p.dimension].mobile.paddingHorizontal}px;
    font-size: ${p => theme.dimensions[p.dimension].mobile.fontSize}px;
    border-width: ${p => theme.dimensions[p.dimension].mobile.borderWidth}px;
    border-radius: ${p => theme.dimensions[p.dimension].mobile.borderRadius}px;
      &:hover {
    span {
      background: ${p => p.theme.gradients.radialBlue};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    border: ${p =>
      (theme.dimensions[p.dimension].mobile.borderWidth / 1920) *
      100}vw solid transparent;
    background:
        linear-gradient(#ffffff,#ffffff) padding-box,
        ${p => p.theme.gradients.radialBlue} border-box;

    & > ${BeforeIcon}, & > ${AfterIcon} {
      color: ${p => theme.groups[p.group].hover.iconColor};
    }
  }
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
    font-family: ${p => p.theme.fontFamily.CocoGothicHeavy};
      &:hover {
    span {
      background: ${p => p.theme.gradients.radialBlue};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    border: ${p =>
      (theme.dimensions[p.dimension].desktop.borderWidth / 1920) *
      100}vw solid transparent;
    background:
        linear-gradient(#ffffff,#ffffff) padding-box,
        ${p => p.theme.gradients.radialBlue} border-box;

    & > ${BeforeIcon}, & > ${AfterIcon} {
      color: ${p => theme.groups[p.group].hover.iconColor};
    }
  }
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
       &:hover {
    span {
      background: ${p => p.theme.gradients.radialBlue};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    border: ${p =>
      (theme.dimensions[p.dimension].desktop.borderWidth / 1920) *
      100}vw solid transparent;
    background:
        linear-gradient(#ffffff,#ffffff) padding-box,
        ${p => p.theme.gradients.radialBlue} border-box;
    // background-color: ${p => theme.groups[p.group].hover.backgroundColor};
    // color: ${p => theme.groups[p.group].hover.color};
    // box-shadow: ${p => theme.groups[p.group].hover.boxShadow};
    // border-color: ${p => theme.groups[p.group].hover.borderColor};

    & > ${BeforeIcon}, & > ${AfterIcon} {
      color: ${p => theme.groups[p.group].hover.iconColor};
    }
  }
      
  `}
  & > ${BeforeIcon}, & > ${AfterIcon} {
    color: ${p => theme.groups[p.group].iconColor};
  }

  &:active {
    background-color: ${p => theme.groups[p.group].active.backgroundColor};
    color: ${p => theme.groups[p.group].active.color};
    box-shadow: ${p => theme.groups[p.group].active.boxShadow};
    border-color: ${p => theme.groups[p.group].active.borderColor};

    & > ${BeforeIcon}, & > ${AfterIcon} {
      color: ${p => theme.groups[p.group].active.iconColor};
    }
  }

  &:disabled {
    background-color: ${p => theme.groups[p.group].disabled.backgroundColor};
    color: ${p => theme.groups[p.group].disabled.color};
    box-shadow: ${p => theme.groups[p.group].disabled.boxShadow};
    border-color: ${p => theme.groups[p.group].disabled.borderColor};
    pointer-events: none;

    & > ${BeforeIcon}, & > ${AfterIcon} {
      color: ${p => theme.groups[p.group].disabled.iconColor};
    }
  }
`;

const theme = {
  dimensions: {
    [ButtonDimensionsType.Regular]: {
      mobile: {
        height: 65,
        fontSize: 22,
        borderWidth: 5,
        borderRadius: 20,
        paddingHorizontal: 15,
      },
      desktop: {
        height: 86,
        fontSize: 30,
        borderWidth: 5,
        borderRadius: 20,
        paddingHorizontal: 30,
      },
    },
  },
  groups: {
    [ButtonGroupsType.OutlinedBlack]: {
      backgroundColor: 'transparent',
      color: '#414042',
      boxShadow: 'none',
      borderColor: '#414042',
      iconColor: '#414042',
      hover: {
        backgroundColor: 'transparent',
        color: '#414042',
        boxShadow: 'none',
        borderColor: '#414042',
        iconColor: '#414042',
      },
      active: {
        backgroundColor: 'transparent',
        color: '#414042',
        boxShadow: 'none',
        borderColor: '#414042',
        iconColor: '#414042',
      },
      disabled: {
        backgroundColor: 'transparent',
        color: '#414042',
        boxShadow: 'none',
        borderColor: '#414042',
        iconColor: '#414042',
      },
    },
  },
};

export { StyledButton, Text, BeforeIcon, AfterIcon };
