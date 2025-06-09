import './app.css'
import Footer from './components/Footer'
import Login from './components/Login'
//import Home from './components/Home'
import Navbar from './components/Navbar'
import Register from './components/Register'

export function App() {


  return (
    <>
      <Navbar/>
      <Register/> 
      <Login/>    
      {/*<Home />*/}  
      <Footer/>
    </>
  )
}
