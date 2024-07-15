import React from 'react'
import { AVATAR_LOGO } from '../utils/constants'

const About = () => {
  return (
    <div>
      <div>
        <img className='rounded-full ' alt='logo' src={AVATAR_LOGO}/>
        
        <h1 className='font-bold text-3xl md:pl-[30rem] md:mt-[-21rem] text-fuchsia-700'>
          Swamy Nayini
        </h1>
        <h2 className='md:pl-[32rem] md:mt-[0.25rem] text-amber-400'>
           Front-end Developer!
        </h2>
        
        <p className='md:pl-[31rem] md:mt-1'>
          I'm a front-end developer eager to grow into Full-Stack
          Development. I'm skilled in HTML, CSS, Bootstrap, JavaScript, and 
          React with a keen interest in learning more. I'm committed to
          honing my abilities in these areas.
        </p>
        <p className="md:pl-[31rem]">
          If you're in need of a motivated front-end developer, I'm here and
          ready to contribute. I'm excited about opportunities to broaden my
          skills and make meaningful contributions to projects. Let's work
          together!
        </p>
        <button  className="button md:mt-3 md:mb-4 md:pl-[31rem]">Read More.......😉</button>
      </div>
    </div>
  )
}

export default About
