import styled from 'styled-components/macro';
import { media } from 'styles/media';

import { Header } from './Header';
import { Footer } from './Footer';
import { Aside } from './Aside';


const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 310px;
  min-height: inherit;
  background-color: ${p => p.theme.colors.mainWhite};
  overflow: hidden;
`;

const StyledHeader = styled(Header)`
  flex: 0 0 auto;
  z-index: 3;
`;

const StyledAside = styled(Aside)`
  z-index: 2;
`;

const Content = styled.main`
  flex: 1 1 auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
    //padding-top: ${(80 / 375) * 100}vw;
  min-height: 100vh;
  height: auto;

`;

const ContentBody = styled.div`
  display: flex;
  width: 100%;
  padding: 60px 0 40px;
  flex-wrap: wrap;
`;

const ContentBodyGrid = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  transition: .3s linear;
  visibility: visible;
  opacity: 1;
  ${media.small`
    display:none;
  `}


  button {
    width: 20px;
    height: 20px;
    padding: 0;
    margin: 0;
    border: 0;
    background: transparent;
    display: flex;
    flex-wrap: wrap;

    cursor: pointer;

    &.grid_active {
      pointer-events: none;

      span {
        border: 1px solid #8b8b8b;

      }
    }

    &:hover {
      span {
        border: 1px solid ${p => p.theme.colors.mainRed};
      }
    }

    span {
      transition: .3s linear;
      border: 1px solid #000;
      pointer-events: none;
    }

    &.grid_one {
      span {
        width: 100%;
        height: 100%;
      }

    }

    &.grid_two {
      justify-content: space-between;

      span {
        width: 9px;
        height: 100%;

      }
    }

    &.grid_fourth {
      justify-content: space-between;
      align-items: stretch;

      span {
        width: 9px;
        height: 9px;
      }
    }

    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
const ContentBodyContainer = styled.div`
  display: flex;
  width: 100%;
  ${media.medium`
    flex-direction:column;
    
  `}


`;
const ContentBodyProducts = styled.div`
  flex-grow: 1;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  transition: .3s linear;

  &.content__body-products_fourth {
      ${media.small`
        justify-content:center;
      `}
    .content__body-products_item {
      width: calc((100% - 60px) / 4);
      margin-bottom: 20px;
      max-width: 250px;

      ${media.small`
      width:100%;
      max-width:555px;
      margin-bottom:30px;
      `}
      &:not(:nth-child(4n)) {
        margin-right: 20px;
        ${media.small`
          margin-right:0;
        `}

      }

    }
  }

  &.content__body-products_two {
    ${media.small`
      justify-content: center;
      `}
    .content__body-products_item {
      width: calc((100% - 20px) / 2);
      margin-bottom: 30px;
      max-width: 520px;
      
      ${media.small`
      width:100%;
      max-width:555px;
      margin-bottom:30px;

      `}
      .single-product__title {
        max-width: 450px;
        ${media.xsmall`
          max-width:265px;
        `}
      }

      &:not(:nth-child(2n)) {
        margin-right: 20px;
        ${media.small`
        margin-right:0px;
      `}

      }

    }
  }

  &.content__body-products_one {
    justify-content: center;
    

    .content__body-products_item {
      width: 555px;
      max-width: 555px;
      margin-bottom: 50px;
      
      }
      ${media.small`
        width:100%;
        max-width:555px;
        margin-bottom:30px;

      `}
      .single-product__title {
        max-width: 450px;
        ${media.xsmall`
          max-width:265px;
        `}
      }
    }
  

  span.is__loading__span {
    text-align: center;
    width: 100%;
    font-family: ${p => p.theme.fontFamily.SourceSansProBold};
  }
`;
const SingleProduct = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;

  a {
    text-decoration: none;
    padding: 0;
    margin: 0;
  }

  .single-product__image {
    width: 100%;
    height: 100%;
    max-height: 355px;
    min-height: 355px;
    overflow: hidden;
    margin-bottom: 20px;
    ${media.xsmall`
    max-height: 255px;
    min-height: 255px;
    `}

    img {
      width: 100%;
      height: 100%;
      max-height: 355px;
      object-fit: contain;
      transition: .3s linear;
    }
  }

  .single-product__title {
    transition: .3s linear;
    color: ${p => p.theme.colors.fontBlack};
    font-size: 18px;
    font-family: ${p => p.theme.fontFamily.SourceSansProRegular};
    margin: 0 0 20px 0;
    line-height: 20px;
    max-width: 200px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-height: 43px;
    min-height: 40px;
    flex: 1 1 100%;

    ${media.large`
      font-size:14px;
      line-height:16px;
      max-width:150px;
      max-height:33px;
      min-height:30px;
    `}
    ${media.small`
      max-width:500px;
      font-size:18px;
      line-height: 20px;
      max-height: 43px;
      min-height: 40px;
    `}
    ${media.xsmall`
      max-width:265px;
      font-size:14px;
      line-height:16px;
      max-height:33px;
      min-height:30px;
    `}
    
    &:hover {
      color: ${p => p.theme.colors.mainRed};
    }

  }

  .single-product__price {
    margin: 0;
    transition: .3s linear;
    color: ${p => p.theme.colors.fontBlack};
    font-size: 18px;
    font-family: ${p => p.theme.fontFamily.SourceSansProRegular};
  }

  .single-product__like {
    position: absolute;
    bottom: 60px;
    right: 0;
    padding: 0;
    background: transparent;
    margin: 0;
    border: none;
    transition: .3s linear;
    width: 20px;
    height: 20px;
    cursor: pointer;
    z-index: 2;

    &:hover svg {
      fill: ${p => p.theme.colors.mainRed};
    }

    svg {
      transition: .3s linear;
      fill: #000;
    }
  }


`;

const StyledFooter = styled(Footer)`
  flex: 0 0 auto;
`;

export {
  Wrapper,
  StyledHeader as Header,
  StyledAside as Aside,
  Content,
  StyledFooter as Footer,
  ContentBody,
  ContentBodyContainer,
  ContentBodyGrid,
  ContentBodyProducts,
  SingleProduct,

};
