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
            <h2 className="text-center mt-4 py-1" style={{color: "white", backgroundColor: "#1abc9ca4"}}>Some of my Articles</h2>
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