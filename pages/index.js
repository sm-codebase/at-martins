import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AT Martins | Caldeiraria</title>
        <meta name="description" content="" />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}
