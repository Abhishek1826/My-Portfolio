import React from "react";
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import './styles.scss';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigateToContactPage = () => {
        navigate('/contact');
    };

    return (
        <section id="home" className="home">
            <div className="home_text-wrapper">
                <h1>
                    Hello, I'm Abhishek Shukla
                    <br />
                    MERN Stack Developer
                </h1>
                <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform: 'translateY(550px)'
                    }}
                    end={{
                        transform: 'translateX(0px)'
                    }}
                >
                    <div className="hire_contactme">
                        <button onClick={handleNavigateToContactPage}>Hire Me</button>
                        <a href="/AbhishekResume.pdf" download="Abhishek-Shukla-Resume.pdf">
                            <button>Download Resume</button>
                        </a>
                    </div>
                </Animate>
            </div>
        </section>
    );
};

export default Home;
