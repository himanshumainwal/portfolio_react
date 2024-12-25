import React, { useState } from 'react'
import Footer from '../components/Footer'
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneAlt, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  /////////////////  Get Contact Detail From User /////////////////////////////

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Check if any form fields are empty
    let isFormValid = true;
    formData.forEach((value, key) => {
      if (!value.trim()) {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      alert("Please fill out all required fields.");
      return;
    }

    formData.append("access_key", "37ec5b54-f900-495d-9136-787a18a8f999");


    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (!res.success) {
      alert("There was an error submitting your details.");
    } else {
      alert("Thank you! Your details have been submitted.");
    }
  };


  /////////////////////////////////////////////////////////


  const handleInputChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    if (value.length < 10) {
      setError('Phone number must be at least 10 digits. 😡');
    } else {
      setError('');
    }
  };

  return (
    <>
      <section className=' md:h-[90vh] flex justify-center items-center py-16 relative px-5 md:px-0'>
        <div className='w-[85vw]'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='p-10 md:w-1/2  mb-8 ml-2 md:mb-0'>
              <h2 className='text-3xl font-bold mb-3 text-center text-red-500'>Get in Touch</h2>
              <p className='mb-4 text-gray-300'>I'm always open to new opportunities and collaboration. Feel free to reach out!</p>
              <div className='flex gap-9 flex-col pl-5'>
                <div className='text-white flex items-center gap-4'>
                  <FaLocationDot className='text-red-500 text-4xl' />
                  <div>
                    <h1 className='text-xl font-semibold'>Address</h1>
                    <div className='text-gray-300'>
                      <h2>Mayur Vihar Phase 1,</h2>
                      <h2> New Delhi, India </h2>
                    </div>
                  </div>
                </div>
                <div className='text-white flex gap-4 items-center'>
                  <FaPhoneAlt className='text-red-500 text-4xl' />
                  <div>
                    <h1 className='text-xl font-semibold'>Phone Number</h1>
                    <div className='text-gray-300'>
                      <h2>+91-9689422201</h2>
                    </div>
                  </div>
                </div>
                <div className='text-white flex gap-4 items-center'>
                  <MdMarkEmailRead className='text-red-500 text-4xl' />
                  <div>
                    <h1 className='text-xl font-semibold'>Email</h1>
                    <div className='text-gray-300'>
                      <h2>mainwal.himanshu1994@gmail.com</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex mt-10 justify-center space-x-6 text-5xl'>
                <a href="https://www.linkedin.com/in/himanshu-mainwal/" target='_blank' className='text-white hover:text-white'>
                  <FaLinkedinIn />
                </a>
                <a href="https://www.instagram.com/himanshumainwal?igsh=MXB3cmwyM3F6cnZ2NA==" target='_blank' className='text-white hover:text-white'>
                  <FaInstagram />
                </a>
                <a href="https://github.com/himanshumainwal" target='_blank' className='text-white hover:text-white'>
                  <TbBrandGithubFilled />
                </a>
              </div>
            </div>

            <form onSubmit={onSubmit} className='w-full md:w-1/2  text-white rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10'>
              <h1 className='text-4xl font-bold mb-7 text-center text-red-500'>Contact Me</h1>
              <div className='mb-4'>
                <label htmlFor="name" className='block text-sm font-medium'>Name</label>
                <input type="text" placeholder='💭 Full Name' name='Full Name' className='mt-1 p-2 pl-4 text-red-500 block w-full rounded-md outline-red-500' />
              </div>
              <div className='mb-4'>
                <label htmlFor="name" className='block text-sm font-medium'>Phone Number</label>
                <input type="number" name='Phone Number' placeholder='📞 Phone Number' className={`mt-1 p-2 pl-4 text-red-500 block w-full rounded-md `}
                  value={phoneNumber} onChange={handleInputChange} />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>
              <div className='mb-4'>
                <label htmlFor="email" className='block text-sm font-medium'>Email</label>
                <input type="email" name='Email' placeholder='💌 abc@xyz.com' className='mt-1 p-2 pl-4 text-black block w-full rounded-md outline-red-500' />
              </div>
              <div className='mb-4'>
                <label htmlFor="message" className='block text-sm font-medium'>Message</label>
                <textarea placeholder='💬 Enter Your Message...' name='Message' className='mt-1 p-2 pl-4 text-red-500 block w-full rounded-md outline-red-500' />
              </div>
              <button type='submit' className='bg-red-500 hover:bg-white hover:text-red-700 transition duration-700 text-white px-3 py-2 rounded-lg'>Send Message</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
