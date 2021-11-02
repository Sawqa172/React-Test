import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import { StyledComponentInnerAttrs } from 'styled-components';
import { NavLinkProps } from 'react-router-dom';

export enum ButtonDimensionsType {
  Regular = 'regular',
}

export enum ButtonGroupsType {
  OutlinedBlack = 'outlinedBlack',
}

export interface PropsType extends NavLinkProps {
  group: ButtonGroupsType;
  dimension: ButtonDimensionsType;
  children: ReactNode | null;
  prependIcon?: React.FC | null;
  appendIcon?: React.FC | null;
}

/*
 * Styles
 */

export interface ButtonProps {
  dimension: ButtonDimensionsType;
  group: ButtonGroupsType;
}
