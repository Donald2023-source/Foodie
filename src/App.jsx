import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Menu from "./Pages/Menu"
import './App.css'
import { CardProvider } from "./Context/CardContext"
const App = () => {

  
  return (
    <>
    <CardProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
    </Routes>
    </BrowserRouter>
    </CardProvider>
    </>
  )
}
export default App