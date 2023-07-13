import React, { useState, createContext } from 'react';
import Sidebar from '../Components/Sidebar';
import products from '../JSONProductData/productData';
import ContextProductCard from '../Context/ContextProductCard';
import '../CSSFile/product.css';
import Container from 'react-bootstrap/esm/Container';


//useContext hooks------------------------------------------------------------------------------------------------------------------->
export const ProductContext = createContext();

//Products component----------------------------------------------------------------------------------------------------------------->
const Products =()=>{

return (
<>
<div>
    <Container className='prod-category'>
        <Sidebar/>
    </Container>

     
      <ProductContext.Provider value={products}>
          <ContextProductCard/>
      </ProductContext.Provider>  
</div>  
</>
);
}
export default Products;