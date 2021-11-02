export type ChangePayloadType = {
  value: string;
  action: string;
};

export interface IPropsType {
  name: string;
  disabled?: boolean;
  src: string | null;
  text?: string;
  description?: string[];
  changed: (payload: ChangePayloadType) => void;
}
