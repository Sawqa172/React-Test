import { ReactNode } from 'react';

export interface PropsType {
  title: string | null;
  isExtended?: boolean;
  isExpanded?: boolean;
  children: ReactNode;
}
