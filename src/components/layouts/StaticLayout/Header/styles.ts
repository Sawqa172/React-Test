import styled from 'styled-components/macro';
import { media } from 'styles/media';
import { ToggleButton } from './ToggleButton';
import MainLogo from 'components/atoms/MainLogo';

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px 0;
  position: relative;
  width: 100%;
  background-color: ${p => p.theme.colors.mainWhite};
  z-index: 10;
  
  
`;
const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-bottom: 20px;
  
`;
const HeaderTopInteraction = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  &.header__bag_opened{
    .header__bag-container{
      opacity: 1;
      visibility: visible;
    }
  }

  button {
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;

  }
  .header__bag-container{
    padding: 10px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 30px;
    right: 0;
    width: 300px;
    height: 150px;
    max-height: 150px;
    background-color:#fff;
    z-index: 2;
    overflow-y: auto;
    transition: .3s linear;
    opacity: 0;
    visibility: hidden;
    border: 1px solid #000;
    border-radius: 5px;
    span{
      text-align:left;
      &:not(:last-child){
        margin-bottom: 15px;
      }
    }
  }
`;

const HeaderTopButton = styled.button`
  position: relative;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  
  &:hover {
    svg {
      fill: ${p => p.theme.colors.mainRed};
    }
  }
  &:not(:last-child) {
    margin-right: 20px;
  }

  svg {
    transition: .3s linear;
  }
  span.header__quantity{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    background-color:#000;
    color: #fff;
    font-size: 10px;
    bottom: -4px;
    right: -4px;
  }
 
`;


const HeaderBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  a{
    text-decoration: none;
    font-size: 18px;
    color: #000;
    transition: .3s linear;
    font-family: ${p =>p.theme.fontFamily.SourceSansProRegular};
    // &:hover{
    //   color: ${p => p.theme.colors.mainRed};
    // }
    &:not(:last-child){
      margin-right: 35px;
    }
  }
  
`;

const Button = styled(ToggleButton)``;

const Logo = styled.a`
  font-size: 54px;
  color: ${p => p.theme.colors.fontBlack};
  font-family: ${p => p.theme.fontFamily.RomanescoRegular};
`;


export { Wrapper, Button, Logo ,HeaderTop, HeaderBottom , HeaderTopInteraction, HeaderTopButton};
