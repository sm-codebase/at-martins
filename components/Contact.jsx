import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg'

const Contact = () => {

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#001E47]'>
          Contato
        </p>
        <h2 className='py-4 text-[#001E47]'>Solicite um orçamento</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl text-[#001E47] shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Comercial</h2>
                <p className='py-0 font-sans font-bold'>
                 19 3831-2036</p>
                 <p className='py-0 font-sans font-bold'>
                 19 99929-2036</p>
                <h3 className='py-6'>comercial@atmartinscaldeiraria.com.br
                </h3>
                <p>Avenida Honório Orlando Martini, 262 Jd.Samira  Mogi Guaçu-SP</p>
                <p>CEP-13841-020</p>
              </div>
              <div>
                <p className='uppercase pt-8'>Nossas redes sociais</p>
                <div className='flex items-center justify-between py-8'>
                  <a
                    href='https://www.instagram.com/atmartinscaldeiraria/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#001E47] text-white'>
                      <FaInstagram />
                    </div>
                  </a>
                  <a
                    href='https://www.facebook.com/atmartinscaldeiraria'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#001E47] text-white'>
                      <FaFacebook />
                    </div>
                  </a>
                  <a
                    href='https://www.facebook.com/atmartinscaldeiraria'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#001E47] text-white'>
                    <FaWhatsapp />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl text-[#001E47] shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/9e3ce9dd-dcb0-4c44-a074-f8dfc6935aac'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Nome</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='nome'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Telefone
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='texto'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Assunto</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='titulo'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Mensagem</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='menssagem'
                  ></textarea>
                </div>
                <button className='button-low w-full p-4 text-white mt-4'>
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Contact;
