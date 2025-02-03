import React, { useState } from "react";
import {FaBars, FaReact } from 'react-icons/fa';
import { Link } from "react-router-dom";
import{HiX} from 'react-icons/hi';
import './styles.scss';



const data = [
    {
        label: 'Home',
        to: '/'
    },

    {
        label: 'About',
        to: '/about'
    },

    {
        label: 'Resume',
        to: '/resume'
    },

    {
        label: 'Skills',
        to: '/skills'
    },

    {
        label: 'Portfolio',
        to: '/portfolio'
    },

    {
        label: 'Contact',
        to: '/contact'
    }
]

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)
    }
    return (
        <div>
            <nav className="navbar">
                <div className="nav_container">

                    <Link to={'/'} className="navbar_container_logo">
                        <FaReact size={30} />
                    </Link>
                </div>

                <ul className={`nav_container_menu ${toggleIcon ? "active" : ""}`}>
                    {
                        data.map((item, key) => (
                            <li key={key} className="nav_container_menu_item">
                                <Link className="nav_container_menu_item_links" to={item.to}>
                                    {item.label}
                                </Link>

                            </li>
                        ))
                    }
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>
        </div>
    )

}
export default Navbar;