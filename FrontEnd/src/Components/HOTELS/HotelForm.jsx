import React, { useState } from 'react'
import "../HOTELS/HotelStyles/HotelData.css"
import logo from "/src/assets/Elogo.png"
import axios from 'axios'
import { API_EndPoint } from '../GeneralData'
const HotelForm = () => {

// state for Hotel Information

let [hotelname,sethotelname]= useState("")
let [hotelimgO,sethotelimgO]= useState()
let [hotelimgI,sethotelimgI]= useState()
let [hotellocation,sethotellocation]= useState()
let [hotelcategory,setHotelcategory]= useState()
let [hoteldesc,sethoteldesc]= useState()

// state for Hotel Information

let [foodname,setfoodname]=useState()
let [foodimg,setfoodimg]=useState()
let [foodtype,setfoodtype]=useState()
let [fooddesc,setfooddesc]=useState()
let [foodprice,setfoodprice]=useState()

let handleSubmit =(e)=>{
  e.preventDefault()
  let formdata = {
    hotelname,
    hotelimgO,
    hotelimgI,
    hotellocation,
    hotelcategory,
    hoteldesc,
    foodname,
    foodimg,
    foodtype,
    fooddesc,
    foodprice
  }
  console.log(formdata);

axios.post(`${API_EndPoint}/api/hotel/addhotel`,formdata)
.then(()=>{
  console.log("Data Created to Server!");
})
.catch((e)=>{
  console.log("Data Failed To Create!");
  
})
sethotelname("");
sethotelimgO("");
sethotelimgI("");
sethotellocation("");
setHotelcategory("Veg");
sethoteldesc("");
setfoodname("");
setfoodimg("");
setfoodtype("Veg");
setfooddesc("");
setfoodprice("")
  
}
  return (
<div className='mt-2'>
<div className='container'>
<div id='container-fluid-bg'>
<img src={logo} className='img-fluid' alt="" id='hotel-logo'/>
<h1 className='text-center p-2' id='hotel-head' style={{fontWeight:"900"}}>FOODHUB</h1>
</div>
<p className='text-center' style={{fontVariant:"small-caps",fontWeight:"500"}}>Add your Hotel and Food details properly in the below form!</p>

<div className='p-4'id='form-bg'>
<h3 className='text-center info-color' style={{fontVariant:"all-small-caps",fontWeight:"700"}}>HOTEL INFORMATION</h3>
<form onSubmit={handleSubmit}>
<div className="row">

<div className="col-sm-6">
<div className="form-floating mb-3 mt-3">
<input type="text" className="form-control hotel-input" id="text" placeholder="Enter text" autoComplete='off' name="text" onChange={(e)=>sethotelname(e.target.value)} value={hotelname} />
<label htmlFor="text" style={{fontVariant:"small-caps",fontWeight:"500"}}>Enter Hotel Name</label>
</div>
</div>

<div className="col-sm-6">
<div className="form-floating mb-3 mt-3">
<input type="text"   className="form-control hotel-input" id="text" placeholder="Enter text" autoComplete='off' name="text" onChange={(e)=>sethotelimgO(e.target.value)} value={hotelimgO} />
<label htmlFor="text" style={{fontVariant:"small-caps",fontWeight:"500"}}>Hotel Image Outside</label>
</div>
</div>

</div>

<div className="row">

<div className="col-sm-6">
<div className="form-floating mb-3 mt-3">
<input type="text" className="form-control hotel-input" id="text" placeholder="Enter text" autoComplete='off' name="text" onChange={(e)=>sethotelimgI(e.target.value)} value={hotelimgI}/>
<label htmlFor="text" style={{fontVariant:"small-caps",fontWeight:"500"}}>Hotel Image Inside</label>
</div>
</div>

<div className="col-sm-6">
<div className="form-floating mb-3 mt-3">
<input type="text" className="form-control hotel-input" id="text" placeholder="Enter text" autoComplete='off' name="text" onChange={(e)=>sethotellocation(e.target.value)} value={hotellocation}/>
<label htmlFor="text" style={{fontVariant:"small-caps",fontWeight:"500"}}>Hotel Location</label>
</div>
</div>

</div>

<div className='row'>

<div className="col-sm-6">
<select name="" style={{fontVariant:"small-caps",fontWeight:"500"}} className="form-control hotel-input-select mb-3 mt-3 p-3" onChange={(e)=>setHotelcategory(e.target.value)} value={hotelcategory}>
<option  value="veg">Veg</option>
<option value="Non-Veg">Non-Veg</option>
<option value="Veg&Non-Veg">Veg&Non-Veg</option>
</select>
</div>

<div className="col-sm-6">
<div className="form-floating mb-3 mt-3">
<input type="text" className="form-control hotel-input" id="text" placeholder="Enter text" name="text" autoComplete='off' onChange={(e)=>sethoteldesc(e.target.value)} value={hoteldesc}/>
<label htmlFor="text" style={{fontVariant:"small-caps",fontWeight:"500"}}>Hotel Description</label>
</div>
</div>

</div>

<h3 className='text-center info-color' style={{fontVariant:"all-small-caps",fontWeight:"700"}}>FOOD INFORMATION</h3>
<div className="row">

<div className="col-sm-6">
<div className="form-floating mb-3 mt-3">
<input type="text" className="form-control hotel-input" id="text" placeholder="Enter text" autoComplete='off' name="text" onChange={(e)=>setfoodname(e.target.value)} value={foodname}/>
<label htmlFor="text" style={{fontVariant:"small-caps",fontWeight:"500"}}>Enter Food Name</label>
</div>
</div>

<div className="col-sm-6">
<div className="form-floating mb-3 mt-3">
<input type="text" className="form-control hotel-input" id="text" placeholder="Enter text" autoComplete='off' name="text" onChange={(e)=>setfoodimg(e.target.value)} value={foodimg}/>
<label htmlFor="text" style={{fontVariant:"small-caps",fontWeight:"500"}}>Food Image</label>
</div>
</div>

</div>

<div className="row">

<div className="col-sm-6">
<select name="" style={{fontVariant:"small-caps",fontWeight:"500"}} className="form-control hotel-input-select mb-3 mt-3 p-3" onChange={(e)=>setfoodtype(e.target.value)} value={foodtype}>
  <option  value="veg" >Veg</option>
  <option  value="Non-Veg" >Non-Veg</option>
  <option value="Veg&Non-Veg" >Veg&Non-Veg</option>
</select>
</div>

<div className="col-sm-6">
<div className="form-floating mb-3 mt-3">
<input type="text" className="form-control hotel-input" id="text" placeholder="Enter text" autoComplete='off' name="text" onChange={(e)=>setfooddesc(e.target.value)} value={fooddesc}/>
<label htmlFor="text" style={{fontVariant:"small-caps",fontWeight:"500"}}>Food Description</label>
</div>
</div>

</div>

<div className="row">
<div className="col-sm-6">
<div className="form-floating mb-3 mt-3">
<input type="number" className="form-control hotel-input" id="text" placeholder="Enter text" autoComplete='off' name="text" onChange={(e)=>setfoodprice(e.target.value)} value={foodprice}/>
<label htmlFor="text" style={{fontVariant:"small-caps",fontWeight:"500"}}>Food Price</label>
</div>
</div>
</div>

<div className="row">
<div className="col">
<div class="d-grid">
  <button type="submit" className="btn btn-block" id='btn-bg'><b>Submit</b></button>
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

 

