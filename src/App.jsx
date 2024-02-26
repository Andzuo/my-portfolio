import React from 'react';
import SideBar from './components/SideBar';
import Home from './components/home/Home';
import About from './components/About';
import Services from './services/services';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className='font-body bg-slate-100'>
      <SideBar />
      <main>
        <Home />
        <About />
        <Services />
        <Resume /> 
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </div>
  )
}
