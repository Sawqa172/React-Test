import { ReactNode } from 'react';

export interface Props {
  caption: string;
  children?: ReactNode;
  onClose: () => void;
  className?: string;
}
