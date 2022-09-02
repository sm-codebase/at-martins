import React from 'react'
import { UncontrolledCarousel, Row, Col } from "reactstrap";

const items = [
    {
      src: require("/public/assets/sl-img-2.jpg"),
      altText: "Slide 1",
      caption: "",
      header: "",
      key: "1",
    },
    {
      src: require("/public/assets/sl-img-3.jpg"),
      altText: "Slide 2",
      caption: "",
      header: "",
      key: "2",
    },
    {
      src: require("/public/assets/sl-img-4.jpg"),
      altText: "Slide 3",
      caption: "",
      header: "",
      key: "3",
    },
  ];

const imageSlider = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[25vh] relative'>
    <Row>
    <Col md="8" className="mx-auto">
      <UncontrolledCarousel items={items} />
    </Col>
  </Row>
      </div>
    </div>

  )
}

export default imageSlider