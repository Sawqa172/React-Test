import styled from 'styled-components/macro';

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 225px;
  margin-right: 30px;
  
`;

const SingleCategory = styled.button`
  background: transparent;
  padding: 0;
  border: none;
  cursor:pointer;
  &:not(:last-child){
    margin-bottom: 20px;
  }
  &.category_active{
    span{
      font-family: ${p => p.theme.fontFamily.SourceSansProSemiBold};
    }
  }
  span{
    transition: .3s linear;
    font-family: ${p => p.theme.fontFamily.SourceSansProRegular};
    font-size: 18px;
    pointer-events: none;

  }
`;
export { SingleCategory , Categories};