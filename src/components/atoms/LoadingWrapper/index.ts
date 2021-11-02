import styled from 'styled-components/macro';

export interface PropsType {
  height?: number;
}

const LoadingWrapper = styled.div<PropsType>`
  position: relative;
  width: 100%;
  height: ${p => (p.height ? `${p.height}px` : `100vh`)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LoadingWrapper;
