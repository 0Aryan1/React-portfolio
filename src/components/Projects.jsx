import { PROJECTS } from "../constants"
import {motion} from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { FiExternalLink } from 'react-icons/fi'


const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial = {{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">Projects</motion.h1>
        
        {/* Two Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
            {PROJECTS.map((project,index) => (
                <motion.div 
                key={index}
                whileInView={{opacity:1, y:0}}
                initial = {{opacity:0, y:50}}
                transition={{duration:0.5, delay: index * 0.1}}
                className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-purple-500 transition-all duration-300 flex flex-col">
                    
                    {/* Project Image */}
                    <div className="w-full h-48 overflow-hidden">
                        <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow">
                        {/* Title and Links */}
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                            <div className="flex items-center gap-3">
                                {project.github && (
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-purple-500 hover:text-purple-400 transition-colors"
                                        title="View Source Code"
                                    >
                                        <FiGithub className="text-xl" />
                                    </a>
                                )}
                                {project.demo && (
                                    <a 
                                        href={project.demo} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-purple-500 hover:text-purple-400 transition-colors"
                                        title="View Live Demo"
                                    >
                                        <FiExternalLink className="text-xl" />
                                    </a>
                                )}
                            </div>
                        </div>
                        
                        {/* Description */}
                        <p className="mb-4 text-neutral-400 text-sm leading-relaxed flex-grow">
                            {project.description}
                        </p>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech,index) => (
                                <span key={index} className="rounded bg-neutral-800 px-3 py-1 text-xs font-medium text-purple-400 border border-neutral-700">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Projects
