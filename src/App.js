import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import LoginPage from "./pages/LoginPage";
import SingupPage from "./pages/SingupPage";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/singup" element={<SingupPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
