import React from 'react';
import proPic from '../../images/logo.JPG';
import './project.css';

const Header = () => {
    return (
        <div style={{backgroundColor: '#1B4F72'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 pt-4 my-auto">
                        <h2 className="text-white">I am Mohammad Murad Hossain</h2>
                        <p className="text-white">I am a React Js Developer. Completed several web application and android game. I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles.</p>
                        <span>React Js</span>
                        <span>Node Js</span>
                        <span>JavaScript</span>
                        <span>MongoDB</span>
                        <span>Bootstrap</span>
                    </div>
                    <div className="col-md-4 col-sm-6 py-4">
                        <img style={{borderRadius:'50%'}} src={proPic} class="img-fluid" alt="Responsive image"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;