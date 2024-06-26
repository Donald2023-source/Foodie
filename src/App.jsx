import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Menu from "./Pages/Menu"
import './App.css'
import { CardProvider } from "./Context/CardContext"
import { CartProvider } from "react-use-cart"
import CheckoutWrapper from "./Components/CheckoutWrapper"
import Contact from "./Pages/Contact"
import Navbar from "./Components/Navbar"
import LandingPage from "./Components/LandingPage"
const App = () => {
  return (
    <>
    <CardProvider>
      <CartProvider>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/home" element={ <Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
    <Route path="/checkout" element={<CheckoutWrapper/>}/>
      <Route path="/contact" element={<Contact/>}/>
      
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </CardProvider>
    </>
  )
}
export default App