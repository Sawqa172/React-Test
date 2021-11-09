import styled from 'styled-components/macro';
import { media } from 'styles/media';


const Categories = styled.div`
  position: relative;
  
  //align-items: center;
  width: 100%;
  max-width: 225px;
  margin-right: 30px;
  .categories__button{
    background-color:transparent;
    padding: 0;
    margin: 0;
    border: none;
    display: none;
    ${media.medium`
      display:flex;
    `}
    span{
      font-size: 18px;
      font-family: ${p => p.theme.fontFamily.SourceSansProRegular};
      pointer-events: none;
    }
    
    
  }
  //.categories__body{
  //  opacity: 1;
  //  visibility: visible;
  //}
  &.categories_open{
    ${media.medium`
      .categories__body{
        opacity: 1;
        visibility: visible;
      }
    `}

  }
  ${media.large`
    max-width:175px;
  `}
  ${media.medium`
    width:100%;
    max-width:100%;
    margin-bottom:50px;
    margin-right:0;
  `}
  
  


`;
const CategoriesBody = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: .3s linear;
  opacity: 1;
  visibility: visible;
  

  ${media.medium`
    position:absolute;
    top:100%;
    left:0;
    max-width:555px;
    flex-direction:column;
    border-radius:5px;
    border:1px solid #000;
    padding:10px;
    max-height:150px;
    overflow-y:auto;
    z-index:2;
    background-color:#fff;
    height:auto;
    justify-content:flex-start;
    opacity: 0;
    visibility: hidden;
    
   
  `}
  
`;

const SingleCategory = styled.button`
  background: transparent;
  padding: 0;
  border: none;
  cursor:pointer;
  text-align:left;
  transition: .3s linear;
  &:hover{
    span{
      color: ${p => p.theme.colors.mainRed};
    }
  }
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
export { SingleCategory , Categories, CategoriesBody};