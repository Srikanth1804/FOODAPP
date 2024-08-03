import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home"
const Temp = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default Temp
