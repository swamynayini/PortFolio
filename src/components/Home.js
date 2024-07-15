import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { AVATAR_LOGO } from '../utils/constants'

const Home = () => {
  const history = useHistory()
  const clickedBtn = ()=>{
    history.push("/contactme")
  }
  return (
    <div>
        <div className="p-2 m-2 pl-[3.5rem]">
                <img className="rounded-full" alt="logo" src={AVATAR_LOGO}/>
                <h1 className="md:ml-[30rem] md:mt-[-20rem] text-3xl font-bold text-orange-700">Swamy Nayini</h1>
                <p className="md:ml-[30rem] md:mt-[2rem]">Welcome to my portfolio website! I am a passionate and creative front-end developer with a keen eye for detail and a love for crafting stunning user interfaces. With a solid foundation in HTML, CSS, and JavaScript,and React js . I specialize in bringing designs to life, creating seamless and engaging web experiences.</p>
            </div>
            <div className="md:mt-[12.5rem] md:ml-[35rem] space-x-4">
                <button className="text-4xl font-medium text-yellow-600 " >My Portfolio</button>
                <button className="text-4xl font-medium text-blue-700" onClick={clickedBtn}>ContactMe</button>
            </div>
    </div>
  )
}

export default Home
