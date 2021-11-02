import styled from 'styled-components/macro';

import { IWrapperType } from './types';

const Line1 = styled.div`
  background: transparent;
  &:after {
    content: ' ';
    position: absolute;
    background: transparent;
`;

const Line2 = styled.div`
  background: transparent;
  &:after {
    content: ' ';
    position: absolute;
    background: transparent;
  }
`;

const Line3 = styled.div`
  background: transparent;
  &:after {
    content: ' ';
    position: absolute;
    background: transparent;
  }
`;

const Line4 = styled.div`
  background: transparent;
  &:after {
    content: ' ';
    position: absolute;
    background: transparent;
  }
`;

const Wrapper = styled.div<IWrapperType>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  ${p => p.zIndex && `z-index: ${p.zIndex}`};
  ${Line1} {
    width: ${p => p.sizes.line1.width}px;
    height: ${p => p.sizes.line1.height}px;
    filter: blur(${p => p.sizes.line1.height / 10}px);
    animation: animLines 50s linear infinite;
    box-shadow: ${p => p.scale * 78}px ${p => p.scale * 144}px #a1e300,
      ${p => p.scale * 2}px ${p => p.scale * 26}px #a1e300,
      ${p => p.scale * 13}px ${p => p.scale * 69}px #a1e300,
      ${p => p.scale * 10}px ${p => p.scale * 45}px #a1e300,
      ${p => p.scale * 85}px ${p => p.scale * 155}px ${p => p.scale * 1.5}px
        #a1e300,
      ${p => p.scale * 107}px ${p => p.scale * 74}px #a1e300,
      ${p => p.scale * 167}px ${p => p.scale * 2.5}px #a1e300,
      ${p => p.scale * 38}px ${p => p.scale * 191}px #a1e300,
      ${p => p.scale * 86}px ${p => p.scale * 155}px ${p => p.scale * 1.5}px
        #a1e300,
      ${p => p.scale * 180}px ${p => p.scale * 54}px #a1e300,
      ${p => p.scale * 162}px ${p => p.scale * 43}px #a1e300,
      ${p => p.scale * 76}px ${p => p.scale * 113}px #a1e300,
      ${p => p.scale * 193}px ${p => p.scale * 17}px #a1e300,
      ${p => p.scale * 63}px ${p => p.scale * 39}px #a1e300,
      ${p => p.scale * 99}px ${p => p.scale * 177}px #a1e300;
    &:after {
      top: ${p => p.intend}px;
      width: ${p => p.sizes.line1.width}px;
      height: ${p => p.sizes.line1.height}px;
      filter: blur(${p => p.sizes.line1.height / 10}px);
      box-shadow: ${p => p.scale * 78}px ${p => p.scale * 144}px #a1e300,
        ${p => p.scale * 2}px ${p => p.scale * 26}px #a1e300,
        ${p => p.scale * 13}px ${p => p.scale * 69}px #a1e300,
        ${p => p.scale * 10}px ${p => p.scale * 45}px #a1e300,
        ${p => p.scale * 85}px ${p => p.scale * 155}px ${p => p.scale * 1.5}px
          #a1e300,
        ${p => p.scale * 107}px ${p => p.scale * 74}px #a1e300,
        ${p => p.scale * 167}px ${p => p.scale * 2.5}px #a1e300,
        ${p => p.scale * 38}px ${p => p.scale * 191}px #a1e300,
        ${p => p.scale * 86}px ${p => p.scale * 155}px ${p => p.scale * 1.5}px
          #a1e300,
        ${p => p.scale * 180}px ${p => p.scale * 54}px #a1e300,
        ${p => p.scale * 162}px ${p => p.scale * 43}px #a1e300,
        ${p => p.scale * 76}px ${p => p.scale * 113}px #a1e300,
        ${p => p.scale * 193}px ${p => p.scale * 17}px #a1e300,
        ${p => p.scale * 63}px ${p => p.scale * 39}px #a1e300,
        ${p => p.scale * 99}px ${p => p.scale * 177}px #a1e300;
    }
  }
  ${Line2} {
    width: ${p => p.sizes.line2.width}px;
    height: ${p => p.sizes.line2.height}px;
    animation: animLines 65s linear infinite;
    box-shadow: ${p => p.scale * 104}px ${p => p.scale * 134}px #a1e300,
      ${p => p.scale * 165}px ${p => p.scale * 75}px #a1e300,
      ${p => p.scale * 24}px ${p => p.scale * 66}px #a1e300,
      ${p => p.scale * 10}px ${p => p.scale * 45}px #a1e300,
      ${p => p.scale * 85}px ${p => p.scale * 155}px ${p => p.scale * 1.5}px
        #a1e300,
      ${p => p.scale * 107}px ${p => p.scale * 74}px #a1e300,
      ${p => p.scale * 167}px ${p => p.scale * 2.5}px #a1e300,
      ${p => p.scale * 38}px ${p => p.scale * 191}px #a1e300,
      ${p => p.scale * 86}px ${p => p.scale * 155}px ${p => p.scale * 1.5}px
        #a1e300,
      ${p => p.scale * 180}px ${p => p.scale * 54}px #a1e300;
    &:after {
      top: ${p => p.intend}px;
      width: ${p => p.sizes.line2.width}px;
      height: ${p => p.sizes.line2.height}px;
      box-shadow: ${p => p.scale * 104}px ${p => p.scale * 134}px #a1e300,
        ${p => p.scale * 165}px ${p => p.scale * 75}px #a1e300,
        ${p => p.scale * 24}px ${p => p.scale * 66}px #a1e300,
        ${p => p.scale * 10}px ${p => p.scale * 45}px #a1e300,
        ${p => p.scale * 85}px ${p => p.scale * 155}px ${p => p.scale * 1.5}px
          #a1e300,
        ${p => p.scale * 107}px ${p => p.scale * 74}px #a1e300,
        ${p => p.scale * 167}px ${p => p.scale * 2.5}px #a1e300,
        ${p => p.scale * 38}px ${p => p.scale * 191}px #a1e300,
        ${p => p.scale * 86}px ${p => p.scale * 155}px ${p => p.scale * 1.5}px
          #a1e300,
        ${p => p.scale * 180}px ${p => p.scale * 54}px #a1e300;
    }
  }
  ${Line3} {
    width: ${p => p.sizes.line3.width}px;
    height: ${p => p.sizes.line3.height}px;
    filter: blur(${p => p.sizes.line3.height / 15}px);
    animation: animLines 80s linear infinite;
    box-shadow: ${p => p.scale * 85}px ${p => p.scale * 155}px
        ${p => p.scale * 1.5}px #a1e300,
      ${p => p.scale * 55}px ${p => p.scale * 64}px #a1e300,
      ${p => p.scale * 198}px ${p => p.scale * 150}px #a1e300,
      ${p => p.scale * 161}px ${p => p.scale * 88}px #a1e300,
      ${p => p.scale * 169}px ${p => p.scale * 101}px #a1e300,
      ${p => p.scale * 42}px ${p => p.scale * 107}px #a1e300,
      ${p => p.scale * 52}px ${p => p.scale * 147}px #a1e300,
      ${p => p.scale * 181}px ${p => p.scale * 71}px #a1e300,
      ${p => p.scale * 138}px ${p => p.scale * 82}px #a1e300,
      ${p => p.scale * 156}px ${p => p.scale * 149}px #a1e300;
    &:after {
      top: ${p => p.intend}px;
      width: ${p => p.sizes.line3.width}px;
      height: ${p => p.sizes.line3.height}px;
      filter: blur(${p => p.sizes.line3.height / 15}px);
      box-shadow: ${p => p.scale * 85}px ${p => p.scale * 155}px
          ${p => p.scale * 1.5}px #a1e300,
        ${p => p.scale * 55}px ${p => p.scale * 64}px #a1e300,
        ${p => p.scale * 198}px ${p => p.scale * 150}px #a1e300,
        ${p => p.scale * 161}px ${p => p.scale * 88}px #a1e300,
        ${p => p.scale * 169}px ${p => p.scale * 101}px #a1e300,
        ${p => p.scale * 42}px ${p => p.scale * 107}px #a1e300,
        ${p => p.scale * 52}px ${p => p.scale * 147}px #a1e300,
        ${p => p.scale * 181}px ${p => p.scale * 71}px #a1e300,
        ${p => p.scale * 138}px ${p => p.scale * 82}px #a1e300,
        ${p => p.scale * 156}px ${p => p.scale * 149}px #a1e300;
    }
  }
  ${Line4} {
    width: ${p => p.sizes.line4.width}px;
    height: ${p => p.sizes.line4.height}px;
    animation: animLines 95s linear infinite;
    box-shadow: ${p => p.scale * 40}px ${p => p.scale * 165}px #a1e300,
      ${p => p.scale * 55}px ${p => p.scale * 84}px #a1e300,
      ${p => p.scale * 64}px ${p => p.scale * 73}px #a1e300,
      ${p => p.scale * 172}px ${p => p.scale * 156}px #a1e300,
      ${p => p.scale * 198}px ${p => p.scale * 160}px #a1e300,
      ${p => p.scale * 161}px ${p => p.scale * 88}px #a1e300,
      ${p => p.scale * 169}px ${p => p.scale * 121}px #a1e300,
      ${p => p.scale * 189}px ${p => p.scale * 75}px #a1e300,
      ${p => p.scale * 151}px ${p => p.scale * 82}px #a1e300,
      ${p => p.scale * 126}px ${p => p.scale * 149}px #a1e300;
    &:after {
      top: ${p => p.intend}px;
      width: ${p => p.sizes.line4.width}px;
      height: ${p => p.sizes.line4.height}px;
      box-shadow: ${p => p.scale * 40}px ${p => p.scale * 165}px #a1e300,
        ${p => p.scale * 55}px ${p => p.scale * 84}px #a1e300,
        ${p => p.scale * 64}px ${p => p.scale * 73}px #a1e300,
        ${p => p.scale * 172}px ${p => p.scale * 156}px #a1e300,
        ${p => p.scale * 198}px ${p => p.scale * 160}px #a1e300,
        ${p => p.scale * 161}px ${p => p.scale * 88}px #a1e300,
        ${p => p.scale * 169}px ${p => p.scale * 121}px #a1e300,
        ${p => p.scale * 189}px ${p => p.scale * 75}px #a1e300,
        ${p => p.scale * 151}px ${p => p.scale * 82}px #a1e300,
        ${p => p.scale * 126}px ${p => p.scale * 149}px #a1e300;
    }
  }
  @keyframes animLines {
    from {
      transform: translateY(0px);
    }

    to {
      transform: translateY(-${p => p.intend}px);
    }
  }
`;

export { Wrapper, Line1, Line2, Line3, Line4 };
