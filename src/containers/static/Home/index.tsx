// core
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';

// context

// locales
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

// store
import { useHomeSlice } from 'store/modules/static/home/hook';
import { selectData, selectLoading } from 'store/modules/static/home/selectors';

// components
import HomeSEO from './SEO';

// styles
import {
  Wrapper,
  EntrySection,
} from './styles';
import { Loader } from '../../../components/layouts/StaticLayout/Loader';

export function Home() {
  // slice hook
  const { actions } = useHomeSlice();

  // locales hook
  const { t } = useTranslation();

  // selectors
  const data = useSelector(selectData);
  const loading = useSelector(selectLoading);

  // dispatch
  const dispatch = useDispatch();
  // const requestData = () => dispatch(actions.fetchDataTrigger());

  // on mount
  // useEffect(() => {
  //   requestData();
  //
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // render
  return (
      <>
      <HomeSEO />
      {loading &&
        ReactDOM.createPortal(<Loader />, document.getElementById('loader')!)}
        <Wrapper>
          <EntrySection />
        </Wrapper>
      </>
  );
}
