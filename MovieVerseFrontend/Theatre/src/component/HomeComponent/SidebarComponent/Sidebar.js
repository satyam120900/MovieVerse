import React, { useState } from 'react';
import {
    FaBars,
    FaHome
} from "react-icons/fa";
import { MdLiveHelp } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import {SiMinutemailer} from "react-icons/si";
import { NavLink } from 'react-router-dom';
import "./Sidebar.css"
import { Route, Routes } from 'react-router-dom';
import About from '../AboutComponent/About';
import Help from '../HelpComponent/Help';
import HomeContent from "../HomeContent/HomeContent"
import ContactUs from '../ContactUs/ContactUs';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/home",
            name: "Home",
            icon: <FaHome />
        },
        {
            path: "/help",
            name: "Help",
            icon: <MdLiveHelp />
        },
        {
            path: "/about",
            name: "About Us",
            icon: <FcAbout />
        },{
            path: "/contact",
            name: "Contact Us",
            icon: <SiMinutemailer/>
        }
    ]
    return (
        <div>
            <div className="Sidebarbox">
                <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
                    <div className="top_section">
                        <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">DashBoard</h1>
                        <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeclassname="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
                <div className='children' >
                    <Routes>
                        <Route path="/home" element={<HomeContent></HomeContent>}></Route>
                        <Route path="help" element={<Help></Help>}></Route>
                        <Route path="about" element={<About></About>}></Route>
                        <Route path="contact" element={<ContactUs></ContactUs>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;