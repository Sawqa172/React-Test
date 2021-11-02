import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import { StyledComponentInnerAttrs } from 'styled-components';

export enum ButtonDimensionsType {
  Regular = 'regular',
}

export enum ButtonGroupsType {
  OutlinedBlack = 'outlinedBlack',
}

export interface PropsType extends ComponentPropsWithoutRef<'button'> {
  group: ButtonGroupsType;
  dimension: ButtonDimensionsType;
  isLoading: boolean;
  children: ReactNode | null;
  prependIcon?: React.FC | null;
  appendIcon?: React.FC | null;
  onClick: () => void;
}

/*
 * Styles
 */

export interface ButtonProps {
  dimension: ButtonDimensionsType;
  group: ButtonGroupsType;
}
