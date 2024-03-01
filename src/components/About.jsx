import React from 'react';
import Me from '../assets/about-me.jpg';

const About = () => {
  return (
    <section className='flex flex-col ml-60' id="about">
      <h2 className='text-start mb-10 font-extrabold py-32 pb-8 text-4xl text-blue-200'>
        About Me
      </h2>
      <div className='flex justify-start items-start'>
        <img className='w-64 mb-8 rounded-xl' src={Me} alt="foto minha" />

        <div className='flex flex-col items-start justify-start ml-8'>
          <p className='max-w-md'>Olá, meu nome é Anderson Medeiros e tenho 21 anos. Sou estudante de Análise e Desenvolvimento de Sistemas pela UNISUL. Comecei minha carreira profissional como Analista de Suporte Técnico e atualmente estou em busca de oportunidades para adquirir experiência como desenvolvedor back-end. Sou apaixonado por análise de dados, proativo, gosto de resolver problemas, tenho facilidade de aprendizagem, raciocínio lógico e adoro trabalhar em equipe.</p>

          <a href="#" className='text-white bg-blue-200 hover:bg-green-200 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-2xl px-10 py-3 mt-4 inline-block mb-64'>Entrar em contato</a>
        </div>
      </div>
    </section>
  );
};

export default About;
