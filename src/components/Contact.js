import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='pl-[10rem] text-2xl font-medium p-2 '>ContactMe</h1>
      <form className='pl-[10rem] '>
        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-5 col-lg-3">
            <input
              type="text"
              className="border border-black"
              placeholder="First name"
              
              required
            />
          </div>
          <div className="col-5 col-lg-3">
            <input
              type="text"
              className="border border-black"
              placeholder="Last name"
              
              required
            />
          </div>
        </div>
        <div className="row g-3 align-items-center pt-3 justify-content-center">
          <div className="col-5 col-lg-3">
            <input
              type="tel"
              className="border border-black"
              placeholder="Mobile"
              
              required
            />
          </div>
          <div className="col-5 col-lg-3">
            <input
              type="email"
              className="border border-black"
              placeholder="Email"
              
              required
            />
          </div>
        </div>
        <div className="row g-3 pt-3 align-items-center justify-content-center">
          <div className="col-10 col-lg-6">
            <textarea
              type="textarea"
              className="border border-black"
              placeholder="Message"
              
              rows="10"
              required
            />
          </div>
        </div>
        <button type="submit" className="button mt-5 bg-pink-600 rounded-lg">
          Send Message🫣
        </button>
      </form>
    </div>
  )
}

export default Contact