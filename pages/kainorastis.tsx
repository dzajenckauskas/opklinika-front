import Head from 'next/head'
import Stack from '@mui/material/Stack'
import KainorastisPage from '@/components/pages/KainorastisPage'

export default function Kainorastis() {
  return (
    <>
      <Head>
        <title>Ortopedijos paslaugų klinika: Kontaktai</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <KainorastisPage />
    </>
  )
}