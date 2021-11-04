import React, { useEffect, useState } from 'react';
import { useLocation ,Link} from 'react-router-dom';



import { Footer } from './Footer';

// styles
import { Wrapper, Header, Aside, Content, ContentBody,ContentBodyContainer, ContentBodyGrid ,ContentBodyProducts, SingleProduct,} from './styles';
import { CustomMainWrapper } from 'styles/custom-global-styles';
import CustomAside from './CustomAside';
import { useAppSlice } from '../../../store/modules/hook';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllProducts,

} from '../../../store/modules/selectors';
import LikesIcon from '../../icons/Likes';



export function StaticLayout({ children }) {
  // router hooks
  const location = useLocation();


  const { actions } = useAppSlice();
  const dispatch = useDispatch();

  const getCategories = () => dispatch(actions.fetchAsideCategoriesTrigger());
  const getAllProducts = () => dispatch(actions.fetchAllProductsTrigger())


  useEffect(() => {
    getCategories();
    getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allProducts = useSelector(selectAllProducts)

  // const isLoadingAllProducts = useSelector(isLoadingAllProducts)


  // local state
  const [asideVisibilityStatus, toggleAsideVisibility] =
    useState<boolean>(false);

  // toggle aside handler
  const toggleAsideHandler = () => {
    toggleAsideVisibility(!asideVisibilityStatus);
  };

  return (
    <Wrapper>
      <Header isToggled={asideVisibilityStatus} onToggle={toggleAsideHandler} />
      <Content>
        <CustomMainWrapper>

          <ContentBody>
            <ContentBodyGrid>
              <button className={"grid_one"}>
                <span/>


              </button>
              <button className={"grid_two"}>
                <span/>
                <span/>


              </button>
              <button className={"grid_three grid_active"}>
                <span/>
                <span/>
                <span/>
                <span/>
              </button>
            </ContentBodyGrid>
            <ContentBodyContainer>
              <CustomAside>

              </CustomAside>
              <ContentBodyProducts>
                {
                  allProducts
                    ? allProducts.map(item =>
                      <SingleProduct key = {item.id}>

                        <div className={"single-product__image"}>
                          <Link to  = {`/singleProduct/${item.id}`}>
                            <img src = {item.image}/>

                          </Link>
                        </div>
                        <Link  to = {`/singleProduct/${item.id}`} className={"single-product__title"}> {item.title}</Link>
                        <p className={"single-product__price"}> {item.price} Грн</p>
                        <button className={"single-product__like"}>
                          <LikesIcon/>
                        </button>
                      </SingleProduct>
                    )
                    :
                    <span>Товары загружаються</span>
                }
              </ContentBodyProducts>
            </ContentBodyContainer>

          </ContentBody>
        </CustomMainWrapper>
      </Content>
      {location.pathname !== '/test' && <Footer />}

    </Wrapper>
  );
}
