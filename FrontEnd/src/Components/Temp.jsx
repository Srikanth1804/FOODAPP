import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home"
import { AddHotelData } from "./HOTELS/AddHotelData"
import HotelForm from "./HOTELS/HotelForm"

const Temp = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}></Route>
       <Route path="/addhotel" element={<HotelForm />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default Temp
