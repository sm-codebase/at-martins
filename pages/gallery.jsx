import Servicos from "../components/Servicos";

export default function gallery() {
    const images = [
        "/assets/gallery/img-gallery-16.jpg",
        "/assets/gallery/img-gallery-17.jpg",
        "/assets/gallery/img-gallery-18.jpg",
        "/assets/gallery/img-gallery-19.jpg",
        "/assets/gallery/img-gallery-20.jpg",
        "/assets/gallery/img-gallery-21.jpg",
        "/assets/gallery/img-gallery-22.jpg",
        "/assets/gallery/img-gallery-23.jpg",
        "/assets/gallery/img-gallery-24.jpg",
        "/assets/gallery/img-gallery-25.jpg",
        "/assets/gallery/img-gallery-26.jpg",
        "/assets/gallery/img-gallery-27.jpg",
        "/assets/gallery/img-gallery-1.jpg",
        "/assets/gallery/img-gallery-3.jpg",
        "/assets/gallery/img-gallery-5.jpg",
        "/assets/gallery/img-gallery-7.jpg",
        "/assets/gallery/img-gallery-8.jpg",
        "/assets/gallery/img-gallery-11.jpg",
        "/assets/gallery/img-gallery-12.jpg",
        "/assets/gallery/img-gallery-13.jpg",
        "/assets/gallery/img-gallery-14.jpg",
        "/assets/gallery/img-gallery-15.jpg",

    ]
    return <Servicos images={images} />
}