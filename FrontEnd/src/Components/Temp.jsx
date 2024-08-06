import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home"
import { AddHotelData } from "./HOTELS/AddHotelData"

const Temp = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}></Route>
       <Route path="/addhotel" element={<AddHotelData />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default Temp
