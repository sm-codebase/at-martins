import Head from "next/head";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";

export default function Home() {
  return (
    <div>
      <Head>
        <title>AT Martins</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Bem vindo a AT Matins!' message='Conheça nossos serviços'/>
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  );
}