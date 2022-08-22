import Document, { Html, Main, Head, NextScript } from 'next/document'

class Mydocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head />
        <body className='font-sans antialiased text-gray-900 leading-normal tracking-wider'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Mydocument
