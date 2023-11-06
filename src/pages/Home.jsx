import React from 'react';
import Hero from '../components/Hero';
import Blog from './Blog';
import About from './About';
import Service from './Service';
import Project from './Project';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <Hero/>
            <Blog/>
            <About/>
            <Service/>
            <Project/>
            <Contact/>
        </>
    );
};

export default Home;