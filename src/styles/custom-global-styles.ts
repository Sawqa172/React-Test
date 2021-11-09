import styled from 'styled-components/macro';
import { media } from 'styles/media';


const CustomMainWrapper = styled.div`

  width: 100%;
  height: auto;
  max-width: 1340px;
  padding: 0 15px;
  margin: 0 auto;
  ${media.large`
    max-width:1100px;
  `}
  ${media.medium`
    max-width:790px;
  `}
  ${media.small`
    max-width:100%;
  `}
  
`;

export {CustomMainWrapper}