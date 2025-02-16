
import {BrowserRouter ,Routes ,Route,Link} from 'react-router-dom'
import { Home } from './Pages/Home'
function App() {
  return (
    <>
    {/* <h3>JioCinema</h3> */}
     <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
