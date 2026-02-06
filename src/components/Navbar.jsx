import React, { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-amber-50/80 dark:bg-neutral-950/80 backdrop-blur-xl shadow-2xl shadow-amber-200/20 dark:shadow-purple-900/20 border-b border-amber-200/50 dark:border-neutral-800/50' 
        : 'bg-transparent'
    }`}>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='flex items-center justify-between py-5'>
          {/* Logo */}
          <div className='flex flex-shrink-0 items-center group'>
            <div className='relative'>
              <button 
                className='font-extrabold text-4xl lg:text-5xl bg-gradient-to-r from-amber-600 to-orange-600 dark:from-purple-400 dark:to-pink-500 bg-clip-text text-transparent 
                           group-hover:scale-110 transition-transform duration-300 cursor-pointer
                           hover:opacity-80 active:scale-95' 
                onClick={(e) => {
                  e.preventDefault()
                  console.log('Logo clicked!')
                  handleNavClick('hero')
                }}
                type="button"
              >
                Aa
              </button>
              <div className='absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-500 dark:from-purple-500 dark:to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none'></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-2'>
            <button 
              className='relative px-5 py-2.5 font-medium text-stone-700 dark:text-neutral-300
                         hover:text-stone-900 dark:hover:text-white
                         before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 
                         before:bg-gradient-to-r before:from-amber-600 before:to-orange-600 
                         dark:before:from-purple-400 dark:before:to-pink-500
                         before:scale-x-0 hover:before:scale-x-100
                         before:transition-transform before:duration-300 before:origin-left
                         transition-colors duration-300' 
              onClick={() => handleNavClick('about')}
            >
              About
            </button>
            <button 
              className='relative px-5 py-2.5 font-medium text-stone-700 dark:text-neutral-300
                         hover:text-stone-900 dark:hover:text-white
                         before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 
                         before:bg-gradient-to-r before:from-amber-600 before:to-orange-600 
                         dark:before:from-purple-400 dark:before:to-pink-500
                         before:scale-x-0 hover:before:scale-x-100
                         before:transition-transform before:duration-300 before:origin-left
                         transition-colors duration-300' 
              onClick={() => handleNavClick('projects')}
            >
              Projects
            </button>
            <button 
              className='relative px-5 py-2.5 font-medium text-stone-700 dark:text-neutral-300
                         hover:text-stone-900 dark:hover:text-white
                         before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 
                         before:bg-gradient-to-r before:from-amber-600 before:to-orange-600 
                         dark:before:from-purple-400 dark:before:to-pink-500
                         before:scale-x-0 hover:before:scale-x-100
                         before:transition-transform before:duration-300 before:origin-left
                         transition-colors duration-300' 
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </button>

            {/* Social Links */}
            <div className='flex items-center gap-3 ml-4 pl-4 border-l border-amber-300 dark:border-neutral-700'>
              <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'
                 className='text-stone-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-purple-400 
                           hover:scale-110 transition-all duration-300'>
                <FaLinkedin size={22} />
              </a>
              <a href='https://github.com' target='_blank' rel='noopener noreferrer'
                 className='text-stone-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-purple-400 
                           hover:scale-110 transition-all duration-300'>
                <FaGithub size={22} />
              </a>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'
                 className='text-stone-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-purple-400 
                           hover:scale-110 transition-all duration-300'>
                <FaInstagram size={22} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className='md:hidden text-stone-800 dark:text-neutral-200 hover:text-amber-600 dark:hover:text-purple-400 transition-colors'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className='px-6 py-4 bg-amber-100/95 dark:bg-neutral-900/95 backdrop-blur-xl border-t border-amber-200 dark:border-neutral-800'>
          <div className='flex flex-col gap-2'>
            <button 
              className='text-left px-4 py-3 font-medium text-stone-700 dark:text-neutral-300
                         hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 
                         dark:hover:from-purple-500 dark:hover:to-pink-500
                         hover:text-white rounded-lg transition-all duration-300' 
              onClick={() => handleNavClick('about')}
            >
              About
            </button>
            <button 
              className='text-left px-4 py-3 font-medium text-stone-700 dark:text-neutral-300
                         hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 
                         dark:hover:from-purple-500 dark:hover:to-pink-500
                         hover:text-white rounded-lg transition-all duration-300' 
              onClick={() => handleNavClick('projects')}
            >
              Projects
            </button>
            <button 
              className='text-left px-4 py-3 font-medium text-stone-700 dark:text-neutral-300
                         hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 
                         dark:hover:from-purple-500 dark:hover:to-pink-500
                         hover:text-white rounded-lg transition-all duration-300' 
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </button>
            
            {/* Mobile Social Links */}
            <div className='flex items-center gap-4 mt-4 pt-4 border-t border-amber-300 dark:border-neutral-700'>
              <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'
                 className='text-stone-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-purple-400'>
                <FaLinkedin size={24} />
              </a>
              <a href='https://github.com' target='_blank' rel='noopener noreferrer'
                 className='text-stone-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-purple-400'>
                <FaGithub size={24} />
              </a>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'
                 className='text-stone-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-purple-400'>
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
