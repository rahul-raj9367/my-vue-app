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
    <BrowserRouter>
    <Navbar/>
    <ScrollToTop />
     <Routes>
        <Route index path="/my-vue-app/" element={<Home />} />
        <Route path="/my-vue-app/About" element={<About />} />
        <Route path="/my-vue-app/ContactUs" element={<Contactus />} />
        <Route path="/my-vue-app/ChengalpattuRice" element={<ChengalpattuRice />} />
        <Route path="/my-vue-app/DoubleBoiled" element={<DoubleBoiled />} />
        <Route path="/my-vue-app/IdlyRice" element={<IdlyRice />} />
        <Route path="/my-vue-app/PoniRice" element={<PoniRice />} />
        <Route path="*" element={<PageError />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
