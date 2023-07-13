import React ,{ useContext }from 'react';
import ProductLists from '../Components/ProductLists.jsx';
import { ProductContext } from '../Pages/Products.js';

//arrow function for creating product items------------------------------------------------------------------------------------------>
const createCard= (data)=>(
    <ProductLists
        key={data.id}
        img={data.img}
        title={data.title}
        category={data.category}
        price={data.price}
    />
  )

const ContextProductCard = () => {

const items = useContext(ProductContext)

  return (
    <>
     {items.map(createCard)}
    </>
  )
}

export default ContextProductCard;