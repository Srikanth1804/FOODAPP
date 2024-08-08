import React from 'react'
import Dummyimg from "/src/assets/Dummyimg.avif"
const HotelFiles = (props) => {
let {HotelName,HotelImgO,HotelLocation,HotelDesc,HotelCategory} = props
  return (
<div className='container'>
<div className="row">
<div className="col-sm-4">
<div className="card mt-4">
<img className="card-img-top img-fluid" src={HotelImgO} alt="Card image" />
<div className="card-body">
<h4 className="card-title">{HotelName}</h4>
<p className="card-text">{HotelDesc}</p>
<p><b>Category:</b>{HotelCategory}</p>
<p>{HotelLocation}</p>  
</div>
</div>

</div>    
</div>  



    </div>
  )
}

export default HotelFiles
