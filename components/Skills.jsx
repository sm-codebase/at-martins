import React from 'react';
import Image from 'next/image'
import { FaCogs , FaIndustry , FaUser , FaGlobe , FaCog } from 'react-icons/fa';



const Skills = () => {
  return (

         <div id='skills' className="flex flex-wrap items-center pt-0">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full px-4">
                  <a
                    href=""
                    target="_blank"
                  >
                    <div className="bg-[#498CC6] shadow-lg rounded-lg p-4">
                    <h1 className='text-white'><FaIndustry /></h1>
                      <p className="text-lg text-white mt-4 font-semibold">
                        Experiência na área industrial
                      </p>
                    </div>
                  </a>
                  <a>
                    <div className="bg-[#498CC6] shadow-lg rounded-lg p-4 mt-4">
                    <h1 className='text-white'><FaUser /></h1>
                      <p className="text-lg text-white mt-4 font-semibold">
                        Profissionais qualificados
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full px-4">
                  <a
                  >
                    <div className="bg-[#498CC6] shadow-lg rounded-lg p-4">
                      <h1 className='text-white'><FaGlobe /></h1>
                      <p className="text-lg text-white mt-4 font-semibold">
                       Atendimento em todo o território nacional
                      </p>
                    </div>
                  </a>
                  <a>
                  <div className="bg-[#498CC6] shadow-lg rounded-lg p-4 mt-4">
                  <h1 className='text-white'><FaCog /></h1>
                      <p className="text-lg text-white mt-4 font-semibold">
                      Maquinário de ponta eficiente e sustentável
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-white shadow-blue-400 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-[#498CC6]">
              <div className=''>
                    <h1><FaCogs /></h1>
              </div>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Conheça algumas de nossas soluções aplicadas
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-[#498CC6]">
              Criamos e executamos projetos industriais com ampla experiência em
              melhorias, sempre voltadas para aliar otimização de espaço, tempo e
              usabilidade. 
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-[#498CC6]">
              E garantimos que cada processo ou sistema dentro
              das instalações de nossos clientes mantenha-se dentro de padrões
              e normas especificas de cada setor ou segmento da empresa.
              </p>
              <a
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150" href='gallery'
              >
                Nossos Projetos
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
  );
};

export default Skills;
