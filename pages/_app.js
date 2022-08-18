import Navbar from '../components/Navbar';
import '../styles/globals.css';
import FloatingWhatsApp from 'react-floating-whatsapp'
import { ReactComponent as Logo} from '../public/assets/logoWhats.svg'


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
      avatar={Logo}
      darkMode
      chatMessage={'Olá, como podemos te ajudar?'} 
      placeholder='Mensagem'
      />
    </>
  );
}

export default MyApp;
