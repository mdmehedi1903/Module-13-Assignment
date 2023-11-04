import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Service from './pages/Service';
import Undefine from './pages/Undefine';
import AppNav from './components/AppNav';


const App = () => {
  return (
    <div>
        <BrowserRouter>
        <AppNav/>
          <Routes>
              <Route path='/' element={<Home/>}/> 
              <Route path='/about' element={<About/>}/> 
              <Route path='/blog' element={<Blog/>}/> 
              <Route path='/contact' element={<Contact/>}/> 
              <Route path='/project' element={<Project/>}/> 
              <Route path='/service' element={<Service/>}/> 
              <Route path='*' element={<Undefine/>}/> 
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;