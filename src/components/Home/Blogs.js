import React from 'react';
import Blog from './Blog';

const Blogs = () => {
    const items =[
        {
            name: "Coming Soon!"
        },
        {
            name: "Coming Soon!"
        },
        {
            name: "Coming Soon!"
        }
    ]
    return (
        <div className="container">
            <h2 className="text-center pt-4" style={{color: "#1B4F72"}}>Some of my Articles</h2>
            <div className="row pb-4">
                {
                    items.map((item, i) => 
                        <Blog key={i} item={item}></Blog>
                    )
                }
            </div>
        </div>
    );
};

export default Blogs;