import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BackImage from '../../public/backimage.jpg'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          background-image: url(${BackImage.src});
        }
      `}</style>
    </>
  )
}

export default MyApp
