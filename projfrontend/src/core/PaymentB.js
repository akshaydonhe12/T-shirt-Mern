//PaymentB.js
import React, { useState, useEffect} from "react";
import { loadCart, cartEmpty } from "./helper/cartHelper";
import { Link } from "react-router-dom";
import { getmeToken, processPayment } from "./helper/paymentBHelper";
import {createOrder} from "./helper/orderHelper";
import { isAutheticated } from "../auth/helper";
import DropIn from "braintree-web-drop-in-react";


const Paymentb = ({products, setReload = f => f, reload= undefined}) => {

    const [info, setInfo] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: ""
    });


    const userId = isAutheticated() && isAutheticated().user._id;
    const token = isAutheticated() && isAutheticated().token;


    const getToken=(userId, token) => {
        getmeToken(userId, token).then(info => {
          // console.log("INFORMATION", info)
            if (info?.error){
                setInfo({...info, error: info.error});
            }else{
                const clientToken = info?.clientToken || "empty" ;
                setInfo({ clientToken });
            }
        });
    };


    useEffect(() => {
        getToken(userId, token)

    }, []);

  return (
    <div>
      <h3>Test bt</h3>
    </div>
  );
};


export default Paymentb;