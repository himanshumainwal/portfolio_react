import React from 'react'
import { FaGithub } from "react-icons/fa";


const Cards = ({ item, index }) => {
    return (
        <div key={index} className='border border-red-200 shadow-lg shadow-red-300 rounded-lg w-[350px] lg:w-[400px] text-white transform transition duration-500 hover:scale-105'>
            <img src={item.image} alt="" className='rounded-lg' />
            <div className='p-4'>
                <h1 className='font-semibold text-xl mb-2'>{item.title}</h1>
                <p className='text-gray-300'>{item.desc}</p>
                <div className='flex gap-3 mt-4'>
                    <button className='bg-red-500 hover:bg-white hover:text-red-700 transition duration-700 text-white px-3 py-2 rounded-md'><a href={item.live} target='_blank'>Live Preview</a></button>
                    <button className='  border hover:bg-white hover:text-black transition duration-700 px-3 py-2 rounded-md'>
                        <a href={item.github} target='_blank' className='flex gap-1'>
                            <FaGithub className='text-lg my-auto' />
                            Github Link
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards

