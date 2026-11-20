import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/HomePage";
import ContactPage from "./components/Contact/ContactPage";
import AboutUs from "./Components/AboutUs/AboutUs";
import Blog from "./Components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/AllServices";
import WebDevelopment from "./components/Services/WebDevelopment";
import DigitalMarketing from "./components/Services/DigitalMarketing";
import WordpressDevelopment from "./components/Services/WordpressDevelopment";
import ShopifyDevelopment from "./components/Services/ShopifyDevelopment";
import AppDevelopment from "./components/Services/AppDevelopment";
// import AppDevelopment from "./components/Services/AppDevelopment";



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />}>
          <Route path="/services/AppDevelopment" element={<AppDevelopment />} />
          <Route path="/services/WebDevelopment" element={<WebDevelopment />} />
          <Route path="/services/DigitalMarketing" element={<DigitalMarketing />} />
          <Route path="/services/WordpressDevelopment" element={<WordpressDevelopment />} />
          <Route path="/services/ShopifyDevelopment" element={<ShopifyDevelopment />} />
        </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;