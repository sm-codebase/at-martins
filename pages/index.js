import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AT Martins | Caldeiraria</title>
        <meta name="description" content="Desenvolvemos soluções nas áreas de manutenção industrial conforme a necessidade do cliente, seguindo todas as normas e padrões exigidos." />
        <meta property='og:title' content='AT Martins Caldeiraria' />
        <meta
          property='og:description'
          content='Lanches maravilhosos pertinho de você'
        />
        <meta property='og:url' content='http://atmartinscaldeiraria.com.br/' />
        <meta property='og:type' content='website' />
        <link rel="icon" href="/logo.svg" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
