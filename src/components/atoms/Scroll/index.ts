import styled from 'styled-components/macro';

const Scroll = styled.div`
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 2px;
    background-color: ${p => p.theme.colors.mainBlue};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: ${p => p.theme.colors.mainBlue};
  }
`;

export default Scroll;
