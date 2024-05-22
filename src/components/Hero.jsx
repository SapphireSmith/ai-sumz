import React from 'react'
const Hero = () => {
  return (
    <header className='w-full justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <button
          type='button'
          onClick={() => {
            window.open('https://github.com/SapphireSmith/ai-sumz')
          }}
          className='black_btn'>
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <div className='flex justify-center'>
        <h2 className='desc'>

        </h2>
      </div>

    </header>
  )
}

export default Hero