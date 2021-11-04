// core
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';

// context

// locales
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

// store
import { useAppSlice} from '../../../store/modules/hook';
import {  selectLoading ,homeCategories} from 'store/modules/static/home/selectors';
import { selectCategories } from '../../../store/modules/selectors';

// components
import HomeSEO from './SEO';

// styles
import {
  Wrapper,
  EntrySection,
} from './styles';
import { CustomMainWrapper } from 'styles/custom-global-styles';


import { Loader } from '../../../components/layouts/StaticLayout/Loader';

export function Home() {
  // slice hook
  const { actions } = useAppSlice();

  // locales hook
  const { t } = useTranslation();

  // selectors
  // const data = useSelector(selectData);
  const loading = useSelector(selectLoading);

  // dispatch


  // render
  return (
    <>
      <HomeSEO />
      {loading &&
      ReactDOM.createPortal(<Loader />, document.getElementById('loader')!)}
      <Wrapper>
        <CustomMainWrapper>
          <EntrySection />

        </CustomMainWrapper>
      </Wrapper>
    </>
  );
}
