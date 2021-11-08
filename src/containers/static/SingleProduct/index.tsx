//core
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useAppSlice } from '../../../store/modules/hook';
import { isLoadingSingleProduct, selectBag, selectSingleProduct } from '../../../store/modules/selectors';




//styles

import {Wrapper,
  SingleProductContainer,
  SingleProductLeft,
  SingleProductRight,
  SingleProductRightTitle,
  SingleProductRightPrice,
  SingleProductRightDescription,
  SingleProductRightButtons,
  SingleProductRightButtonsBuy,
  SingleProductRightButtonsQuickBuy,
} from './styles'
import { CustomMainWrapper } from 'styles/custom-global-styles';
import { useParams } from 'react-router-dom';
import { toNumber } from 'lodash';
import { json } from 'stream/consumers';

export const SingleProduct = () => {

  interface IParams {
    id:string | any;
  }

  const { actions } = useAppSlice();
  const dispatch = useDispatch()
  let params:IParams= useParams()
  let singleProduct = useSelector(selectSingleProduct)
  let singleProductIsLoading = useSelector(isLoadingSingleProduct)
  let bag = useSelector(selectBag)

  useEffect(()=>{

    if(!singleProduct && !singleProductIsLoading){
      dispatch(actions.fetchSingleProductTrigger(params.id))
    }
  },[])



   function addToLocalStorage (that) {
     dispatch(actions.setBagTrigger(that))
     let currentBag = [...bag, that]
     localStorage.setItem('bag', JSON.stringify(currentBag))

  }

  return (
    <Wrapper>
      <CustomMainWrapper>
        {!singleProductIsLoading
          ?
        <SingleProductContainer>
            <SingleProductLeft>
              <img src = {singleProduct?.image}/>
            </SingleProductLeft>
            <SingleProductRight>
              <SingleProductRightTitle>
                {singleProduct?.title}
              </SingleProductRightTitle>
              <SingleProductRightPrice>
                {singleProduct?.price} грн
              </SingleProductRightPrice>
              <SingleProductRightDescription>
                <p>
                  {singleProduct?.description}
                </p>
              </SingleProductRightDescription>
              <SingleProductRightButtons>
                <SingleProductRightButtonsBuy onClick={() => addToLocalStorage(singleProduct?.title)}>
                <span>
                  Купити
                </span>
                </SingleProductRightButtonsBuy>
                <SingleProductRightButtonsQuickBuy>
                <span>
                  Швидке замовлення
                </span>
                </SingleProductRightButtonsQuickBuy>
              </SingleProductRightButtons>
            </SingleProductRight>

        </SingleProductContainer>
          :
          <span>
              Товар загружаеться
          </span>
        }



      </CustomMainWrapper>
    </Wrapper>
  );
};

