import React, { useState } from 'react'
import "../HOTELS/HotelStyles/Hotelstyle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import axios from 'axios';
import { API_EndPoint } from '../GeneralData';
import HotelFiles from './HotelFiles';

const HotelSearch = () => {



  let [Dish,setDish] = useState("");
  let [Location,setLocation] = useState("")
  let [Hotel,setHotel] = useState([]);

 
  
let HandleSubmit = (e)=>{
  e.preventDefault();


  


let SearchData = {
  Dish,
  Location
}



 axios.get(`${API_EndPoint}/api/hotel/searchhotel`, {
  params: SearchData
})
 .then((res)=>{
  console.log("Search Data posted!")
  setHotel(res.data)
  
  
 })
 .catch((e)=>{
  console.log("Error TO Past Data!");
  
 })
  
  

}




  return (
      <div className='container'>
<form onSubmit={HandleSubmit}>


<div className="input-group mt-3 shadow p-3 mb-4 bg-white">

  <FontAwesomeIcon className='mt-3' icon={faMagnifyingGlass}/>
    <input type="text" list="browsers" name="browser" className="form-control" placeholder=" Dish..." id='search-bar-2'onChange={(e)=>{setDish(e.target.value)}} />
  <datalist id="browsers">
    <option value="veg">
    </option><option value="Non-Veg">
    </option><option value="Burger">
    </option><option value="Pizza">
    </option><option value="Cakes">
    </option></datalist>
    
    <select name="" id="location-bar" className="form-control" onChange={(e)=>{setLocation(e.target.value)}}>
    <FontAwesomeIcon icon ={faLocationDot}/>
  <option value="chennai" className='p-2'>Chennai</option>
  <option value="madurai" className='p-2'>Madurai</option>
</select>

  <button className="btn " type="submit" id='submit-btn'>Search</button> 
</div>


</form>


{Hotel.map((h)=>{
  return(

<HotelFiles HotelName={h.HotelName} HotelImgO={h.HotelImgO} HotelLocation={h.HotelLocation} HotelDesc={h.HotelDesc} HotelCategory={h.HotelCategory}  />
    
    
  )
})}





</div>


  
  )
}

export default HotelSearch
