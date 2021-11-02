import React from 'react';

import { BadgeWrapper, BadgeCount } from './styles';

interface Props {
  count?: number;
}

export function Badge({ count, ...props }: Props) {
  return (
    <BadgeWrapper {...props}>
      {!!count && <BadgeCount>{count}</BadgeCount>}
    </BadgeWrapper>
  );
}
