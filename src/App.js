import React from "react";
import './index.css';
import Header from "./components/Headar";
import products from './products.json'
import  Product from "./components/Product"
import {useState,useEffect} from 'react'
import Basket from "./components/Basket"

function App() {
  const [basket,setBasket] = useState([]);
  const [cost,setCost] = useState("");

  useEffect( () => {
    const totalPrice = basket.reduce((pre,basket) => pre +(basket.amount*basket.price),0);
    setCost(totalPrice);

  },[basket])

  return (
    <>
      <Header/>
      <div className="productContainer">
      <div className="productBoxs">
      {
      products.map(product => (
        <Product key = { product.id} basket={basket} setBasket={setBasket}  product={product} />
        ))
    }
      </div>

    <Basket cost={cost} basket={basket}/>
      </div>
    </>
  );
}

export default App;
