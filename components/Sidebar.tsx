import React from 'react'
import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

const Sidebar = () => {
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
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web/Mobile App Developer</p>
      
      <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full" href='' download='name'> 
        <GiTie className="w-6 h-6" />Download Resume
      </a>
        { /* // social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* // location */}
      
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: '-1rem', marginRight:  '-1rem'}}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Taipei, Taiwan</span>
        </div>
        <p className="my-2">c.h.chen.developer@gmail.com</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open('mailto: c.h.chen.developer@gmail.com')}
      >
        Email Me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400" >Toggle Theme</button>
      
    </>
  )
}

export default Sidebar
