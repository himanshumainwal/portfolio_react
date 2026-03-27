import React from 'react'
// import MernStack from '../assets/mernstack.png'
import Html from '../assets/Images_PNG/Html.png'
import Css from '../assets/Images_PNG/CSS.png'
import Javascript from '../assets/Images_PNG/JS.png'
import ReactLogo from '../assets/Images_PNG/React.png'
import Node from '../assets/Images_PNG/Node.png'
import ReduxLogo from '../assets/Images_PNG/Redux.png'
import Tailwind from '../assets/Images_PNG/Tailwind_Css.png'
import Bootstrap from '../assets/Images_PNG/Bootstrap.png'
import jQuery from '../assets/Images_PNG/jQuery.png'
import MySQL from '../assets/Images_PNG/MySQL.png'
import Github from '../assets/Images_PNG/Github.png'

const About = () => {
    return (
        <div className='relative text-white mt-14' >
            <div className=' py-10'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        {/* <h2 className='text-base text-red-500 font-semibold tracking-wide uppercase'>About Me</h2> */}
                        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl'>Hi, I'm <span className='text-red-600'>Himanshu Mainwal</span></p>
                        <p className='mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto'>
                            React JS developer with strong frontend & backend skills seeking challenging roles to build impactful web experiences.
                        </p>
                    </div>
                    <div className='mt-20 '>
                        <div className='  '>
                            <div className='mb-20'>
                                <h3 className='text-3xl text-center font-semibold text-red-600'>Summary</h3>
                                <div className='text-center mt-4 text-lg text-gray-300 leading-normal sm:leading-8'>
                                    <p>
                                        Motivated and dedicated full stack developer with a strong foundation in React.js, HTML5, Tailwind CSS, and JavaScript, along with hands-on experience in Node.js, Axios, PHP, and MySQL. I am passionate about building visually appealing, user-friendly web applications with seamless frontend-backend integration.
                                        With a commitment to continuously expanding my skill set, I focus on enhancing application performance, API integration, and overall user experience. I bring a collaborative mindset and a strong eagerness to learn, aiming to develop scalable and engaging digital solutions while working in a dynamic team environment.
                                    </p>

                                </div>
                            </div>
                            <div className=' border h-fit border-red-200 shadow-lg shadow-red-300 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center'>
                                <h3 className='text-3xl font-semibold text-red-600'>Skills & Expertise</h3>
                                <div className='flex items-center justify-center flex-wrap gap-3'>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 h-10 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Html} alt="html icon" className='w-9 h-8' />
                                        <span className='font-semibold'>HTML</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 h-10 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Css} alt="css icon" className='w-8 h-8' />
                                        <span className='font-semibold'>CSS</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 h-10 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Tailwind} alt="tailwind icon" className='w-8 h-8 rounded-full' />
                                        <span className='font-semibold'>Tailwind Css</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 h-10 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Javascript} alt="javascript icon" className='w-8 h-8' />
                                        <span className='font-semibold'>Javascript</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 h-10 rounded-lg shadow-md shadow-red-300'>
                                        <img src={ReactLogo} alt="react icon" className='w-8 h-8 rounded-full' />
                                        <span className='font-semibold'>React</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 h-10 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Node} alt="node icon" className='w-8 h-8 rounded-full' />
                                        <span className='font-semibold'>Node</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 h-10 rounded-lg shadow-md shadow-red-300'>
                                        <img src={ReduxLogo} alt="redux icon" className='w-8 h-8' />
                                        <span className='font-semibold'>Redux</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 h-10 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Github} alt="github icon" className='w-8 h-8' />
                                        <span className='font-semibold'>Github</span>
                                    </div>

                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 h-10 rounded-lg shadow-md shadow-red-300'>
                                        <img src={jQuery} alt="jquery icon" className='w-8 h-8' />
                                        <span className='font-semibold'>JQuery</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 h-10 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Bootstrap} alt="bootstrap icon" className='w-8 h-8' />
                                        <span className='font-semibold'>Bootstrap</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center  w-max px-2 py-1 h-10 rounded-lg shadow-md shadow-red-300'>
                                        <img src={MySQL} alt="mysql icon" className='w-8 h-8' />
                                        <span className='font-semibold'>MySQL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About
