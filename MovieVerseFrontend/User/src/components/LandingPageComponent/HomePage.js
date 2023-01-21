import React from 'react'
import './HomePage.css'
import "bootstrap/dist/css/bootstrap.css"
const HomePage = (props) => {
    
    return (
        <div className='body'>
            <div className='container maint-cnt'>
                <div className="header-nav">
                    <span className="mytext1">Movie Verse</span>
                </div>
            </div>
            <div  className='button'>
                <a href='/login'  className="mainBtn">
                    <svg width="277" height="62">
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%"  stopColor="#45f3ff"/>
                                <stop offset="100%" stopColor="#45f3ff"  />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="260" height="45"></rect>
                    </svg>
                    <span className='LandingPageSpan'>Get Started!</span>
                </a>
            </div>
        </div>
    )
}

export default HomePage
