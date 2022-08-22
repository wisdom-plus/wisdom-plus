import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import BackImage from 'public/backimage.jpg'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Image src={BackImage} layout='fill' objectFit='cover' objectPosition='center' />
    </>
  )
}

export default MyApp
