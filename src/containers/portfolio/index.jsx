import React, { useState } from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import './styles.scss';

// Import images correctly
import image1 from "./image1.avif";
import image2 from "./image2.avif";
import image3 from "./image3.avif";
import image4 from "./image4.avif";
import image5 from "./image5.avif";
import image6 from "./image6.avif";

const portfolio = [
    { id: 2, title: "Nuuk WebApp", image: image5, link: 'https://codepen.io/ledkuuwy-the-bold/pen/JjVOGwN' },
    { id: 2, title: "Login Page like Twitter", image: image3, link: 'https://codepen.io/ledkuuwy-the-bold/pen/ExzxZOB' },
    { id: 2, title: "jQuery Countdown Clock", image: image2, link: 'https://github.com/Abhishek1826/JQUERY-COUNTDOWN-METER-PROJECT' },
    { id: 3, title: "Chat WebApp using Nodejs", image: image6, link: 'https://drive.google.com/drive/folders/1DufXL0XFUC-5xEHlYSaZGr9PgcF-em3X?usp=drive_link' },
    { id: 2, title: "Pharmacy Management App", image: image6, link: 'https://github.com/Abhishek1826/Pharmacy-Management-app' },
    { id: 2, title: "Pharmacy Admin App", image: image6, link: 'https://github.com/Abhishek1826/Pharmacy-Admin-application' },
    { id: 3, title: "Basic Player App using Nodejs", image: image5, link: 'https://drive.google.com/drive/folders/11qH7484a-wlFZCCCO_4S_ZWTTD4ga7Z6?usp=drive_link' },
    { id: 3, title: "Admin Panel", image: image1, link: 'https://github.com/Abhishek1826/Admin-Panel' },
    { id: 2, title: "jQuery Flipbook Gallery", image: image3, link: 'https://github.com/Abhishek1826/jquery-flipbook' },
    { id: 2, title: "E-COMMERCE APP", image: image6, link: 'https://github.com/Abhishek1826/E-Commerce-Website' },
    { id: 2, title: "Quiz App", image: image2, link: 'https://codepen.io/ledkuuwy-the-bold/pen/rNbEeoR' },
    { id: 3, title: "YouTube-Inspired Gallery", image: image3, link: 'https://github.com/Abhishek1826/Youtube-static-page' },
    { id: 3, title: "Game Rental E-Commerce app using Nodejs", image: image3, link: '#' },
    { id: 3, title: "Movies Website using Nodejs", image: image4, link: 'https://github.com/Abhishek1826/Movies-Website' },
    { id: 2, title: "Bootstrap-Crafted Coder's Guide Blog", image: image1, link: 'https://github.com/Abhishek1826/Coders-Guide-BootstrapP1' },
    
    
];

const filterData = [
    { filterId: 1, label: "All" },
    { filterId: 2, label: "FrontEnd" },
    { filterId: 3, label: "Backend" }
];

const Portfolio = () => {
    const [filteredValue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);

    function handleFilter(currentId) {
        setFilteredValue(currentId);
    }

    function handleHover(index) {
        setHoveredValue(index);
    }

    const filteredPortfolio = filteredValue === 1
        ? portfolio
        : portfolio.filter(item => item.id === filteredValue);

    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {filterData.map(item => (
                        <li
                            key={item.filterId}
                            className={filteredValue === item.filterId ? "active" : ""}
                            onClick={() => handleFilter(item.filterId)}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>

                <div className="portfolio__content__cards">
                    {filteredPortfolio.map((item, index) => (
                        <div 
                            className="portfolio__content__cards__items" 
                            key={`cardItems${item.id}${item.title.trim()}`}
                            onMouseEnter={() => handleHover(index)} 
                            onMouseLeave={() => handleHover(null)}
                        >
                            <div className="portfolio__content__cards__image-wrapper">
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <img src={item.image} alt={item.title} />
                                    <div className={`overlay ${index === hoveredValue ? 'active' : ''}`}>
                                        <div>
                                            <p className="typing-effect">{item.title}</p>
                                            <button onClick={() => window.open(item.link, "_blank")}>Visit</button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
