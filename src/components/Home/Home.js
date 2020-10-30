import React from 'react';
import Blogs from './Blogs';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;