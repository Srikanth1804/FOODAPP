import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home"
import HotelForm from "./HOTELS/HotelForm"
import HotelFiles from "./HOTELS/HotelFiles"
import HotelDetails from "./HOTELS/HotelDetails"
import FoodForm from "./HOTELS/FoodForm"

const Temp = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}></Route>
       <Route path="/addhotel" element={<HotelForm />} />
       <Route path="/addfood" element={<FoodForm/>}></Route>
       <Route path="/hotelfile" element={<HotelFiles/>}></Route>
       <Route path="/hoteldetail" element={<HotelDetails/>}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default Temp
