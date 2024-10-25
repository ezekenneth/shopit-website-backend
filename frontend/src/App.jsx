
import './App.css'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import About from './pages/About';
import Contact from './pages/Contact/Contact';
import OurStore from './pages/OurStore/OurStore';
import Blog from './pages/Blog/Blog';
import Wishlist from './pages/Wishlist/Wishlist';
import Login from './pages/Login/login'
import Forgotpassword from './pages/Forgotpassword/forgotpassword';
import Signup from './pages/Signup/signup';


function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/store" element={<OurStore />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/wishlist" element={<Wishlist />} />
            
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />
          
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
