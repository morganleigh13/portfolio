import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { experiences } from "../data";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => {

  return (
 
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--color-neutral)",
        color: "var(--color-neutral-content)",       
      }}
      contentArrowStyle={{ borderRight: "2px solid var(--color-primary)"}}
      date={experience.duration}
      iconStyle={{ background: "var(--color-base-100)"}}
      icon={
        <div className='flex justify-center items-center w-full h-full p-2 '>
          <img
            src={experience.icon}
            alt={experience.name}
            className='w-full h-full object-contain'
          />
        </div>
      }
    >
      <div className="vintage tracking-wider">
      <h4
          className='text-2xl text-primary font-bold text-center'
        >
         {experience.pos}
        </h4>
        <h4 className='text-accent-content text-xl font-bold indent-3'>{experience.title}</h4>
        <h4
          className='text-secondary text-xl font-semibold text-center'
         
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
  const { search } = useSelector((state) => state.animations);

  const filteredExperience = experiences.filter(exp =>  exp.name.toLowerCase().includes(search.toLowerCase()) ||  exp.pos.toLowerCase().includes(search.toLowerCase()) ||  exp.duration.toLowerCase().includes(search.toLowerCase()) || exp.title.toLowerCase().includes(search.toLowerCase()))

  return (
 
    <div id="experiance" className="bg-base-300 experiance-background rounded-xl">
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p> */}
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='flex flex-col'>
        {filteredExperience.length > 0 ? (

        <VerticalTimeline 
        lineColor="oklch(54.2% 0.034 322.5)">
          {filteredExperience.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline> ):  (
      <div className="text-4xl flex justify-center vintage py-5 text-warning animate-pulse"><p>There is no work experiance that meets that search criteria.</p></div>
      )}
      </div>
    </div>
   
        
  );
};

export default SectionWrapper(Experience, "work");

