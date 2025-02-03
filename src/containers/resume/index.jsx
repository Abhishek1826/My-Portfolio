import React from "react";
import {  BsInfoCircleFill } from "react-icons/bs"; // Import icons
import PageHeaderContent from "../../components/pageHeaderContent";
import { resumeData } from "./utils.js"; // ✅ Ensure correct import
import './styles3.scss';

const Resume = () => {
  // ✅ Access experience & education from resumeData
  const experienceData = resumeData.experience || [];
  const educationData = resumeData.education || [];

  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="timeline">
        <div className="timeline__section">
          {/* Header container for experience and education */}
          <div className="timeline__section__headers">
            <h3 className="timeline__experience__header_text">Experience</h3>
            <h3 className="timeline__education__header_text">Education</h3>
          </div>

          {/* Content for experience and education */}
          <div className="timeline__content">
            {/* Experience Section */}
            <div className="timeline__content__section">
              {experienceData.map((item, i) => (
                <div key={i} className="timeline__item">
                  <div className="timeline__item__content">
                    <h3 className="timeline__item__title">{item.title}</h3>
                    <h4 className="timeline__item__subtitle">{item.subtitle}</h4>
                    <p className="timeline__item__description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Section */}
            <div className="timeline__content__section">
              {educationData.map((item, i) => (
                <div key={i} className="timeline__item">
                  <div className="timeline__item__content">
                    <h3 className="timeline__item__title">{item.title}</h3>
                    <h4 className="timeline__item__subtitle">{item.subtitle}</h4>
                    <p className="timeline__item__description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
