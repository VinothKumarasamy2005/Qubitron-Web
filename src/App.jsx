import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import TechincalEvents from './components/TechincalEvents'
import NonTechnicalEvents from './components/NonTechnicalEvents'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <BrowserRouter>
         <Routes>   
          {/* http://localhost:5174 */}
              <Route path='/' element={<NavBar/>}></Route>

          {/* http://localhost:5174/techinal-events */}
              <Route path='/techincal-events' element={<TechincalEvents/>}></Route>


          {/* http://localhost:5174/non-techinal-events */}
          <Route path='/non-techincal-events' element={<NonTechnicalEvents/>}></Route>



          {/* http://localhost:5174/workshops */}
          <Route path='/workshops' element={<NonTechnicalEvents/>}></Route>




          
 
          </Routes>
  <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
