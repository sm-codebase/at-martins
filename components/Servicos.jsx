import Zoom from "next-image-zoom";
import Image from "next/image";
import { useState } from "react";
import { Waypoint } from 'react-waypoint';

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
      <div>
        <h1>Nossos Seviços</h1>
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

