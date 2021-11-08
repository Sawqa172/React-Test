import React, { useEffect, useState } from 'react';
import { useLocation ,Link} from 'react-router-dom';

import { isLoadingAllProducts, selectCategories } from '../../../store/modules/selectors';


import { Footer } from './Footer';

// styles
import { Wrapper, Header, Aside, Content, ContentBody,ContentBodyContainer, ContentBodyGrid ,ContentBodyProducts, SingleProduct,} from './styles';

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
        {children}
      </Content>
      {location.pathname !== '/test' && <Footer />}

    </Wrapper>

  );
}
