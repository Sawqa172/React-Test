import { Svg } from './styles';

const ArrowRightIcon = props => (
  <Svg viewBox="0 0 156 127" fill="none" {...props}>
      <defs>
          <linearGradient id="gradient" x1="198" y1="63" x2="-32" y2="63" gradientUnits="userSpaceOnUse">
              <stop offset="0.0172593" stop-color="#FFF1D6"/>
              <stop offset="0.286458" stop-color="#78FFF2"/>
              <stop offset="0.598958" stop-color="#3EBFED"/>
              <stop offset="0.921875" stop-color="#7FB4FF"/>
          </linearGradient>
      </defs>
    <path
      d="M92.2559 11.7806L143.856 63.3806"
      stroke="currentColor"
      strokeWidth="23"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M143.856 63.3806L92.2559 115.081"
      stroke="currentColor"
      strokeWidth="23"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M143.856 63.3806H12.1562"
      stroke="currentColor"
      strokeWidth="23"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </Svg>
);

export default ArrowRightIcon;
