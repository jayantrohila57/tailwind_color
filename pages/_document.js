import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gradient-to-b from-white to-slate-100 h-full w-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
