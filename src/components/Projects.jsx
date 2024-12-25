import React from 'react'
import currency_Converter from '../assets/project_Images/currency_Converter.png'
import sundown from '../assets/project_Images/sundown.png'
import firebase_auth_demo from '../assets/project_Images/firebase_auth_demo.png'
import netflix_Clone from '../assets/project_Images/netflix_Clone.png'
import password_Generator from '../assets/project_Images/password_Generator.png'
import pdf_Browse_App from '../assets/project_Images/pdf_Browse_App.png'
import Cards from './Cards'


const Projects = () => {

  const projectJson = [
    {
      title: 'Password Generator',
      desc: 'A responsive React app for generating secure, customizable passwords with options for length, numbers, and special characters.',
      image: password_Generator,
      live: "https://curious-chimera-d723ca.netlify.app/",
      github: "https://github.com/himanshumainwal/password_Generator"
    },
    {
      title: 'Netflix Clone',
      desc: `A responsive React app mimicking Netflix's UI, featuring navigation, a homepage, and styled sections for movies and shows.`,
      image: netflix_Clone,
      live: "https://taupe-semifreddo-b78566.netlify.app/",
      github: "https://github.com/himanshumainwal/netflix_Clone"
    },
    {
      title: 'Currency Converter',
      desc: 'A React app that converts currencies in real-time, featuring an intuitive interface and support for multiple currency rates.',
      image: currency_Converter,
      live: "https://spontaneous-vacherin-4aaf6f.netlify.app/",
      github: "https://github.com/himanshumainwal/Currency-Convertor-React-JS"
    },
    {
      title: 'PDF Showcase',
      desc: 'A dynamic PDF showcase with pagination and search functionality for seamless title filtering.',
      image: pdf_Browse_App,
      live: "https://precious-melba-b0fbf0.netlify.app/",
      github: "https://github.com/himanshumainwal/pdf-browse-app"
    },
    {
      title: 'Sundown copy',
      desc: 'A visually captivating replica of the Sundown website, showcasing responsive design and attention to detail.',
      image: sundown,
      live: "https://neon-entremet-65b1cf.netlify.app/",
      github: "https://github.com/himanshumainwal/SunDown"
    },
    {
      title: 'firebase_auth_demo',
      desc: `A Firebase Authentication demo app showcasing user login and signup functionality.`,
      image: firebase_auth_demo,
      live: "https://charming-clafoutis-85488f.netlify.app/",
      github: "https://github.com/himanshumainwal/firebase-auth-demo"
    },

  ];

  return (
    <section id='projects' className='relative py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-4xl font-bold mb-8 text-center text-red-600 pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
          {projectJson.map((items, index) => {
            return <Cards item={items} index={index} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
