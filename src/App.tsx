import { useState } from "react";
import "./App.css"
import About from "./components/about/About"
import Features from "./components/features/Features"
import Footer from "./components/footer/Footer"
import Gallery from "./components/gallery/Gallery"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Menu from "./components/menu/Menu"
import Reservation from "./components/reservation/Reservation"
import Testimonials from "./components/testimonials/Testimonials"  

const App = ()=> {

  const [cartCount,setCartCount] = useState(0)

  return (
    <>
    
    <Header cartCount={cartCount}/>

    <Home/>
    <Reservation/>
    <Features/>
    <About/>

    <Menu setCartCount={setCartCount}/>

    <Gallery/>
    <Testimonials/>
    <Footer/>

    </>
  )
}

export default App