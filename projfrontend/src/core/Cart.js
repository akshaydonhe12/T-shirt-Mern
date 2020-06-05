import React, {useState, useEffect} from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import {loadCart} from "./helper/cartHelper";

const Cart = ()=> {
 
    const [products, setproducts] = useState([])

    const loadAllProducts = () => {
        return (
            <div>
                <h2>This Section is to load products.</h2>
            </div>
        );
    };

    const loadCheckout = () => {
        return (
            <div>
                <h2>This Section for Checkout.</h2>
            </div>
        );
    };
    
   

  return (
    <Base title="Cart Page" description="Ready To Checkout">
      <div className="row ">
       <div className="col-6">{loadAllProducts()}</div>
       <div className="col-6">{loadCheckout()}</div>

          
        </div>
    </Base>
  );
};

export default Cart;