import React, { useState } from 'react'
import "../HOTELS/HotelStyles/Hotelstyle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const HotelSearch = () => {


  return (
      <div className='container'>
<form >


<div className="input-group mt-3 shadow p-3 mb-4 bg-white">

  <FontAwesomeIcon className='mt-2' icon={faMagnifyingGlass}/>
  <input type="text" list="browsers" name="browser" className="form-control" placeholder="Search for a dish" id='search-bar' />

  <datalist id="browsers">
    <option value="PureVeg">
    </option><option value="Non-Veg">
    </option><option value="Burger">
    </option><option value="Pizza">
    </option><option value="Cakes">
    </option></datalist>
  <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" id='location-bar'>Location</button> 
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Chennai</a></li>
    <li><a class="dropdown-item" href="#">Coimbatore</a></li>
    <li><a class="dropdown-item" href="#">Trichy</a></li>
  </ul>
  <button className="btn" type="button" id='submit-btn'>Submit</button> 
</div>


</form>

</div>


  
  )
}

export default HotelSearch
