import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Staff from './pages/Staff';
import PricePacket from "./pages/PricePacket";
import Sign from './pages/Sign';
function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/staff" element={<Staff/>}/>
                <Route path="/price" element={<PricePacket/>}/>
            </Routes>
            <div id="about">
                <About/>
            </div>
            <div id="staff">
                <Staff/>
            </div>
            <div id="price">
                <PricePacket/>
            </div>
            <div id='signup'>
                <Sign/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
