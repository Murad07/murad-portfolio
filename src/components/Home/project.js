import React from 'react';
import './project.css';
import {useSpring, animated} from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Project = ({item}) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <div className="col-md-4 pt-4">
            <a href={item.liveLink} className='serviceLink'>
                <animated.div className="serviceCard" 
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys.interpolate(trans) }}
                >
                    <div className="card" >
                        <img src={item.pic} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </animated.div>
            </a>
        </div>
    );
};

export default Project;