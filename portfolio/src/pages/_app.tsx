import '../styles/globals.css'
import Image from 'next-export-optimize-images/dist/image'
import type { AppProps } from 'next/app'
import BackImage from '../../public/backimage.jpg'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Image
        src={BackImage}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt='backgroundimage'
      />
    </>
  )
}

export default MyApp
