import React, { useEffect, useState ,FC} from 'react';
import axios from 'axios';


//styles
import { Categories, SingleCategory } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSlice } from '../../../../store/modules/hook';
import { isLoadingCategories, selectCategories } from '../../../../store/modules/selectors';


const CustomAside:FC = () => {
  const { actions } = useAppSlice();

  const dispatch = useDispatch();
  const categories = useSelector(selectCategories)
  const categoriesLoading = useSelector(isLoadingCategories)
  const requestData = () => dispatch(actions.fetchAsideCategoriesTrigger());

  // on mount
  useEffect(() => {
    requestData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function clickHandler(item) {
    let data = item.getAttribute('data-category')
    let items:string[] = []
    try{
      if(data === 'See All'){
        let response = await axios.get<string[]>('https://fakestoreapi.com/products')
        items = response.data
        console.log(items);
        return
      }
      let response = await axios.get<string[]>(`https://fakestoreapi.com/products/category/${data}`)
      items = response.data
      console.log(items);
      return
    }
    catch (e){
      alert(e)
    }

  }

  return (
    <Categories>

      {categoriesLoading ?
      <span>
        Категории Загружаються
      </span>
      :
        categories.map(item =>
          <SingleCategory key = {item} data-category = {item} onClick = {(e) => clickHandler(e.target)}>
          <span>
            {item}
          </span>
          </SingleCategory>
        )
      }

    </Categories>
  );
};

export default CustomAside;