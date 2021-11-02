export enum EFileUploaderType {
  Simple = 'simple',
  Extended = 'extended',
}

export interface IPropsType {
  disabled?: boolean;
  onFileSelect: (any) => void;
  file: HTMLInputElement | null;
  text?: string;
  type: EFileUploaderType;
}
