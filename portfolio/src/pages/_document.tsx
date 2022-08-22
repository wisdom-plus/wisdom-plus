import Document, { Html, Main, Head, NextScript } from 'next/document'
import Image from 'next/image'

class Mydocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head />
        <body className='font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Mydocument
