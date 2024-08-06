import React from 'react'
import "../HOTELS/HotelStyles/HotelData.css"
import logo from "/src/assets/Elogo.png"
const HotelForm = () => {
  return (
<div className='mt-2'>
<div className='container'>
<div id='container-fluid-bg'>
<img src={logo} className='img-fluid' alt="" id='hotel-logo'/>
<h1 className='text-center p-2' id='hotel-head' style={{fontWeight:"700"}}>FOODHUB</h1>
</div>

<div className='p-4'id='form-bg'>
<h3 className='text-center' style={{fontWeight:"700"}}>HOTEL INFORMATION</h3>
<form>
<div className="row">

<div className="col-sm-6">
<div className="form-floating mb-3 mt-3">
<input type="text" className="form-control hotel-input" id="text" placeholder="Enter text" autoComplete='off' name="text" />
<label htmlFor="text">Enter Hotel Name</label>
</div>
</div>

<div className="col-sm-6">
<div className="form-floating mb-3 mt-3">
<input type="text" className="form-control hotel-input" id="text" placeholder="Enter text" autoComplete='off' name="text" />
<label htmlFor="text">Hotel Image Outside</label>
</div>
</div>

</div>

<div className="row">

<div className="col-sm-6">
<div className="form-floating mb-3 mt-3">
<input type="text" className="form-control hotel-input" id="text" placeholder="Enter text" autoComplete='off' name="text" />
<label htmlFor="text">Hotel Image Inside</label>
</div>
</div>

<div className="col-sm-6">
<div className="form-floating mb-3 mt-3">
<input type="text" className="form-control hotel-input" id="text" placeholder="Enter text" autoComplete='off' name="text" />
<label htmlFor="text">Hotel Location</label>
</div>
</div>

</div>

<div className='row'>

<div className="col-sm-6">
<select name=""  className="form-control hotel-input mb-3 mt-3 p-3">
<option value="veg">Veg</option>
<option value="Non-Veg">Non-Veg</option>
<option value="Veg&Non-Veg">Veg&Non-Veg</option>
</select>
</div>

<div className="col-sm-6">
<div className="form-floating mb-3 mt-3">
<input type="text" className="form-control hotel-input" id="text" placeholder="Enter text" name="text" autoComplete='off' />
<label htmlFor="text">Hotel Description</label>
</div>
</div>

</div>

<h3 className='text-center' style={{fontWeight:"700"}}>FOOD INFORMATION</h3>
<div className="row">

<div className="col-sm-6">
<div className="form-floating mb-3 mt-3">
<input type="text" className="form-control hotel-input" id="text" placeholder="Enter text" autoComplete='off' name="text" />
<label htmlFor="text">Enter Food Name</label>
</div>
</div>

<div className="col-sm-6">
<div className="form-floating mb-3 mt-3">
<input type="text" className="form-control hotel-input" id="text" placeholder="Enter text" autoComplete='off' name="text" />
<label htmlFor="text">Food Image</label>
</div>
</div>

</div>

<div className="row">

<div className="col-sm-6">
<select name=""  className="form-control hotel-input mb-3 mt-3 p-3">
  <option  value="veg" >Veg</option>
  <option  value="Non-Veg" >Non-Veg</option>
  <option value="Veg&Non-Veg" >Veg&Non-Veg</option>
</select>
</div>

<div className="col-sm-6">
<div className="form-floating mb-3 mt-3">
<input type="text" className="form-control hotel-input" id="text" placeholder="Enter text" autoComplete='off' name="text" />
<label htmlFor="text">Food Description</label>
</div>
</div>

</div>

<div className="row">
<div className="col-sm-6">
<div className="form-floating mb-3 mt-3">
<input type="number" className="form-control hotel-input" id="text" placeholder="Enter text" autoComplete='off' name="text" />
<label htmlFor="text">Food Price</label>
</div>
</div>
</div>

<div className="row">
<div className="col">
<div class="d-grid">
  <button type="button" className="btn btn-block" id='btn-bg'><b>Submit</b></button>
</div>
</div>
</div>
</form>





      </div>
    </div>

</div>
  )
}

export default HotelForm

 

