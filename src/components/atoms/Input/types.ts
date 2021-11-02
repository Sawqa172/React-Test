import { HTMLAttributes, InputHTMLAttributes } from 'react';
import { SelectOptionType } from 'types/units/form-field';
import defaultProps from './defaultProps';
import { ColorType } from '../LoadingIndicator/types';

export enum ElementTypesType {
  Input = 'input',
  Textarea = 'textarea',
  Select = 'select',
}

export enum DimensionsType {
  Small = 'small',
  Regular = 'regular',
  Large = 'large',
}

export enum ColorElementType {
  Regular = 'regular',
  Green = 'green',
  Red = 'red',
}

export type ChangePayloadType = {
  value: string;
  action: string;
};

export interface PropsType
  extends InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
  elType: ElementTypesType;
  invalid: boolean;
  rules: object;
  touched: boolean;
  changed: (payload: ChangePayloadType) => void;
  onFocus: () => void;
  onBlur: () => void;
  dimension: DimensionsType;
  color: ColorElementType;
  options?: Array<SelectOptionType>;
  errorMessage?: string;
}

/*
 * Styles
 */

export interface StyledInputProps {
  dimension: DimensionsType;
  color: ColorElementType;
  invalid: boolean;
}

export interface StyledTextareaProps {
  dimension: DimensionsType;
  color: ColorElementType;
  invalid: boolean;
}
