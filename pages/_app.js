import '../assets/styles/globals.scss'
import '../assets/styles/variables.scss'

import '../navigations/nav/nav.scss'

import '../containers/hero/hero.scss'
import '../containers/works/works.scss'

import '../components/modal/modal.scss'
import '../components/background/background.scss'
import '../components/slider/slider.scss'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
