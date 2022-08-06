import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Main = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/assets/sl-img-2.jpg",
    "/assets/sl-img-3.jpg",
    "/assets/sl-img-4.jpg",
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }
  return (
    <div>
      <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/assets/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/assets/arrowr.png" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
    <div className='flex justify-center'>
    <button className='bg-blue hover:bg-blue-50 text-white font-bold p-2 px-4'>
    <Link href='https://web.whatsapp.com/'>Solicite um orçamento</Link>
    </button>
    </div>
    </div>
  );
};

export default Main;
