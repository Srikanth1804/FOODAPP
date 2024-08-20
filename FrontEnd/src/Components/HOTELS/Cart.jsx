import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_EndPoint } from "../GeneralData";

const Cart = () => {
  let [Cart, setCart] = useState();
  console.log(Cart);

  useEffect(() => {
    axios
      .get(`${API_EndPoint}/food/getcart`)
      .then((res) => {
        setCart(res.data);
      })
      .catch((e) => {
        console.log("Failld To Add Card!");
      });
  }, []);

  return <div>card</div>;
};

export default Cart;
