
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './pages/Header'
import Home   from './pages/Home'
import Footer from './pages/Footer'
import Somu   from './pages/Somu'

function App() {

  return (
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Somu' element={<Somu/>}></Route>
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
