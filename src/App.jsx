import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contactus from './pages/Contactus';
import PageError from './pages/PageError';
import ChengalpattuRice from './pages/ChengalpattuRice';
import DoubleBoiled from './pages/DoubleBoiled';
import IdlyRice from './pages/IdlyRice';
import PoniRice from './pages/PoniRice';

function App() {

  return (
    <>
    <BrowserRouter  basename="/my-vue-app">
    <Navbar/>
    <ScrollToTop />
     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<Contactus />} />
        <Route path="/ChengalpattuRice" element={<ChengalpattuRice />} />
        <Route path="/DoubleBoiled" element={<DoubleBoiled />} />
        <Route path="/IdlyRice" element={<IdlyRice />} />
        <Route path="/PoniRice" element={<PoniRice />} />
        <Route path="*" element={<PageError />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
    
  )
}

export default App
