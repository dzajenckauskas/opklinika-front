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
        <title>Ortopedijos paslaugų kainoraštis - Ortopedijos paslaugų klinika</title>
        <meta name="description" content="Ortopedijos paslaugų kainoraštis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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

