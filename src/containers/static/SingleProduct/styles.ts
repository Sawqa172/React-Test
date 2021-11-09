import styled from 'styled-components/macro';
import { media } from 'styles/media';


const Wrapper = styled.div`
  display: flex;
  padding-top: 60px;
`;

const SingleProductContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  ${media.small`
    flex-direction:column;
    align-items:center;
  `}

`;


const SingleProductLeft = styled.div`
  display: flex;
  width: 640px;
  min-width: 640px;
  height: auto;
  max-height: 620px;
  margin-right: 30px;
  ${media.large`
    min-width:330px;
    width:330px;
  `}
  ${media.medium`
    min-width:220px;
    width:220px;
  `}
  ${media.small`
    margin-right:0;
    margin-bottom:40px;
  `}



  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const SingleProductRight = styled.div`
  display: flex;
  flex-direction: column;
  ${media.small`
    width:100%;
  `}

`;

const SingleProductRightTitle = styled.h1`
  display: inline-block;
  font-size: 30px;
  font-family: ${p => p.theme.fontFamily.SourceSansProSemiBold};
  margin: 0 0 10px 0;

`;
const SingleProductRightPrice = styled.h1`
  display: inline-block;
  font-size: 30px;
  font-family: ${p => p.theme.fontFamily.SourceSansProRegular};
  margin: 0 0 25px 0;

`;
const SingleProductRightDescription = styled.div`
  padding: 25px 0;
  display: inline-block;

  margin-bottom: 35px;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;

  p {
    margin: 0;
    font-size: 16px;
    font-family: ${p => p.theme.fontFamily.SourceSansProRegular};

  }
`;

const SingleProductRightButtons = styled.div`
  display: flex;
  width: 100%;
  ${media.medium`
    flex-direction:column;
  `}
  ${media.small`
    flex-direction:row;
  `}
  ${media.xsmall`
      flex-direction:column;
  `}



  button {
    padding: 0;
    border-radius: 25px;
    width: 305px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    transition: .3s linear;
    ${media.small`
      width:250px;
    `}
    ${media.xsmall`
      width:290px;
    `}


    span {
      font-size: 16px;
      font-family: ${p => p.theme.fontFamily.SourceSansProRegular};
      text-transform: uppercase;
      transition: .3s linear;

    }
  }


`;

const SingleProductRightButtonsBuy = styled.button`
  background-color: #333;
  border: 1px solid transparent;
  margin: 0;
  ${media.medium`
      margin-bottom:30px;
  `}
  


  &:hover{
    background-color: ${ p => p.theme.colors.mainRed};
  }


  span {
    color: #fff;
  }

`;
const SingleProductRightButtonsQuickBuy = styled.button`
  background-color: transparent;
  margin: 0 0 0 auto;
  border: 1px solid #333;
  ${media.medium`
      margin:0;
  `}
  ${media.small`
    margin: 0 0 0 auto;

  `}
  
  ${media.xsmall`
      margin:0;
  `}


  &:hover{
    background-color: #333;
    span{
      color: #fff;
    }
  }

  span {
    color: #000;
    text-transform: uppercase;
  }

`;


export {
  Wrapper,
  SingleProductContainer,
  SingleProductLeft,
  SingleProductRight,
  SingleProductRightTitle,
  SingleProductRightPrice,
  SingleProductRightDescription,
  SingleProductRightButtons,
  SingleProductRightButtonsBuy,
  SingleProductRightButtonsQuickBuy,
};