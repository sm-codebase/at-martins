import Navbar from '../components/Navbar';
import '../styles/globals.css';
import FloatingWhatsApp from 'react-floating-whatsapp'



function MyApp({ Component, pageProps }) {
  return (
    <>
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
    </>
  );
}

export default MyApp;
