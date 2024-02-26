import React from 'react'


const SideBar = () => {
  return (
    <aside className='fixed left-0 top-0 bg-white border-r-2 p-8 w-30 min-h-screen flex flex-col justify-between items-center z-10'>
      <a href="">
      <div className='font-extrabold text-blue-200'>
        AM
      </div>
      </a>

      <nav>
        <div>
          <ul className='flex flex-col row-1 gap-y-4'>
            <li>
              <a className='font-bold text-2xl w-10' href="#home">
                <i className="icon-home color-green"></i>
              </a>
            </li>
            <li>
              <a className='font-bold text-2xl w-10' href="#about">
                <i className="icon-user-following"></i>
              </a>
            </li>
            <li>
              <a className='font-bold text-2xl w-10' href="#services">
                <i className="icon-briefcase"></i>
              </a>
            </li>
            <li>
              <a className='font-bold text-2xl w-10' href="#resume">
                <i className="icon-graduation"></i>
              </a>
            </li>
            <li>
              <a className='font-bold text-2xl w-10' href="#portfolio">
                <i className="icon-layers"></i>
              </a>
            </li>
            <li>
              <a className='font-bold text-2xl w-10' href="#blog">
                <i className="icon-note"></i>
              </a>
            </li>
            <li>
              <a className='font-bold text-2xl w-10' href="contact">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
      <div className='text-gray-300'>
        AM
      </div>

    </aside>
  )
}

export default SideBar