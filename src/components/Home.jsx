import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { PiHandWavingFill } from 'react-icons/pi'

const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#0a192f]'>

        {/* container  */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full'>
            <p className=' text-pink-400 '>
              Hi there <PiHandWavingFill className=' inline text-yellow-400 ' size={30} /> My name is
            </p>
            <h1 className=' text-4xl sm:text-7xl font-bold text-blue-600 ' >Vibhav Kamath</h1>
            {/* <h2 className=' text-4xl sm:text-7xl font-bold text-gray-300 ' >I'm a Web Developer</h2> */}
            <p className=' text-gray-400 py-4 max-w-[480px] ' >
              Welcome to my portfolio. Feel free to browse my website, and drop your suggestions on my Github repo. Thank you for visiting!
              {/* I'm a full-stack developer specializing in building exceptional digital experinces. Currently, I'm focused on building responsive full-stack web applications */}
            </p>
            <div>
                <button className=' text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 cursor-default ' >Scroll Down 
                <span className=' group-hover:rotate-90 duration-300 '>
                    <HiArrowNarrowRight className=' ml-3 ' />
                </span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Home