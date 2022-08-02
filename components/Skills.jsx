import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/manufacture.png';
import Css from '../public/assets/skills/settings.png';
import Javascript from '../public/assets/skills/supplier.png';
import ReactImg from '../public/assets/skills/factory.png';
import Tailwind from '../public/assets/skills/tailwind.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Nossos Serviços
        </p>
        <h2 className='py-4'>Como vamos ajudar a sua empresa</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Html} width='32px' height='32px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Experiência na área industrial</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='32px' height='32px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Com profissionais qualificados</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='32px' height='32px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Trabalhamos com maquinário de ponta</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='32px' height='32px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Atendimento em todo território </h3>
              </div>
            </div>
          </div>
          
          </div>
        </div>
      </div>
  );
};

export default Skills;
