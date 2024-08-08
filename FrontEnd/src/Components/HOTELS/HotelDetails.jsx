import React from 'react'
import imgG1 from "/src/assets/imagegallery-1.webp"
import imgG2 from "/src/assets/imagegallery-2.avif"
import imgG3 from "/src/assets/imagegallery-3.avif"
import imgG4 from "/src/assets/imagegallery-4.avif"
import Dummyimg from "/src/assets/Dummyimg.avif"
import "../HOTELS/HotelStyles/Hoteldetails.css"
const HotelDetails = () => {
  return (
<div className='container mt-2'>
      
<div className='row'>
<div className="col">
<img src={imgG1} alt="" className='img-fluid img-gallery'/>
</div>
{/* <div className="col-4">
<div className='row'>
<div className='col-12'>
<img src={imgG2} alt="" className='img-fluid img-gallery' style={{height:"60px"}}/>
</div>
<div className='col-12 mt-2'>
<img src={imgG3} alt="" className='img-fluid img-gallery'style={{height:"60px"}}/>
</div>
</div>
</div> */}
</div>
<div className="row">
<div className="col">
<h3>The Great Kabab Factory - Radisson Blu</h3>
<p>North Indian, Mughlai, Kebab, Desserts...</p>
<p><b>Category:</b>Veg & Non-veg</p>
<p>Radisson Blu, Egmore, Chennai</p>  
</div>
</div>



<div>
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a className="nav-link " data-bs-toggle="tab" href="#review">Review</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="tab" href="#menu">Menu</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="tab" href="#book-table">Book Table</a>
    </li>
  </ul>
<div className="tab-content">

<div className="tab-pane container fade" id="review">
<h2>The Great Kabab Factory - Radisson Blu Reviews</h2>
<div class="form-floating">
<textarea class="form-control" id="comment" name="text" placeholder="Comment goes here"></textarea>
<label for="comment">Comments</label>
</div>
</div>

<div className="tab-pane container fade" id="menu">
<div className="row">
<div className="col-sm-4">
<div className="card mt-4">
<img className="card-img-top img-fluid" src={Dummyimg} alt="Card image" />
<div className="card-body">
<h4 className="card-title">FoodHub</h4>
<p className="card-text">North Indian, Mughlai, Kebab, Desserts...</p>
<p><b>Category:</b>Veg & Non-veg</p>
<p>Radisson Blu, Egmore, Chennai</p>  
</div>
</div>
</div> 

<div className="col-sm-4">
<div className="card mt-4">
<img className="card-img-top img-fluid" src={Dummyimg} alt="Card image" />
<div className="card-body">
<h4 className="card-title">FoodHub</h4>
<p className="card-text">North Indian, Mughlai, Kebab, Desserts...</p>
<p><b>Category:</b>Veg & Non-veg</p>
<p>Radisson Blu, Egmore, Chennai</p>  
</div>
</div>
</div>    

<div className="col-sm-4">
<div className="card mt-4">
<img className="card-img-top img-fluid" src={Dummyimg} alt="Card image" />
<div className="card-body">
<h4 className="card-title">FoodHub</h4>
<p className="card-text">North Indian, Mughlai, Kebab, Desserts...</p>
<p><b>Category:</b>Veg & Non-veg</p>
<p>Radisson Blu, Egmore, Chennai</p>  
</div>
</div>
</div> 
</div> 
</div>

<div className="tab-pane container fade" id="book-table">...</div>
</div>
</div>




</div>
  )
}

export default HotelDetails
