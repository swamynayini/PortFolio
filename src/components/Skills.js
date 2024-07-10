import React from 'react'
import { BOOTSTRAP_LOGO, CSS_LOGO, HTML_LOGO, JAVASCRIPT_LOGO, PYTHON_LOGO, REACT_LOGO, SQL_LOGO } from '../utils/constants'

const Skills = () => {
  return (
    <div className='mt-[-3.5rem]'>
      <h3 className="ml-[34.5rem] text-3xl text-lime-400 ">
        My Skillss*
      </h3>
      <div className="container py-2 my-2 text-center ">
        <div className="row align-items-center">
            <div className="row mx-3 align-items-center mb-2">
            <img className='h-10 w-10 ml-[33.5rem] mb-[-2.5rem]' alt='logo' src={HTML_LOGO}/> 
              <h4>HTML</h4>
              <h6 className="text-white mt-3">
                <span>★★★★</span>★
              </h6> 
               
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
              <img className='h-10 w-10 ml-[33.5rem] mb-[-2.5rem]' alt='logo' src={CSS_LOGO}/>
                <h4>CSS</h4>
                <h6 className="text-white mt-3">
                  <span>★★★</span>★★
                </h6>  
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
              <img className='h-10 w-10 ml-[33.5rem] mb-[-2.5rem]' alt='logo' src={JAVASCRIPT_LOGO}/>
                <h4>JavaScript</h4>
                <h6 className="text-white mt-3">
                  <span>★★★</span>★★
                </h6> 
                
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
              <img className='h-10 w-10 ml-[33.5rem] mb-[-2.5rem]' alt='logo' src={BOOTSTRAP_LOGO}/>
                <h4>Bootstrap</h4>
                <h6 className="text-white mt-3">
                  <span>★★★★</span>★
                </h6>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
              <img className='h-10 w-10 ml-[33.5rem] mb-[-2.5rem]' alt='logo' src={PYTHON_LOGO}/>
                <h4>Python</h4>
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★★
                  </h6>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
              <img className='h-10 w-10 ml-[33.5rem] mb-[-2.5rem]' alt='logo' src={REACT_LOGO}/>
                <h4>React js</h4>
                <h6 className="text-white mt-3">
                  <span>★★★</span>★★
                </h6>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
              <img className='h-10 w-10 ml-[33.5rem] mb-[-2.5rem]' alt='logo' src={SQL_LOGO}/>
                <h4>SQL</h4>
                <h6 className="text-white mt-3">
                  <span>★★★</span>★★
                </h6>
              </div>
            </div>
            <p className="my-3 mx-3" id="skillsText">
              Embrace growth, each step forward gets you closer transforming
              <span> mastery</span>. <br />
              Build upon your skills, transforming
              <span> 3s into 4s</span>, and <span>4s into 5s</span>, one at a
              time..!!
            </p>
          </div>
    </div>
  )
}

export default Skills