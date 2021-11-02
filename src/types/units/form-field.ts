import { ElementTypesType } from 'components/atoms/Input/types';

export type SelectOptionType = {
  value: number | string;
  label: string;
};

export type FormFieldType = {
  elType: ElementTypesType;
  id?: string;
  type: string;
  value?: string;
  checked?: boolean;
  initialValue?: string | number | boolean;
  label?: string;
  placeholder?: string;
  disabled: boolean;
  options?: Array<SelectOptionType>;
  rules: object;
  invalid: boolean;
  touched: boolean;
  errorMessage?: string;
};
