import React, { useState } from 'react'
import "./About.css";
const About = () => {
    const [active1,setActive1]=useState(false);
    const [active2,setActive2]=useState(false);
    const [active3,setActive3]=useState(false);
    const [active4,setActive4]=useState(false);
    return (
        <div className='Aboutbox'>
            <h1>Our Creative Team</h1>
            <div className='Aboutcontainer'>
                <div className='icon'>
                    <div className={active1?'imgBx active':'imgBx'} style={{ "--i": "1" }} onMouseOver={()=>{setActive1(true);setActive2(false);setActive3(false);setActive4(false);}}>
                        <img src="../about.png" alt=''></img>
                    </div>
                    <div className={active2?'imgBx active':'imgBx'} style={{ "--i": "2" }} onMouseOver={()=>{setActive2(true);setActive1(false);setActive3(false);setActive4(false);}}>
                        <img src="../about.png" alt=''></img>
                    </div>
                    <div className={active3?'imgBx active':'imgBx'} style={{ "--i": "3" }} onMouseOver={()=>{setActive3(true);setActive2(false);setActive1(false);setActive4(false);}}>
                        <img src="../about.png" alt=''></img>
                    </div>
                    <div className={active4?'imgBx active':'imgBx'} style={{ "--i": "4" }} onMouseOver={()=>{setActive4(true);setActive2(false);setActive3(false);setActive1(false);}}>
                        <img src="../about.png" alt=''></img>
                    </div>
                </div>
                <div className='content'>
                    <div className={active1?'contentBx active':'contentBx'} onMouseOver={()=>{setActive1(true);setActive2(false);setActive3(false);setActive4(false);}}>
                        <div className='card'>
                            <div className='imgBox'>
                                <img src="../about.png" alt=''></img>
                            </div>
                            <div className='textBx'>
                                <h2>Satyam Goyal</h2>
                                <h5>Team Lead</h5>
                            </div>
                        </div>
                    </div>
                    <div className={active2?'contentBx active':'contentBx'} onMouseOver={()=>{setActive2(true);setActive1(false);setActive3(false);setActive4(false);}}>
                        <div className='card'>
                            <div className='imgBox'>
                                <img src="../about.png" alt=''></img>
                            </div>
                            <div className='textBx'>
                                <h2>Sandeep</h2>
                                <h5>Admin UI Lead</h5>
                            </div>
                        </div>
                    </div>
                    <div className={active3?'contentBx active':'contentBx'} onMouseOver={()=>{setActive3(true);setActive2(false);setActive1(false);setActive4(false);}}>
                        <div className='card'>
                            <div className='imgBox'>
                                <img src="../about.png" alt=''></img>
                            </div>
                            <div className='textBx'>
                                <h2>Sambit Swarup</h2>
                                <h5>Scrum Master</h5>
                            </div>
                        </div>
                    </div>
                    <div className={active4?'contentBx active':'contentBx'} onMouseOver={()=>{setActive4(true);setActive2(false);setActive3(false);setActive1(false);}}>
                        <div className='card'>
                            <div className='imgBox'>
                                <img src="../about.png" alt=''></img>
                            </div>
                            <div className='textBx'>
                                <h2>Aswin Anna</h2>
                                <h5>Database All Rounder</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
