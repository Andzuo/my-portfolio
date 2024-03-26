import React from 'react';
import Me from '../assets/about-me.jpg';

const About = () => {
  return (
    <section class="bg-gray-100 p-10">
      <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div class="max-w-lg">
                  <h2 class="text-3xl font-extrabold text-blue-200 sm:text-4xl">About Us</h2>
                  <p class="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                      eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                      Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                      malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                  <div class="mt-8">
                      <a href="#" class="text-blue-200 hover:text-green-200 font-medium">Learn more about us
                          <span class="ml-2">&#8594;</span></a>
                  </div>
              </div>
              <div class="mt-12 md:mt-0">
                  <img src={Me} alt="foto minha"  class="object-cover rounded-lg shadow-md h-82"/>
              </div>
          </div>
      </div>
  </section>
  );
};

export default About;
