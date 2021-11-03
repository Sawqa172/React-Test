import React, { useEffect, useState ,FC} from 'react';
import axios from 'axios';


//styles
import { Categories, SingleCategory } from './styles';


interface IProducts{
  category:string;
}

const CustomAside:FC = () => {
  const [categories,setCategories] = useState<string[]>([])


  useEffect(()=>{
    fetchCategories()
    // return setCategories([''])
  },[])


  async function fetchCategories () {
    try{
      let response = await axios.get<string[]>('https://fakestoreapi.com/products/categories')
       setCategories(['See all', ...response.data])
    }
    catch (e){
      alert(e)
    }
  }
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
      {!categories.length ?
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