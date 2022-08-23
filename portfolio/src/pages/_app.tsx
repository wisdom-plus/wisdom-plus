import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'

const BackImage = 'https://tomoron.github.io/tomoron/backimage.jpg'

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
