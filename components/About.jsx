import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#001E47]'>
            Quem Somos
          </p>
          <h2 className='py-4'>NOSSAS SOLUÇÕES SÃO EXCLUSIVAMENTE DESENVOLVIDAS PARA CADA EMPRESA</h2>
          <p className='py-2 text-gray-600'>
          Com serviços prestados para industrias de diversos segmentos
          </p>
          <p className='py-2 text-gray-600'>
          A prioridade da AT Martins é a saúde, segurança de seus
          funcionários, valorizando a comunidade e principalmente o
          meio ambiente. Sabemos que nosso compromisso com a
          excelência vai além do simples cumprimento das normas legais,
          mas em cumprir com esses pilares.
          </p>
          <p className='py-2 text-gray-600'>
          Colaboradores capacitados
          Mecânicos, soldadores, serralheiros, encanadores, caldeireiros, pintores.
          Caldeiraria Industrial
          Confecção de corrimão, escadas, mezaninos, estruturas, proteções.
          Montagem e manutenção em sistemas hidráulicos pneumáticos
          Manutenção corretivas ou preventivas.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Confira alguns de nossos projetos.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
