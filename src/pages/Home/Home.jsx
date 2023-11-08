import React from 'react';
import Hero from './Hero';
import Blog from '../Blog';
import About from '../About';
import Service from '../Services/MainPage';
import Project from '../Project';
import Contact from '../Contact';
import Admin from './Admin';
import InputAlert from './InputAlert';

const Home = () => {
    return (
        <>
            <Hero/>
            <Admin/>
            <InputAlert/>
        </>
    );
};

export default Home;