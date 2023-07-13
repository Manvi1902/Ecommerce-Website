import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import Header from './Components/Header';
//import ShoppingCart from './Pages/ShoppingCart';
import Navbar from './Components/Navbar';
import ShoppingCart from './Pages/ShoppingCart';
const App = () => {
  return (
    <div>
     
     <Header/>
                
        <Router>
            <Routes>
                <Route path="/" element = {<Home/>} />
                <Route path="/products" element = {<Products/>} />
                <Route path="/contact" element = {<Contact/>} />
                <Route path="/cart" element = {<ShoppingCart/>} />
            </Routes>
        </Router>
       
    </div>
  )
}

export default App;