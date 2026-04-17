import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { experiences } from "../data";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--color-accent)",
        color: "var(--color-accent-content)",
      }}
      contentArrowStyle={{ borderRight: "2px solid var(--color-primary)" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[80%] h-[70%] object-contain'
          />
        </div>
      }
    >
      <div className="vintage tracking-wider">
      <h2
          className='text-2xl font-bold text-center'
        >
         Position: {experience.pos}
        </h2>
        <h3 className='text-white text-xl font-bold'>{experience.title}</h3>
        <h4
          className='text-accent-content text-xl font-semibold text-center'
         
        >
          {experience.name}
        </h4>
      </div>

      {/* <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul> */}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="bg-base-300">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");

