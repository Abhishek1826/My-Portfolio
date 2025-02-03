import React, { useState, useEffect } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import { Animate } from "react-simple-animate";
import { Line } from "rc-progress";
import './styles5.scss'

const Skills = () => {
  const [progressValues, setProgressValues] = useState({});

  useEffect(() => {
    setTimeout(() => {
      const updatedProgress = {};
      skillsData.forEach((category) => {
        category.data.forEach((skill) => {
          updatedProgress[skill.skillName] = Number(skill.percentage); 
        });
      });
      setProgressValues(updatedProgress);
    }, 500); 
  }, []);

  return (
    <section id="skills" className="skills">
      <PageHeaderContent headerText="My Skills" icon={<BsInfoCircleFill size={40} />} />

      <div className="skills_content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="content-wrapper_inner-content">
            <Animate
              play
              duration={1}
              delay={0.5}
              start={{ transform: "translateX(-200px)" }}
              end={{ transform: "translateX(0px)" }}
            >
              <h3 className="content-wrapper_inner-content_category-text">{item.label}</h3>
              <div>
                {item.data.map((skillItem, j) => (
                  <div className="progressbar_wrapper" key={j}>
                    <p>{skillItem.skillName}</p>
                    <Line
                      percent={progressValues[skillItem.skillName] || 0} 
                      strokeWidth="3"
                      strokeColor="var(--yellow-theme-main-color)"
                      trailWidth="3"
                      strokeLinecap="round"
                      transition="1s ease-in-out" 
                    />
                  </div>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
