import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import HotelDetails from "./pages/HotelDetails";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import HotelList from "./pages/Hotels";
import Favourites from "./pages/Favourites";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hotels" element={<HotelList />} />
                <Route path="/booking/:id" element={<Booking />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/login" element={<Login />} />
                <Route path="/hotel/:id" element={<HotelDetails />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
