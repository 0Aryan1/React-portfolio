import { EXPERIENCES } from "../constants"
import {motion} from 'framer-motion'
import { useState } from 'react'


const Experience = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="border-b border-amber-200/80 dark:border-neutral-900 pb-16">
      <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial = {{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl font-bold text-amber-900 dark:text-neutral-100">
        Experience
      </motion.h1>
      
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-amber-300/50 dark:bg-neutral-800 transform md:-translate-x-1/2"></div>
        
        {EXPERIENCES.map((experience, index) => (
          <motion.div 
            key={index}
            whileInView={{opacity:1, y:0}}
            initial = {{opacity:0, y:50}}
            transition={{duration:0.8, delay: index * 0.2}}
            className="relative mb-12 md:mb-16"
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-amber-600 dark:bg-purple-500 rounded-full border-4 border-amber-100 dark:border-neutral-900 transform -translate-x-1/2 z-10 shadow-lg"></div>
            
            {/* Content Card */}
            <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
              <div className="bg-amber-50/50 dark:bg-neutral-900/50 rounded-xl border-2 border-amber-200/80 dark:border-neutral-800 p-6 hover:shadow-xl hover:shadow-amber-900/10 dark:hover:shadow-none transition-all duration-300 backdrop-blur-sm">
                {/* Year Badge */}
                <div className="inline-block mb-3 px-4 py-1.5 bg-amber-200/70 dark:bg-neutral-800 rounded-full border border-amber-300/60 dark:border-neutral-700">
                  <p className="text-sm font-semibold text-amber-900 dark:text-neutral-300">{experience.year}</p>
                </div>
                
                {/* Role and Company */}
                <h6 className="mb-2 text-xl font-semibold text-amber-900 dark:text-neutral-100">
                  {experience.role}
                </h6>
                <p className="mb-3 text-base font-medium text-amber-700 dark:text-purple-400">
                  {experience.company}
                </p>
                
                {/* Description */}
                <ul className="mb-4 space-y-2">
                  {Array.isArray(experience.description) ? (
                    <>
                      {experience.description.slice(0, expandedCards[index] ? experience.description.length : 2).map((point, idx) => (
                        <li key={idx} className="text-stone-700 dark:text-neutral-400 leading-relaxed flex">
                          <span className="text-amber-600 dark:text-purple-400 mr-2 mt-1.5 flex-shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </>
                  ) : (
                    <li className="text-stone-700 dark:text-neutral-400 leading-relaxed">
                      {experience.description}
                    </li>
                  )}
                </ul>

                {/* Read More Button */}
                {Array.isArray(experience.description) && experience.description.length > 2 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mb-4 text-sm font-medium text-amber-700 dark:text-purple-400 hover:text-amber-600 dark:hover:text-purple-300 transition-colors flex items-center gap-1"
                  >
                    {expandedCards[index] ? (
                      <>
                        Show Less
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </>
                    ) : (
                      <>
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    )}
                  </button>
                )}
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="rounded-md bg-amber-200/70 dark:bg-neutral-800 px-3 py-1.5 text-xs font-medium text-amber-900 dark:text-neutral-300 border border-amber-300/60 dark:border-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience
