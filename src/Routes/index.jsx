
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/LandingPage/Home";
import '../App.css';
import { CardProvider } from "../Context/CardContext";
import { CartProvider } from "react-use-cart";
import Contact from "../Pages/Contact";
import LandingPage from "../Components/LandingPage";
import { ThemeProvider } from "../Context/themeContext";
import UserSignUp from "../Pages/auth/User";
import Login from "../Pages/auth/Login";
import ProfileHome from "../Pages/Profile/components/Home";
import ProfileLayout from "../Pages/Profile/ProfileLayout";
import Menu from "../Pages/Profile/components/Menu";
import Checkout from "../Pages/Checkout";
import Favourites from "../Pages/Profile/components/Favourites";
import About from "../Pages/About/About";
import { AuthProvider } from "../Context/authContext";
import MarchantSignUp from "../Pages/auth/Marchant";


const Index = () => {
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
                <Route path="/auth/signup" element={<UserSignUp/>}/>
                <Route path="/auth/marchant" element={<MarchantSignUp/>}/>
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

export default Index;
