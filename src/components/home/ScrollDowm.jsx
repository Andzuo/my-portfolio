import React from 'react'

const ScrollDowm = () => {
  return (
    <div className='absolute bottom-0 left-0 w-full'>
        <a href="#about">
            <span className=''>Scrool Down</span>
            <span className='relative rounded-2xl mt-3 m-auto w-10 h-12 block border-2 border-blue-200'>
                <span className=' absolute bg-blue-200 rounded-full left-2/4 w-2 h-2 -translate-x-2/4 animate-[wiggle_4s_ease-in-out_infinite]'></span>
            </span>
        </a>
    </div>
  )
}

export default ScrollDowm