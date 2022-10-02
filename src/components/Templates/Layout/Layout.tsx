import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../../Organisms/Navbar'
import Sidebar from '../../Organisms/Sidebar'
import Menubar from '../../Organisms/Menubar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className='w-full' id='home'>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className='w-full'>
      <Navbar />
    </header>
    {children}
  </div>
)

export default Layout
