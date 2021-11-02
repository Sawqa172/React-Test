import React from 'react';

// types
import { Props } from './types';

// styles
import { Link, Image } from './styles';

export default function MainLogo({
  to,
  className,
}: Props) {
  return (
    <Link to={to} className={className}>
      Logo
    </Link>
  );
}
