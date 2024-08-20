<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import './App.css';
import { CardProvider } from "./Context/CardContext";
import { CartProvider } from "react-use-cart";
import CheckoutWrapper from "./Components/CheckoutWrapper";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Home/Navbar";
import LandingPage from "./Components/LandingPage";
import { ThemeProvider } from "./Context/themeContext";
import SignUp from "./Pages/auth/signUp";
import Login from "./Pages/auth/Login";
import Cart from "./Components/Cart";
import ProfileHome from "./Pages/Profile/components/Home";
import ProfileLayout from "./Pages/Profile/ProfileLayout";
import Menu from "./Pages/Profile/components/Menu";
import Checkout from "./Pages/Checkout";
import Favourites from "./Pages/Profile/components/Favourites";
import About from "./Pages/About/About";
import { AuthProvider } from "./Context/authContext";
const App = () => {
  return (
    <>
    <AuthProvider>
      <ThemeProvider>
        <CardProvider>
          <CartProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About/>}/>
                <Route path="/auth/signup" element={<SignUp/>}/>
                <Route path="/auth/login" element={<Login/>}/>
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile/Home" element={<ProfileLayout><ProfileHome/></ProfileLayout>}/>
                <Route path="/Menu" element={<ProfileLayout><Menu/></ProfileLayout>}/>
                <Route path="/checkout" element={<ProfileLayout><Checkout/></ProfileLayout>}/>
                <Route path="/favourite" element={<ProfileLayout><Favourites/></ProfileLayout>}/>
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </CardProvider>
      </ThemeProvider>
      </AuthProvider>
    </>
  );
};

export default App;
=======
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
>>>>>>> 814157c7b21617e8c5d0ca4def52305bd3730122
