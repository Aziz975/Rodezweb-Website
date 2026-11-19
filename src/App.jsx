import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/HomePage";
import ContactPage from "./components/Contact/ContactPage";
import AboutUs from "./Components/AboutUs/AboutUs";
import Blog from "./Components/Blog/Blog";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs />} />
         <Route path="/blog" element={<Blog />} />
      </Routes>
       <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;