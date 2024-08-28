import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import HotelForm from "./HOTELS/HotelForm";
import HotelFiles from "./HOTELS/HotelFiles";
import HotelDetails from "./HOTELS/HotelDetails";
import FoodForm from "./HOTELS/FoodForm";
import HotelInfo from "./HOTELS/HotelInfo";
import Contact from "./Contact/Contact";
import Cart from "./HOTELS/Cart";
import { useEffect, useState } from "react";
import axios from "axios";
import AddTableForm from "./Table/AddTable";

const Temp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hotelfile" element={<HotelFiles />}></Route>
        <Route path="/hoteldetail/:name" element={<HotelDetails />}></Route>
        <Route path="/hotelinfo" element={<HotelInfo />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/addtable" element={<AddTableForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Temp;
