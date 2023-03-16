import '@/styles/globals.css'
import type { AppProps } from 'next/app'
//import '../components/navbar.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
