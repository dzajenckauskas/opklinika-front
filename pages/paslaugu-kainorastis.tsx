import { PricelistsResponseType } from '@/app/pricelists/PricelistTypes'
import { getCustomerReviewsQuery } from '@/app/reviews/getCustomerReviewsQuery'
import { ReviewsResponseType } from '@/app/services/ReviewTypes'
import KainorastisPage from '@/components/pages/KainorastisPage'
import axios from 'axios'
import { GetStaticProps } from 'next'
import Head from 'next/head'

type Props = {
  reviews: ReviewsResponseType;
  pricelists: PricelistsResponseType;
}

export default function Kainorastis({ reviews, pricelists }: Props) {
  return (
    <>
      <Head>
        <title>Ortopedijos paslaugų klinika | Profesionalios ortopedijos paslaugos Vilniuje</title>
        <meta
          name="description"
          content="Ortopedijos paslaugų klinika Vilniuje. Specializuotos gydytojų konsultacijos, diagnostika, reabilitacija ir individualių ortopedijos priemonių gamyba."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_URL}/paslaugu-kainorastis`} />

        <meta property="og:title" content="Ortopedijos paslaugų klinika | Profesionalios ortopedijos paslaugos Vilniuje" />
        <meta
          property="og:description"
          content="Aukštos kokybės ortopedijos paslaugos Vilniuje: gydytojų konsultacijos, reabilitacija, ortopedinių priemonių pritaikymas pagal individualius poreikius."
        />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_URL}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_URL}/media/ortopedija.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ortopedijos paslaugų klinika | Profesionalios ortopedijos paslaugos Vilniuje" />
        <meta
          name="twitter:description"
          content="Profesionali ortopedijos klinika Vilniuje, siūlanti diagnostiką, gydymą, ir ortopedines priemones pritaikytas Jūsų poreikiams."
        />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_URL}/media/ortopedija.jpg`} />

        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="ortopedijos paslaugos Vilniuje, ortopedijos klinika Vilnius, ortopediniai įtvarai, reabilitacija Vilnius, ortopedinės priemonės" />
        <meta name="author" content="Ortopedijos paslaugų klinika" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <KainorastisPage reviews={reviews} pricelists={pricelists} />
    </>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const reviews = await axios.get(getCustomerReviewsQuery())
  const pricelists = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/pricelists?populate=*`)

  return {
    props: {
      pricelists: pricelists.data,
      reviews: reviews.data
    }
  }
}

