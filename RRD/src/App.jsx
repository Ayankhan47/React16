import React from 'react';
import {Route, Routes} from 'react-router';
import Home from './pages/home';
import About from './pages/about';
import Product from './pages/product';
import Contact from './pages/contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Nav from './components/nav.jsx';
import Details from './pages/Details.jsx';
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='/Product/:id' element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
