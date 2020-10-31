import React from 'react';
import linkedinIcon from '../../images/linkedinIcon.png';
import gitIcon from '../../images/gitIcon.png';

const Footer = () => {
    return (
        <div className="headerBg">
            <div className="container pb-1 pt-4">
                <div className="text-center">
                    <button className="btn btn-primary"><a className="text-white" href="https://drive.google.com/file/d/1W6qKPLEH2_wgVAi7cIFDV2ZrOXNLSKh-/view">Download Resume</a></button>
                    <p className="pt-3 text-white">Design and Develop by Murad Hossain</p>
                    <div className="my-2">
                            <a href="https://www.linkedin.com/in/murad-hossain-6a12b212a"><img height="40px" src={linkedinIcon} alt=""/></a>
                            <a href="https://github.com/Murad07"><img height="53px" src={gitIcon} alt=""/></a>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;