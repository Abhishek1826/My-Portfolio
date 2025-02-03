import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiMysql } from 'react-icons/si';
import './styles2.scss'

const About = () => {

    const personalDetails = [
        {
            label: "Name",
            value: "Abhishek Shukla"
        },
        {
            label: "Age",
            value: "27"
        },
        {
            label: "Address",
            value: "Prayagraj, Uttar Pradesh"
        },
        {
            label: "Email",
            value: "abhishek18697@gmail.com"
        },
        {
            label: "Mobile",
            value: 8551866162
        },
        {
            label: "Linkedin",
            value: "https://www.linkedin.com/in/abhishek-shukla-154476231/"
        },
        {
            label: "Github",
            value: "https://github.com/Abhishek1826"
        },

    ]

    const jobSummary = "Motivated MERN Stack Developer skilled in building responsive web applications with ReactJS, Node.js, Express, and MongoDB. Experienced in creating intuitive user interfaces, scalable back-end systems, and delivering high-performance solutions. Passionate about solving complex problems and staying updated with the latest technologies to build impactful applications."
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="about_content">

                <div className="about_content_details">
                    <Animate
                        play
                        duration={1.5}
                        delay={0.5}
                        start={{
                            transform: 'translateX(-900px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}>

                        <h3>MERN Stack Developer</h3>
                        <p>{jobSummary}</p>

                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={0.5}
                        start={{
                            transform: 'translateX(500px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}>

                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            <ul>
                                {personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))}
                            </ul>

                        </ul>
                    </Animate>
                </div>

                <div className="about_content_services">

                <Animate
                        play
                        duration={1.5}
                        delay={0.5}
                        start={{
                            transform: 'translateX(600px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}>

                    <div className="services_inner_content">
                    <div>
                        <SiReact size={60} color="var(--yellow-theme-main-color)" />
                    </div>
                    <div>
                        <SiMongodb size={60} color="var(--yellow-theme-main-color)" />
                    </div>
                    <div>
                        <SiMysql size={80} color="var(--yellow-theme-main-color)" />
                    </div>
                    <div>
                        <SiExpress size={60} color="var(--yellow-theme-main-color)" />
                    </div>
                    <div>
                        <SiNodedotjs size={60} color="var(--yellow-theme-main-color)" />
                    </div>
                    </div>
                    </Animate>

                </div>

            </div>
        </section>
    )
}
export default About;