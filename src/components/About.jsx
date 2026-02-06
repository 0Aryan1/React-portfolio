import {ABOUT_TEXT} from '../constants'
import aboutImg from '../assets/about.jpg'
import {motion} from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const About = () => {
  return (
    <div className='border-b border-amber-200/30 dark:border-neutral-900 pb-20'>
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-5xl font-bold"
        >
            About
            <span className='bg-gradient-to-r from-amber-600 to-orange-600 dark:from-purple-400 dark:to-pink-500 bg-clip-text text-transparent'> Me</span>
        </motion.h2> 
        <div className="flex flex-wrap items-center">
            <motion.div 
              whileInView = {{opacity:1, x:0}}
              initial = {{opacity:0, x:-100}}
              transition={{duration:0.6}}
              className="w-full lg:w-1/2 lg:p-8">
               <div className="flex items-center justify-center">
                <div className="relative">
                  
                  <img 
                    className='relative rounded-2xl shadow-2xl border-4 border-amber-200 dark:border-neutral-800' 
                    width={400} 
                    height={400} 
                    src={aboutImg} 
                    alt="about image" 
                  />
                </div>
               </div>
            </motion.div>
            <motion.div
             whileInView = {{opacity:1, x:0}}
             initial = {{opacity:0, x:100}}
             transition={{duration:0.6}}
             className="w-full lg:w-1/2">
                 <div className="flex justify-center lg:justify-start">
                    <div className="max-w-xl">
                      <p className='text-lg leading-relaxed text-stone-700 dark:text-neutral-300 font-light'>
                        {ABOUT_TEXT.split('. ').map((sentence, index) => (
                          <motion.span
                            key={index}
                            whileInView={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="block mb-4"
                          >
                            {sentence}{index < ABOUT_TEXT.split('. ').length - 1 ? '.' : ''}
                          </motion.span>
                        ))}
                      </p>

                      <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mt-6 flex gap-4 text-2xl"
                      >
                        <a 
                          href="https://www.linkedin.com/in/aryan-aagrawal/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-amber-600 dark:text-purple-400 hover:text-amber-700 dark:hover:text-purple-300 transition-colors"
                        >
                          <FaLinkedin />   
                        </a>
                        <a 
                          href="https://github.com/0Aryan1" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-amber-600 dark:text-purple-400 hover:text-amber-700 dark:hover:text-purple-300 transition-colors"
                        >
                          <FaGithub />
                        </a>
                       
                      </motion.div>
                      
                      <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-8 flex flex-wrap gap-3"
                      >
                        {['Problem Solver', 'Team Player', 'Fast Learner'].map((tag) => (
                          <span 
                            key={tag}
                            className="px-4 py-2 bg-amber-100 dark:bg-neutral-800 text-amber-700 dark:text-purple-400 rounded-full text-sm font-medium border border-amber-200 dark:border-neutral-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>

                      
                    </div>
                 </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
