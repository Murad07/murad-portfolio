import React from 'react';
import creativeAgency from '../../images/creativeAgency.png';
import volunteer from '../../images/volunteer.png';
import emaJohn from '../../images/emaJohn.png';
import Project from './project';

const Projects = () => {
    const items = [
        {
            name: "Creative Agency",
            description: "A single page web application where people can order a service and Admin panel to create new service and manage customer order.",
            pic: creativeAgency,
            liveLink: "https://creative-agency-m.web.app/",
        },
        {
            name: "Volunteer Network",
            description: "Volunteer Network is a platform wher people can perticipate a volunteer activity. A admin panael can create new volunteer list and manage system.",
            pic: volunteer,
            liveLink: "https://volunteer-network-m.web.app/",
        },
        {
            name: "Ema John Ecommerce",
            description: "A single page ecommerce platform. Customer can add product to shopping cart, see order summery review, cancle and procced order.",
            pic: emaJohn,
            liveLink: "https://ema-jhon-m.web.app/",
        },
        
    ]
    return (
        <div className="container">
            <h2 className="text-center pt-4" style={{color: "#1B4F72"}}>Some of my Projects</h2>
            <div className="row pb-4">
                {
                    items.map((item, i) => 
                        <Project key={i} item={item}></Project>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;