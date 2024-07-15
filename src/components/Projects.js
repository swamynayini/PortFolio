import React from 'react'

const Projects = () => {
  return (
    <div className='text-center'>
      <h1 className='text-3xl'>Projects*</h1>
      <div className='md:flex flex-col md:space-y-4 my-8'>
        
        <a className='text-red-500' href='https://github.com/swamynayini/YouTube'>
        project1
        </a>
        <h6 className='text-2xl'><span>★★★★★</span></h6>

        <a className='text-yellow-500' href='https://github.com/swamynayini/NetflixGPT'>
        project2
        </a>
        <h6 className='text-2xl'><span>★★★★★</span></h6>

        <a className='text-lime-500' href='https://github.com/swamynayini/InstagramApplication'>
        project3
        </a>

      </div>
    </div>
  )
}

export default Projects
