import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Menu from "./Pages/Menu"
import './App.css'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App