import React from 'react';
import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <img src={logo} alt='logo' className='w-64 h-64' />
      <h1 className='text-6xl text-white font-bold'>React Tailwind</h1>
    </header>
  )
}

export default Hero
