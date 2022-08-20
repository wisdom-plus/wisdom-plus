import Head from 'next/head'

type Props = {
  children?: JSX.Element
}

const MainHead = ({ children }: Props) => {
  return (
    <div className='max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0'>
      <Head>
        <title>Tomoshi's portfolio</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Tomoshi%aposs portfolio Homepage' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0 '>
        {children}
      </main>
    </div>
  )
}

export default MainHead
