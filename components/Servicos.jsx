import Zoom from "next-image-zoom";
import { useState } from "react";


export default function Servicos({ images }) {
  const [imagesShownArray, setImagesShownArray] = useState(
    Array(images.length).fill(false)
  );

  const imageVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  return (
    <div>
    <div className="flex flex-wrap justify-center text-center">
        <div className="w-full lg:w-6/12 px-4 mt-20">
            <h1 className="text-4xl font-semibold mt-8">Nossos Serviços</h1>
            <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                Confira alguns de nossos serviços realizados.
            </p>
        </div>
    </div>
      <div className="grid grid-cols-2 gap-1">
        {images &&
          images.map((imageUrl, index) => (
            <Zoom
              key={index}
              src={imageUrl} 
              layout='responsive' 
              width='500' 
              height='400'
            
            />
            
            ))}
      </div>
      </div>
  );
}

