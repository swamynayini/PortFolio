import React from 'react'
import { GITHUB_LOGO, LINKEDIN_LOGO } from '../utils/constants'

const Resume = () => {
  const clickBtn = ()=>{
    window.location.href = "https://drive.google.com/file/d/1TNBxBDujI0Kn41PoreKoKYyk2H_sTGpb/view?usp=sharing" 
  }
  return (
    <div className='text-center'>
      <div>
      <h4 className="font-weight-bold">Hello, Its me</h4>
          <h2 className="font-weight-bold text-orange-500">Swamy Nayini</h2>
          <h4 className="font-weight-bold mb-4 pb-2 text-green-500">
            I'm a Web Developer
          </h4>
          <p className="font-weight-normal">
            I'm a Student. Insterested in Web Development and Freelancing
          </p>
          <div className='flex flex-col space-y-4 my-8'>
            <div className='md:ml-[39.5rem] mb-[-2.5rem]'>
            <img className='h-8 w-8  ' alt='logo' src={LINKEDIN_LOGO}/>
            </div>
            <a href='https://www.linkedin.com/in/swamy-nayini-930536151/'>
            linkedin
            </a>
            <div className='md:ml-[39.5rem] '>
              <img className='h-8 w-8 bg-white mb-[-2.5rem]' alt='logo' src={GITHUB_LOGO}/>
            </div>
            <a href='https://github.com/swamynayini'>
            github
            </a>
            <a href='https://www.linkedin.com/in/swamy-nayini-930536151/'>
            </a>
          </div>
          <button className='text-yellow-400' onClick={clickBtn}>
            Download Resume🫠
          </button>
      </div>
    </div>
  )
}

export default Resume
