import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AppDevelopment from "./Pages/AppDevelopmentPage";
import WebDevelopment from "./components/Services/WebDevelopment";
import DigitalPage from "./Pages/DigitalPage";
import WordpressPage from "./Pages/WordpressPage";
import ShopifyDevelopment from "./Pages/ShopifyDevelopmentPage";
import Home from "./Pages/HomePage";
import ContactPage from "./components/Contact/ContactPage";
import AboutUs from "./components/AboutUs/AboutUs";
import Blog from "./components/Blog/Blog";
import AllServices from "./components/Services/AllServices";
import Navbar from "./components/Navbar/Navbar";

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
        <Route path="/services" element={<AllServices />} />
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