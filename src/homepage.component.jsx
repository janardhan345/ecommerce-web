import React from "react";

import './homepage.style.scss';

const Homepage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
             <div className='menu-item'>
                <div className='content'> 
                    <h1 className="title">HATS</h1>
                    <span className="subtitle">SHOP NOW</span> 
                </div>            
            </div>
            <div className='menu-item'>
                <div className='content'> 
                    <h1 className="title">JACKETS</h1>
                    <span className="subtitle">SHOP NOW</span> 
                </div>            
            </div>
            <div className='menu-item'>
                <div className='content'> 
                    <h1 className="title">SNEAKERS</h1>
                    <span className="subtitle">SHOP NOW</span> 
                </div>            
            </div>
            <div className='menu-item'>
                <div className='content'> 
                    <h1 className="title">WOMENS'S</h1> 
                    <span className="subtitle">SHOP NOW</span> 
                </div>            
            </div>
            <div className='menu-item'>
                <div className='content'> 
                    <h1 className="title">MEN'S</h1>
                    <span className="subtitle">SHOP NOW</span> 
                </div>            
            </div>
        </div> 
    </div>  
);
export default Homepage;