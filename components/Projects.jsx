import React from 'react';
import Image from 'next/dist/client/image';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Nosso clientes</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Aqui está a lista de alguns clientes que utilizam alguma de nossas soluções
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <Image
                    alt="..."
                    src="/assets/clients/cliente-1.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                    width={400}
                    height={400}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">MAHLE</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Metalurgica
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <Image
                    alt="..."
                    src="/assets/clients/cliente-2.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                    width={400}
                    height={400}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">ELOS</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Construção Civil
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <Image
                    alt="..."
                    src="/assets/clients/cliente-3.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                    width={400}
                    height={400}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Microsal</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Fabricação de produtos quimicos
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <Image
                    alt="..."
                    src="/assets/clients/cliente-4.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                    width={400}
                    height={400}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ingredion</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Processamento e refino de alimentos
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <Image
                    alt="..."
                    src="/assets/clients/cliente-5.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                    width={400}
                    height={400}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Emanuplast</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Reciclagem de plásticos
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <Image
                    alt="..."
                    src="/assets/clients/cliente-6.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                    width={400}
                    height={400}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Metalloys & Chemicals</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Produtos químicos
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <Image
                    alt="..."
                    src="/assets/clients/cliente-7.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                    width={400}
                    height={400}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">DWG</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Engenharia e planejamento
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <Image
                    alt="..."
                    src="/assets/clients/cliente-8.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                    width={400}
                    height={400}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Mars</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Alimentos
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <Image
                    alt="..."
                    src="/assets/clients/cliente-9.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                    width={400}
                    height={400}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ambev</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Cervejaria
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <Image
                    alt="..."
                    src="/assets/clients/cliente-10.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                    width={400}
                    height={400}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">SAMAE</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Tratamento de agua e esgoto
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <Image
                    alt="Clients"
                    src="/assets/clients/cliente-11.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                    width={400}
                    height={400}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Prefeitura de Mogi Guaçu</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Serviço público
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Projects;
