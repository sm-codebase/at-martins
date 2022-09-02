import Servicos from "../components/Servicos";

export default function gallery() {
    const images = [
        "/assets/gallery/img-gallery-1.jpeg",
        "/assets/gallery/img-gallery-2.jpeg",
        "/assets/gallery/img-gallery-3.jpeg",
        "/assets/gallery/img-gallery-5.jpeg",
        "/assets/gallery/img-gallery-6.jpeg",
        "/assets/gallery/img-gallery-7.jpeg",
        "/assets/gallery/img-gallery-8.jpeg",
        "/assets/gallery/img-gallery-11.jpeg",
        "/assets/gallery/img-gallery-12.jpeg",
        "/assets/gallery/img-gallery-13.jpeg",
        "/assets/gallery/img-gallery-14.jpeg",
        "/assets/gallery/img-gallery-15.jpeg",
    ]
    return <Servicos images={images} />
}