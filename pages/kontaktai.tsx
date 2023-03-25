import KontaktaiPage from '@/components/pages/KontaktaiPage'
import Head from 'next/head'

export default function Kontaktai() {
  return (
    <>
      <Head>
        <title>Ortopedijos paslaugų klinika: Kontaktai</title>
        <meta name="description" content="Ortopedijos paslaugų klinika" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <KontaktaiPage />
    </>
  )
}
