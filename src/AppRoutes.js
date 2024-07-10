import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import About from './Components/View/About/About';
import Blog from './Components/View/Blog/Blog';
import Career from './Components/View/BlogDetails/BlogDetails';
import Contact from './Components/View/Contact/Contact';
import Home from './Components/View/Home/Home';
import Services from './Components/View/Services/Services';
import Footer from './Components/Footer/Footer';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/services' element={<Services />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/career' element={<Career />} />
                {/* <Route path='/footer1' element={<Footer1 />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRoutes;
