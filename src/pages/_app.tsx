import '../styles/global.scss'
import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'
import { FunctionComponent } from 'react'

const Ello: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default Ello
