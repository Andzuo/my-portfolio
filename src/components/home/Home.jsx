import React from 'react'
import HeaderSocials from './HeaderSocials'
import Me from '../../assets/minha-foto.jpg'
import ScrollDowm from './ScrollDowm';

const Home = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center max-w-xl text-center'>
        <img className='w-64 rounded-full h-full mb-8' src={Me} alt="minha ft" />
        <h1 className='font-extrabold text-5xl text-blue-200'>Anderson Medeiros</h1>
        <span>I'm a Back-End Developer</span>

        <HeaderSocials/>

        <button type="button" class="text-white bg-blue-200 hover:bg-green-200 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-2xl px-10 py-3 text-center me-2 mb-2 dark:bg-blue-200 dark:hover:bg-green-300 dark:focus:ring-green-300 inline-block">
          <a href="#contact">Hire me</a>
          </button>

        <ScrollDowm />
      </div>
    </section>
  )
}

export default Home