import React from 'react';
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex items-center flex-col'>
      <nav className='flex w-full justify-between items-center mb-10 pt-3'>
        <img src={logo} alt='logo' className='w-28' object-contain />
        <button
          type='button'
          onClick={() => { window.open('https://github.com/Kipkorir74/AI-document-analyzer.git') }}
          className='black_btn mt-4'
        >
          Github
        </button>
      </nav>
      <h1 className='head_text'>
        Summarized Articles With <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4
        </span>
      </h1>
      <h2 className='desc'>
      Make your reading experience efficient with AI-powered summarization 
      that allows you to read more in less time.
      </h2>
    </header>
  )
}

export default Hero
