import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Store from './pages/Store';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ByCategory from './pages/ByCategory';
import ShowProduct from './pages/ShowProduct';



function App() {
    return (
        <Router>

            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/store" element={<Store />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/categories/:category" element={<ByCategory />} />
                <Route path="/product/:id" element={<ShowProduct />} />
            </Routes>

        </Router>
    );
}

export default App;
