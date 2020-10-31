import React from 'react';

const Project = ({item}) => {
    const features = item.features;
    return (
        <div className="col-md-4 col-sm-6 pt-4">
            <div className="card" style={{backgroundColor: "#ffffffc2"}}>
                <img src={item.pic} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <ul>
                        {
                            features.map((feature) => 
                            <li>{feature}</li>
                            )
                        }
                    </ul>
                    <a href={item.liveLink} className="btn btn-outline-success mr-3">Live</a>
                    <a href={item.client} className="btn btn-outline-success mr-3">Client</a>
                    {
                        (item.server !== "") && <a href={item.server} className="btn btn-outline-success">Server</a>
                    }
                </div>
            </div>
        </div>
    );
};

export default Project;