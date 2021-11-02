import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// atoms
import LoadingIndicator from 'components/atoms/LoadingIndicator';

import {
  Wrapper,
  Title,
  CategoriesList,
  CategoriesItem,
  CategoriesTitle,
  CategoriesSections,
  SectionSample,
} from './styles';

// locales
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

// store
import { actions } from 'store/modules/static/faq/slice';
import {
  selectListData,
  selectListLoading,
  selectListDone,
} from 'store/modules/static/faq/selectors';

// types
import { Props } from './types';
import { ColorType, TypesType } from 'components/atoms/LoadingIndicator/types';
import ReactDOM from 'react-dom';
import { Loader } from '../../../../components/layouts/StaticLayout/Loader';
import {data} from "./data";

export default function QAList({ className }: Props) {
  // locales hook
  const { t } = useTranslation();

  // selectors
  const list = data
  const loading = useSelector(selectListLoading);
  const done = useSelector(selectListDone);

  // dispatch
  const dispatch = useDispatch();
  // const requestListData = () => dispatch(actions.fetchListDataTrigger());

  // on mount
  // useEffect(() => {
  //   list.length === 0 && requestListData();
  //
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <Wrapper className={className}>
      {loading &&
        ReactDOM.createPortal(<Loader />, document.getElementById('loader')!)}
      <Title data-aos="fade-right" data-aos-duration="800">
        FAQ
      </Title>

      <CategoriesList>
        {list.map((category, index) => (
          <CategoriesItem
            key={category.id}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={100 * index}
          >
            <CategoriesTitle index={index}>{category.title}</CategoriesTitle>

            <CategoriesSections>
              {category.questions.map(section => (
                <SectionSample key={section.id} {...section} />
              ))}
            </CategoriesSections>
          </CategoriesItem>
        ))}
      </CategoriesList>

      {loading && !done && (
        <LoadingIndicator
          type={TypesType.Float}
          color={ColorType.Dark}
          size={7}
        />
      )}
    </Wrapper>
  );
}
