import Head from 'next/head'
import Image from 'next/image'
import ProfileImage from '../../../public/profile-image.jpeg'

type Props = {
  children?: JSX.Element
}

const MainHead = ({ children }: Props) => {
  return (
    <div className='max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0 relative z-10'>
      <Head>
        <title>Tomoshi&apos;s portfolio</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Tomoshi%aposs portfolio Homepage' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0 '>
        {children}
      </main>
      <div className='w-full lg:w-2/5 hidden lg:block'>
        <Image
          className='rounded-none lg:rounded-lg shadow-2xl'
          src={ProfileImage}
          objectFit='cover'
          priority
          alt='profile image'
        />
      </div>
    </div>
  )
}

export default MainHead
