import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import AboutUs from "./Components/AboutsUs";
import Services from "./Components/Services";
import Products from "./Components/Product";
import ContactUs from "./Components/ContactUs";

import './App.css';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>

    </div>
  )
}

export default App
