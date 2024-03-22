import Zoom from "next-image-zoom";
import { useState } from "react";

export default function Servicos({ sections }) {
  // sections agora é um objeto { general: [...], munck: [...] }

  return (
    <div>
      <div>
        <div className="flex flex-wrap justify-center text-center">
          <div className="w-full lg:w-6/12 px-4 mt-20">
            <h1 className="text-4xl font-semibold mt-8">
              Manutenção industrial
            </h1>
            <p className="text-lg leading-relaxed m-4 text-blueGray-500">
              Confira alguns de nossos serviços realizados.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          {sections.manutenção.map((imageUrl, index) => (
            <Zoom
              key={index}
              src={imageUrl}
              layout="responsive"
              width={"100%"}
              height={"100%"}
            />
          ))}
        </div>
      </div>

      {/* Seção caldeiraria usa seu próprio conjunto de imagens */}
      <div>
        <div className="flex flex-wrap justify-center text-center">
          <div className="w-full lg:w-6/12 px-4 mt-20">
            <h1 className="text-4xl font-semibold mt-8">Caldeiraria</h1>
            <p className="text-lg leading-relaxed m-4 text-blueGray-500">
              Confira alguns de nossos serviços realizados.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          {sections.caldeiraria.map((imageUrl, index) => (
            <Zoom
              key={index}
              src={imageUrl}
              layout="responsive"
              width={"100%"}
              height={"100%"}
            />
          ))}
        </div>
      </div>

      {/* Seção Munck usa seu próprio conjunto de imagens */}
      <div>
        <div className="flex flex-wrap justify-center text-center">
          <div className="w-full lg:w-6/12 px-4 mt-20">
            <h1 className="text-4xl font-semibold mt-8">Munck</h1>
            <p className="text-lg leading-relaxed m-4 text-blueGray-500">
              Confira alguns de nossos serviços realizados.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          {sections.munck.map((imageUrl, index) => (
            <Zoom
              key={index}
              src={imageUrl}
              layout="responsive"
              width={"100%"}
              height={"100%"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
