export enum ColorTypes {
  Color,
  Black,
}

export interface Props {
  to: string;
  colorType?: ColorTypes;
  className?: string;
}
