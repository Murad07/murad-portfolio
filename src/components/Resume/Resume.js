import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="container py-4">
            <div className="row ">
                <div className="col-sm-6 mt-auto">
                    <h2>Mohammad</h2>
                    <h2>Murad Hossain</h2>
                </div>
                <div className="col-sm-6">
                    <p className="leftT m-0">Mobile: +8801927574610</p>
                    <p className="leftT m-0">Email: murad.pi22@gamil.com</p>
                    <p className="leftT m-0" ><a  href="https://github.com/Murad07">Github</a></p>
                    <p className="leftT m-0"><a  href="www.linkedin.com/in/murad-hossain-6a12b212a">LinkedIn</a></p>
                </div>
            </div>
            <hr/>
            <p>Web Application and Game Developer with considerable training in MERN Stack and ActionScript 3.</p>
            <div className="pt-3">
                <h3>SKILLS</h3>
                <p> - <b>Experience:</b>  React Js  JavaScript  Material UI  Bootstrap  HTML 5  CSS  Node Js  MongoDB  React Router  Firebase  ActionScript 3.</p>
                <p> - <b>Comfortable:</b>  Express Js  Redux  Laravel  NativeScript Vue  WordPress.</p>
                <p> - <b>Familiar:</b>  Sass  Java  MySQL  Python  Box2d</p>
                <p> - <b>Tools and Others:</b> Vs Code, GitHub, Adobe Flash, Trello, Figma, Adobe XD.</p>
            </div>

            <div className="pt-3">
                <h3>PROJECTS</h3>
                <ul>
                    <li>
                        <h5>Creative Agency</h5>
                        <p>
                            - Design landing page with an animated card of service offered by the agency. <br/>
                            - User and Admin Login system using firebase. <br/>
                            - Users can select a service and then manage it from the user panel. <br/>
                            - Users also make a review and it will show on the landing page review section. <br/>
                            - Make an admin panel for manage Order, create new service and assign new admin. <br/>
                            
                            <a href="https://creative-agency-m.web.app/">- Live Site</a> <br/>
                            <a href="https://github.com/Murad07/creative-agency-client">- Client Source Code</a> <br/>
                            <a href="https://github.com/Murad07/creative-agency-server">- Server Source Code</a>
                        </p>
                    </li>
                    <li>
                        <h5>Volunteer Network</h5>
                        <p>
                            - Make a home page with all volunteer services, fetch all data from the database. <br/>
                            - Users can participate in a volunteer activity by Sign In and manage his/her activity. <br/>
                            - Admin is able to add new volunteer services and manage User activity. <br/>

                            <a href="https://volunteer-network-m.web.app/">- Live Site</a> <br/>
                            <a href="https://github.com/Murad07/volunteer-network">- Client Source Code</a> <br/>
                            <a href="https://github.com/Murad07/volunteer-network-server">- Server Source Code</a>
                        </p>
                    </li>
                    <li>
                        <h5>Ema Johm</h5>
                        <p>
                            - Load products from the database. <br/>
                            - Add to cart functionality. <br/>
                            - Order summary, order review and procced order option. <br/>
                            - Customer Login system. <br/>
                            - Simple inventory form. <br/>

                            <a href="https://ema-jhon-m.web.app/">- Live Site</a> <br/>
                            <a href="https://github.com/Murad07/ema-john-simple">- Client Source Code</a> <br/>
                            <a href="https://github.com/Murad07/ema-john-server">- Server Source Code</a>
                        </p>
                    </li>
                </ul>

                <div className="pt-3">
                    <p>
                        <b>Frontend:</b> HTML, CSS, Bootstrap, React Js, React Spring, React Router, JWT token, firebase. <br/>
                        <b>Backend:</b> Node Js, Express Js. <br/>
                        <b>Database:</b> MongoDB.
                    </p>
                </div>
                
            </div>

            <div className="pt-3">
                <h3>EXPERIENCE</h3>
                <h5>SOFTWARE DEVELOPER (PART-TIME) | 3SPIRE | 2018 - 2019</h5>
                <li>Develop online service provider applications with the team. Worked on Frontend part using HTML, CSS,
Bootstrap, Laravel, Laravel Gattext, and MySQL.</li>

                <h5 className="pt-3">GAME DEVELOPER | HAMZA GAMES | 2017 - 2020</h5>
                <li>Design and develop Mobile games in ActionScript 3.</li>
                <li>Tools: Adobe Flush, Adobe Photoshop, Box2D.</li>
                <li>Live Link: <a href="https://play.google.com/store/apps/details?id=air.doodlemonkeyjump">Kids Doodle Army Jump</a></li>
            </div>

            <div className="pt-3">
                <h3>EDUCATIO</h3>
                <h5>B.SC IN COMPUTER SCIENCE AND ENGINEERING | 2014 | UNIVERSITY OF DEVELOPMENT ALTERNATIVE</h5>
                <li>CGPA – 3.5 out of 4</li>
            </div>
        </div>
    );
};

export default Resume;