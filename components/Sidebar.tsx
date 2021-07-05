import React from 'react'
import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from 'next-themes'

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src='/images/site/CH_images.jpg'
        alt='Myself image'
        className="mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span>Hi, I am Chih-Hao</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">Web/Mobile App Developer</p>
      
      <a className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500" href='https://portfoliopdf.s3.us-east-2.amazonaws.com/PDF/ChihHaoChen_Resume_June2021.pdf' download='resume_CHIH-HAO'> 
        <GiTie className="w-6 h-6" />Download Resume
      </a>
        { /* // social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="https://www.linkedin.com/in/chih-hao-chen-13583369/">
          <AiFillLinkedin className="w-10 h-10 cursor-pointer" />
        </a>
        <a href="https://github.com/ChihHaoChen">
          <AiFillGithub className="w-10 h-10 cursor-pointer" />
        </a>
        <MdEmail className="w-10 h-10 cursor-pointer" onClick={() => window.open('mailto: c.h.chen.developer@gmail.com')}/>
      </div>

      {/* // location */}
      
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: '-1rem', marginRight:  '-1rem'}}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Taipei, Taiwan</span>
        </div>
        <p className="my-2">c.h.chen.developer@gmail.com</p>
      </div>
      
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        Toggle Theme
      </button>
      
    </>
  )
}

export default Sidebar
