export enum TypesType {
  Float = 'float',
  Hidden = 'hidden',
  Local = 'local',
  Global = 'global',
}

export enum ColorType {
  Light = 'light',
  Dark = 'dark',
}

export interface PropsType {
  type: TypesType;
  color: ColorType;
  size: number;
}

/*
 * Styles
 */
export type WrapperProps = PropsType;
export type SpinnerProps = PropsType;
