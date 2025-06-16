import './app.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
//import Register from './components/Register'
//import Login from './components/Login'

export function App() {


  return (
    <>
      <Navbar/>
      {/*<Register />*/}  
      {/*<Login />*/}  
      <Home/>      
      <Footer/>
    </>
  )
}
