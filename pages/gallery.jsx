import Servicos from "../components/Servicos";
import Image from "next/image";

export default function gallery() {
    const images = [
        "/../public/assets/gallery/img-gallery-1.jpeg",
        "/../public/assets/gallery/img-gallery-2.jpeg",
        "/../public/assets/gallery/img-gallery-3.jpeg",
        "/../public/assets/gallery/img-gallery-4.jpeg",
        "/../public/assets/gallery/img-gallery-5.jpeg",
        "/../public/assets/gallery/img-gallery-6.jpeg",
        "/../public/assets/gallery/img-gallery-7.jpeg",
        "/../public/assets/gallery/img-gallery-8.jpeg",
        "/../public/assets/gallery/img-gallery-9.jpeg",
        "/../public/assets/gallery/img-gallery-10.jpeg",
        "/../public/assets/gallery/img-gallery-11.jpeg",
        "/../public/assets/gallery/img-gallery-12.jpeg",
        "/../public/assets/gallery/img-gallery-13.jpeg",
        "/../public/assets/gallery/img-gallery-14.jpeg",
        "/../public/assets/gallery/img-gallery-15.jpeg",
    ]
    return <Servicos images={images} />
}