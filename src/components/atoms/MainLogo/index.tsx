import React from 'react';
import LogoColor from 'assets/images/logo-color.png';
import LogoBlack from 'assets/images/logo-black.png';

// types
import { ColorTypes, Props } from './types';

// styles
import { Link, Image } from './styles';

export default function MainLogo({
  to,
  colorType = ColorTypes.Color,
  className,
}: Props) {
  return (
    <Link to={to} className={className}>
      {colorType === ColorTypes.Color && <Image src={LogoColor} alt="Logo" />}
      {colorType === ColorTypes.Black && <Image src={LogoBlack} alt="Logo" />}
    </Link>
  );
}
