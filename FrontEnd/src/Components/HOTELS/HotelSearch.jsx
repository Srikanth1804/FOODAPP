import React, { useState } from 'react'
import "../HOTELS/HotelStyles/Hotelstyle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"

const HotelSearch = () => {


  return (
      <div className='container'>
<form >


<div className="input-group mt-3 shadow p-3 mb-4 bg-white">

  <FontAwesomeIcon className='mt-3' icon={faMagnifyingGlass}/>
  <input type="text" list="browsers" name="browser" className="form-control" placeholder="Search for a hotel or a dish" id='search-bar-1' />
  <input type="text" list="browsers" name="browser" className="form-control" placeholder=" Dish..." id='search-bar-2' />
  <datalist id="browsers">
    <option value="PureVeg">
    </option><option value="Non-Veg">
    </option><option value="Burger">
    </option><option value="Pizza">
    </option><option value="Cakes">
    </option></datalist>
    
    <select name="" id="location-bar" className="form-control">
    <FontAwesomeIcon icon ={faLocationDot}/>
  <option value="Chennai" className='p-2'>Chennai</option>
  <option value="Madurai" className='p-2'>Madurai</option>
</select>

  <button className="btn " type="button" id='submit-btn'>Search</button> 
</div>


</form>

</div>


  
  )
}

export default HotelSearch
