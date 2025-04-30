import React from 'react'
import hero from '../assets/Hero.png'
import my_Resume from '../assets/Himanshu_Mainwal.pdf'
import reactLogo from '../assets/Images_PNG/React.png'
import reduxLogo from '../assets/Images_PNG/Redux.png'
import tailwind from '../assets/Images_PNG/Tailwind_Css.png'

const Hero = () => {
  return (
    <section className='relative text-white mt-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
          <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
            <h1 className='lg:text-6xl text-4xl font-bold lg:leading-snug'>Hi There, <br />I'm  <span className='text-red-600'>Himanshu Mainwal</span></h1>
            <p className='md:text-2xl text-xl mb-4'><span className='text-red-600 font-bold'>Front-End</span> Developer</p>
            <p className='mb-4'>I'm a passionate Software Developer with expertise in React.js, JavaScript, and modern web technologies. I enjoy creating beautiful and functional websites that solve real-world problems.</p>
            <button className='bg-red-500 text-white px-3 py-2 w-max hover:bg-white hover:text-red-700 transition duration-700 rounded-md'><a href={my_Resume} download="Himanshu_Resume.pdf" target='_blank'>Download CV</a></button>
          </div>
          <div className='md:w-1/2 relative flex justify-center items-end'>
            <img src={hero} alt="" className='lg:h-[90vh] h-96' />
            <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden' />
            <img src={reduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden' />
            <img src={tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
