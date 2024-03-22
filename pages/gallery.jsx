import Servicos from "../components/Servicos";

export default function gallery() {
  const imagesManutenção = [
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
  ];

  const imagesCaldeiraria = [
    "/assets/gallery/img-gallery-29.jpg",
    "/assets/gallery/img-gallery-30.jpg",
    "/assets/gallery/img-gallery-31.jpg",
    "/assets/gallery/img-gallery-32.jpg",
    "/assets/gallery/img-gallery-33.jpg",
    "/assets/gallery/img-gallery-34.jpg",
    "/assets/gallery/img-gallery-35.jpg",
    "/assets/gallery/img-gallery-36.jpg",
    "/assets/gallery/img-gallery-37.jpg",
    "/assets/gallery/img-gallery-38.jpg",
    "/assets/gallery/img-gallery-39.jpg",
    "/assets/gallery/img-gallery-40.jpg",
    "/assets/gallery/img-gallery-41.jpg",
    "/assets/gallery/img-gallery-42.jpg",
    "/assets/gallery/img-gallery-43.jpg",
    "/assets/gallery/img-gallery-44.jpg",
    "/assets/gallery/img-gallery-45.jpg",
    "/assets/gallery/img-gallery-46.jpg",
  ];

  const imagesMunck = [
    "/assets/gallery/img-gallery-29.jpg",
    "/assets/gallery/img-gallery-30.jpg",
    "/assets/gallery/img-gallery-31.jpg",
    "/assets/gallery/img-gallery-32.jpg",
    "/assets/gallery/img-gallery-33.jpg",
    "/assets/gallery/img-gallery-34.jpg",
    "/assets/gallery/img-gallery-35.jpg",
    "/assets/gallery/img-gallery-36.jpg",
    "/assets/gallery/img-gallery-37.jpg",
    "/assets/gallery/img-gallery-38.jpg",
    "/assets/gallery/img-gallery-39.jpg",
    "/assets/gallery/img-gallery-40.jpg",
    "/assets/gallery/img-gallery-41.jpg",
    "/assets/gallery/img-gallery-42.jpg",
    "/assets/gallery/img-gallery-43.jpg",
    "/assets/gallery/img-gallery-44.jpg",
    "/assets/gallery/img-gallery-45.jpg",
    "/assets/gallery/img-gallery-46.jpg",
  ];

  return (
    <Servicos
      sections={{
        manutenção: imagesManutenção,
        munck: imagesMunck,
        caldeiraria: imagesCaldeiraria,
      }}
    />
  );
}
