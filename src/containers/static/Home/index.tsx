// core
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';

// context

// locales
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

// store
import { useAppSlice } from '../../../store/modules/hook';
import { selectLoading, homeCategories } from 'store/modules/static/home/selectors';
import { selectAllProducts, selectCategories } from '../../../store/modules/selectors';

// components
import HomeSEO from './SEO';

// styles
import {
  Wrapper,
  EntrySection,
} from './styles';
import { CustomMainWrapper } from 'styles/custom-global-styles';


import { Loader } from '../../../components/layouts/StaticLayout/Loader';
import {
  ContentBody,
  ContentBodyContainer,
  ContentBodyGrid,
  ContentBodyProducts,
  SingleProduct,
} from '../../../components/layouts/StaticLayout/styles';
import CustomAside from '../../../components/layouts/StaticLayout/CustomAside';
import { Link } from 'react-router-dom';
import LikesIcon from '../../../components/icons/Likes';

export function Home() {
  // slice hook
  const { actions } = useAppSlice();

  // locales hook
  const { t } = useTranslation();

  //
  let [gridSwitcher, setGridSwitcher] = useState(`content__body-products_fourth`)
  let [activeButton, setActiveButton] = useState()
  // dispatch
    const allProducts = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  const getCategories = () => dispatch(actions.fetchAsideCategoriesTrigger());
  const getAllProducts = () => dispatch(actions.fetchAllProductsTrigger());

  useEffect(() => {
    getCategories();
    getAllProducts();
  }, []);

  const sendData = (id) => {
    dispatch(actions.fetchSingleProductTrigger(id));
  };

  const switchGrid = (e) => {
    let buttonID = e.target.id;
    setActiveButton(buttonID)
    console.log(activeButton);
    if (buttonID === 'grid_one') {
      setGridSwitcher('content__body-products_one')
      return;
    }
    if (buttonID === 'grid_two') {
      setGridSwitcher('content__body-products_two')
      return;
    }
    if (buttonID === 'grid_fourth') {
      setGridSwitcher('content__body-products_fourth')
      return;
    }


  };
  let qwerty =[
    {id:"grid_one",className:"grid_one",span:1,},
    {id:"grid_two",className:"grid_two",span:2,},
    {id:"grid_fourth",className:"grid_fourth",span:4,},
  ]

  // render
  return (
    <Wrapper>
      <CustomMainWrapper>
        <ContentBody>
          <ContentBodyGrid>

            <button
              className={`grid_one`}
              id={'grid_one'}
              onClick={(e) => switchGrid(e)}
            >
              <span />


            </button>
            <button
              className={`grid_two` }
              id={'grid_two'}
              onClick={(e) => switchGrid(e)}
            >
              <span />
              <span />

            </button>
            <button
              className={`grid_fourth` }
              id={'grid_fourth'}
              onClick={(e) => switchGrid(e)}
            >
              <span />
              <span />
              <span />
              <span />
            </button>
          </ContentBodyGrid>
          <ContentBodyContainer>
            <CustomAside>

            </CustomAside>
            <ContentBodyProducts className={gridSwitcher}>
              {
                allProducts
                  ? allProducts.map(item =>
                    <SingleProduct key={item.id} className={'content__body-products_item'}>

                      <div className={'single-product__image'}>
                        <Link to={`/singleProduct/${item.id}`} onClick={() => {
                          sendData(item.id);
                        }}>
                          <img src={item.image} />

                        </Link>
                      </div>
                      <Link to={`/singleProduct/${item.id}`} className={'single-product__title'} onClick={() => {
                        sendData(item.id);
                      }}> {item.title}</Link>
                      <p className={'single-product__price'}> {item.price} Грн</p>
                      <button className={'single-product__like'}>
                        <LikesIcon />
                      </button>
                    </SingleProduct>,
                  )
                  :
                  <span className={'is__loading__span'}>Товары загружаються</span>
              }
            </ContentBodyProducts>
          </ContentBodyContainer>

        </ContentBody>

      </CustomMainWrapper>
    </Wrapper>
  );
}
