import React from 'react';
import Project from './Project';
import creativeAgency from '../../images/creativeAgency.png';
import volunteer from '../../images/volunteer.png';
import emaJohn from '../../images/emaJohn.png';
import hotG from '../../images/hotG.PNG';
import tV from '../../images/tV.PNG';

const Projects = () => {
    const items = [
        {
            name: "Creative Agency",
            features: [
                "User and Admin Login system using firebase.",
                "Users can select a service and make an order.",
                "Admin able to create new services.",
                "Admin can manage user orders."
            ],
            pic: creativeAgency,
            liveLink: "https://creative-agency-m.web.app/",
            client: "https://github.com/Murad07/creative-agency-client",
            server: "https://github.com/Murad07/creative-agency-server",
        },
        {
            name: "Volunteer Network",
            features: [
                "User and Admin Login system using firebase.",
                "Users can participate in a volunteer activity.",
                "Users can manage his volunteer list.",
                "Admin able to manage users activity."
            ],
            pic: volunteer,
            liveLink: "https://volunteer-network-m.web.app/",
            client: "https://github.com/Murad07/volunteer-network",
            server: "https://github.com/Murad07/volunteer-network-server",
        },
        {
            name: "Ema John Ecommerce",
            features: [
                "Customer Login System.",
                "Add to Card option",
                "Show customer order summary and calculate the total cost",
                "Order proceed and review system.",
            ],
            pic: emaJohn,
            liveLink: "https://ema-jhon-m.web.app/",
            client: "https://github.com/Murad07/ema-john-simple",
            server: "https://github.com/Murad07/ema-john-server",
        },
        {
            name: "Hot Gadgets",
            features: [
                "A ecommerce app using bootstrap",
                "Category of products",
                "Top products slide show on header section",
            ],
            pic: hotG,
            liveLink: "https://murad07.github.io/hot-gadgets/",
            client: "https://github.com/Murad07/hot-gadgets",
            server: "",
        },
        {
            name: "Travel Guru",
            features: [
                "A single page application provides online traveling package",
                "Location base hotel booking system",
                "Google map location",
            ],
            pic: tV,
            liveLink: "https://travel-guru-m.web.app/",
            client: "https://github.com/Murad07/travel-guru",
            server: "",
        },
    ]
    return (
        <div className="container mt-5">
            <h4 className="text-center pt-4">All of my Projects</h4>
            <div className="row">
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