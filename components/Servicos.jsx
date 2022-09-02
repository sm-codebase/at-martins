import Zoom from "next-image-zoom";

export default function Servicos ({images}) {
    return (
        <div className="grid justify-items-center p-20">
            {images && 
                images.map((imageUrl)=> (
            <div className="relative">
                <div className="justify-self-auto">
                <Zoom
                    src={imageUrl} 
                    width='500'
              	    height='500'
                    />
                </div>
            </div>
                ))}
        </div>
    )
}