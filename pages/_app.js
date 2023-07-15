import { Fragment } from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  )
}