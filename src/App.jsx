import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/HomePage";
import ContactPage from "./components/Contact/ContactPage";

import Blog from "./components/Blog/Blog";
import Services from "./Components/Services/AllServices";

import ShopifyDevelopment from "./Pages/ShopifyDevelopmentPage";
import AppDevelopment from "./Pages/AppDevelopmentPage";
import DigitalPage from "./Pages/DigitalPage";
import WordpressPage from "./Pages/WordpressPage";
import Footer from "./components/Footer/Footer";
import WebDevelopment from "./components/Services/WebDevelopment";
import AboutUs from "./components/AboutUs/AboutUs";



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />

        {/* Services */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/app-development" element={<AppDevelopment/>} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/digital-marketing" element={<DigitalPage />} />
        <Route path="/services/wordpress-development" element={<WordpressPage />} />
        <Route path="/services/shopify-development" element={<ShopifyDevelopment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;