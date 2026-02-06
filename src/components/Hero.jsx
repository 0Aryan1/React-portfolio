import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 min-h-screen flex items-center justify-center pb-8">
      <div className="flex flex-wrap w-full items-center justify-center gap-8 lg:gap-12 max-w-7xl mx-auto px-4">
        <div className="w-full lg:w-5/12">
          <div className="flex flex-col items-center lg:items-start justify-center">
            <motion.h1
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-center lg:text-left mb-8 leading-tight"
            >
              <span className="block text-stone-800 dark:text-neutral-200">
                BUILDING
              </span>
              <span className="block bg-gradient-to-r from-amber-600 to-orange-600 dark:from-purple-400 dark:to-pink-500 bg-clip-text text-transparent">
                DIGITAL
              </span>
              <span className="block text-stone-800 dark:text-neutral-200">
                EXPERIENCES
              </span>
            </motion.h1>

            {/* <motion.span
              variants={container(0.5)}
              initial='hidden'
              animate='visible'
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Web Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial='hidden'
              animate='visible'
              className='my-2 max-w-xl py-6 font-light '
            >
              {HERO_CONTENT}
            </motion.p> */}
          </div>
        </div>

        <div className='w-full lg:w-5/12'>
          <div className="flex justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative w-full max-w-lg"
            >
              {/* Code Editor Window */}
              <div className="bg-amber-50/80 dark:bg-neutral-900/80 rounded-xl border-2 border-amber-200 dark:border-neutral-800 shadow-2xl backdrop-blur-sm overflow-hidden">
                {/* Editor Header */}
                <div className="h-10 bg-amber-200/60 dark:bg-neutral-800/60 flex items-center justify-between px-4 border-b border-amber-300 dark:border-neutral-700">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs font-mono text-amber-800 dark:text-neutral-400">portfolio.jsx</div>
                  <div className="w-12"></div>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm space-y-3">
                  {/* Line 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-amber-400 dark:text-neutral-500 select-none">1</span>
                    <span className="text-purple-600 dark:text-purple-400">const</span>
                    <span className="text-amber-800 dark:text-blue-300">developer</span>
                    <span className="text-amber-600 dark:text-neutral-400">=</span>
                    <span className="text-amber-600 dark:text-neutral-400">{"{"}</span>
                  </motion.div>

                  {/* Line 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="flex items-center gap-2 pl-6"
                  >
                    <span className="text-amber-400 dark:text-neutral-500 select-none">2</span>
                    <span className="text-amber-800 dark:text-blue-300">name:</span>
                    <span className="text-green-600 dark:text-green-400">'Aryan Agrawal'</span>
                    <span className="text-amber-600 dark:text-neutral-400">,</span>
                  </motion.div>

                  {/* Line 3 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className="flex items-center gap-2 pl-6"
                  >
                    <span className="text-amber-400 dark:text-neutral-500 select-none">3</span>
                    <span className="text-amber-800 dark:text-blue-300">skills:</span>
                    <span className="text-amber-600 dark:text-neutral-400">{"["}</span>
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-green-600 dark:text-green-400"
                    >
                      'React', 'Node', 'MongoDB'
                    </motion.span>
                    <span className="text-amber-600 dark:text-neutral-400">{"]"}</span>
                    <span className="text-amber-600 dark:text-neutral-400">,</span>
                  </motion.div>

                  {/* Line 4 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    className="flex items-center gap-2 pl-6"
                  >
                    <span className="text-amber-400 dark:text-neutral-500 select-none">4</span>
                    <span className="text-amber-800 dark:text-blue-300">passion:</span>
                    <span className="text-green-600 dark:text-green-400">'Building amazing web apps'</span>
                    <span className="text-amber-600 dark:text-neutral-400">,</span>
                  </motion.div>

                  {/* Line 5 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                    className="flex items-center gap-2 pl-6"
                  >
                    <span className="text-amber-400 dark:text-neutral-500 select-none">5</span>
                    <span className="text-amber-800 dark:text-blue-300">hireable:</span>
                    <span className="text-orange-600 dark:text-orange-400">true</span>
                  </motion.div>

                  {/* Line 6 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-amber-400 dark:text-neutral-500 select-none">6</span>
                    <span className="text-amber-600 dark:text-neutral-400">{"}"}</span>
                  </motion.div>
                </div>

                {/* Terminal Section */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                  className="bg-amber-100/50 dark:bg-neutral-950/50 border-t-2 border-amber-300 dark:border-neutral-800 p-4 font-mono text-xs"
                >
                  <div className="text-amber-700 dark:text-green-400">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.4 }}
                    >
                      $ npm run build
                    </motion.span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.6 }}
                    className="text-green-600 dark:text-green-400 mt-2"
                  >
                    ✓ Build successful! Ready to create magic ✨
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -z-10 inset-0">
                {[
                  { text: "</>" , x: "-left-8", y: "top-8", delay: 1.5 },
                  { text: "{}", x: "-right-8", y: "top-20", delay: 1.8 },
                  { text: "( )", x: "-left-6", y: "bottom-20", delay: 2.1 },
                  { text: "[ ]", x: "-right-6", y: "bottom-8", delay: 2.4 }
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 1, 1],
                      scale: [0, 1.2, 1],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 1,
                      delay: badge.delay,
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                    }}
                    className={`absolute ${badge.x} ${badge.y} w-12 h-12 bg-amber-300/30 dark:bg-purple-500/30 rounded-lg flex items-center justify-center text-amber-700 dark:text-purple-400 font-bold text-lg backdrop-blur-sm border border-amber-400/50 dark:border-purple-500/50`}
                  >
                    {badge.text}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero