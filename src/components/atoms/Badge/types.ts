export enum TypesType {
  Float = 'float',
  Hidden = 'hidden',
  Component = 'component',
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
