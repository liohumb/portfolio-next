import Head from 'next/head'
import Nav from '../navigations/nav/Nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lionel Humbert • Web Dev</title>
        <meta name="author"
              content="Lionel Humbert"/>
        <meta name="description"
              content="Lionel Humbert alias Lio Humb, développeur web FullStack (junior 🤫) ascendant créatif." />
        <meta name="keywords"
              content="Développeur web, Développeur JavaScript, Développeur React, Next.js, Three js, GSAP, SASS,
              SCSS, HTML, FRONTEND, BACKEND, FULLSTACK"/>
        <meta name="viewport"
              content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
    </>
  )
}
