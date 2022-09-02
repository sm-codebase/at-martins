import Image from 'next/image';
import React from 'react'
import netflixImg from '../public/assets/projects/netflix.jpg';
import Zoom from "next-image-zoom";
import image1 from '../public/assets/sl-img-1.jpg'
import image2 from '../public/assets/sl-img-2.jpg'



const test = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[25vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[25vh] bg-black/70 z-10' />
      <Image
        className='absolute z-1'
        layout='fill'
        objectFit='cover'
        src={netflixImg}
        alt='/'
      />
      <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        <h2 className='py-2'>Nossos Serviços</h2>
        <h3>Caldeiraria Industrial/ Manutenção / Projetos</h3>
      </div>
    </div>
    <div className='justify-center flex'>
      <h1>Caldeiraria industrial</h1>
    </div>
    <div className='bg-[#001E47] h-1/2 w-full sm:mt-24 flex md:flex-row flex-col justify-around items-start'>
      <div className='justify-center flex flex-wrap relative'>
        <div className='flex flex-wrap w-1/3'>
          <div className='w-full p-1 md:p-2'>
            <div>
              <div style={{width: 500}}>
                <Zoom src={image1} layout={'responsive'}/>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap w-1/3'>
          <div className='w-full p-1 md:p-2'>
            <div>
              <div style={{width: 500}}>
                <Zoom src={image1} layout={'responsive'}/>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap w-1/3'>
          <div className='w-full p-1 md:p-2'>
            <div>
              <div style={{width: 500}}>
                <Zoom src={image1} layout={'responsive'}/>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap w-1/3'>
          <div className='w-full p-1 md:p-2'>
            <div>
              <div style={{width: 500}}>
                <Zoom src={image1} layout={'responsive'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='justify-center flex'>
      <h1>Manutenção</h1>
    </div>
    <div className='flex flex-wrap w-1/3'>
          <div className='w-full p-1 md:p-2'>
            <div>
              <div style={{width: 500}}>
                <Zoom src={image2} layout={'responsive'}/>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default test