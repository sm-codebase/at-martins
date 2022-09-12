import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import FloatingWhatsApp from 'react-floating-whatsapp'
import Footer from '../components/Footer'
import Script from 'next/script';

import * as ga from '../lib'


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() =>{
    const handleRouteChange = (url) => {
      ga.pageView(url)
    }

      router.events.on('routeChangeComplete', handleRouteChange)
      return () =>
        router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`} strategy='afterInteractive'/>
      <Script id='google-analytics-script' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
        `}

      </Script>
      <Navbar />
      <Component {...pageProps} />
      
      <FloatingWhatsApp 
      phoneNumber='123456789'
      accountName='AT Martins Caldeiraria'
      statusMessage='Online'
      allowClickAway
      darkMode
      chatMessage={'Olá, como podemos te ajudar?'} 
      placeholder='Mensagem'
      />
      <Footer />
      
    </>
  );
}

export default MyApp;
