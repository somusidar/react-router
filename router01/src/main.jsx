import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import Contact from './Components/Contact/Contact.jsx'
import About from './Components/About/About.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {

// Path: '/',
// element: <Layout/>,
// children: [
//   {
//     path:"",
//     element:<Home/>
//   },
  
//   {
//     path: "About",
//     element:<About/>
//   },
//   {
//     path: "Contact",
//     element:<Contact/>
//   }
// ] 
// }])    

const router = createBrowserRouter(
  createRoutesFromElements(
<Route path = '/' element = {<Layout/>}>
<Route path='' element = {<Home/>}/>
<Route path='about' element = {<About/>}/>
<Route path='contact' element = {<Contact/>}/>
<Route path='user/:userid' element = {<User/>}/>
<Route path='github' element = {<Github/>}/>
  </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)
