import React from 'react'
// import WorkImg from '../assets/projects/workImg.jpeg'
// import realEstate from '../assets/projects/realestate.jpg'
import tesla from '../assets/projects/tesla.jpg'
import allocation from '../assets/projects/allocation.jpg'
import auth from '../assets/projects/auth.jpg'
import game from '../assets/projects/game.jpg'
import api from '../assets/projects/api.jpg'

const Projects = () => {
  return (
    <div name='projects' className=' w-full md:h-screen text-gray-300 bg-[#0a192f] '>
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div className=' pb-8 ' >
                <p className=' text-4xl font-bold inline border-b-4 broder-pink-600 text-gray-400 ' >My Projects</p>
                <p className=' py-6 ' >Check out some of my recently created projects. You can find the source code on my GitHub :)</p>
            </div>

            {/* container  */}
            <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
                {/* grid item  */}
                <div
                    // style={{backgroundImage: `url(${WorkImg})`}} 
                    style={{backgroundImage: `url(${tesla})`}} 
                    className=' shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div ' >
                    
                    {/* hover effects  */}
                    <div className=' opacity-0 group-hover:opacity-100 ' >
                        <span className=' text-2xl font-bold text-white tracking-wider '>
                            Tesla clone
                        </span>
                        <div className=' pt-8 text-center '>
                            <a href='https://kamathpvk.github.io/tesla/' target='_blank'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Site</button>
                            </a>
                            <a href='https://github.com/kamathpvk/tesla' target='_blank'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div
                    style={{backgroundImage: `url(${allocation})`}} 
                    className=' shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div ' >
                    
                    
                    <div className=' opacity-0 group-hover:opacity-100 ' >
                        <span className=' text-2xl font-bold text-white tracking-wider '>
                            Team Allocation
                        </span>
                        <div className=' pt-8 text-center '>
                            <a href='https://allocation.netlify.app/' target='_blank'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Site</button>
                            </a>
                            <a href='https://github.com/kamathpvk/allocation' target='_blank'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                            </a>
                        </div>
                    </div>
                </div> */}

                {/* <div
                    style={{backgroundImage: `url(${auth})`}} 
                    className=' shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div ' >
                    
                    
                    <div className=' opacity-0 group-hover:opacity-100 ' >
                        <span className=' text-2xl font-bold text-white tracking-wider '>
                            Authentication System
                        </span>
                        <div className=' pt-8 text-center '>
                            <a href='https://siteauth.netlify.app/' target='_blank'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Site</button>
                            </a>
                            <a href='https://github.com/kamathpvk/auth' target='_blank'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                            </a>
                        </div>
                    </div>
                </div> */}

                <div
                    style={{backgroundImage: `url(${game})`}} 
                    className=' shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div ' >
                    
                    {/* hover effects  */}
                    <div className=' opacity-0 group-hover:opacity-100 ' >
                        <span className=' text-2xl font-bold text-white tracking-wider '>
                            Word Scarmble
                        </span>
                        <div className=' pt-8 text-center '>
                            <a href='https://kamathpvk.github.io/game/' target='_blank'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Site</button>
                            </a>
                            <a href='https://github.com/kamathpvk/game' target='_blank'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    style={{backgroundImage: `url(${api})`}} 
                    className=' shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div ' >
                    
                    {/* hover effects  */}
                    <div className=' opacity-0 group-hover:opacity-100 ' >
                        <span className=' text-2xl font-bold text-white tracking-wider '>
                            Quote Generator
                        </span>
                        <div className=' pt-8 text-center '>
                            <a href='https://kamathpvk.github.io/api/' target='_blank'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Site</button>
                            </a>
                            <a href='https://github.com/kamathpvk/api' target='_blank'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects