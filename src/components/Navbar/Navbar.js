import React from 'react';
import './Navbar.css';
import myResume from '../../resume/muradResume.pdf';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light menuBg" >
            <a className="navbar-brand text-white" href="/home">M</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link text-white" href="/home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/projects">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/blog">Blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/contact">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/resume">Resume</a>
                </li>
                <li className="nav-item">
                    <button className="btn btn-info"><Link to={myResume} target="_blank" download>Download Resume</Link></button>
                </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;