import Head from 'next/head'
import KainorastisPage from '@/components/pages/KainorastisPage'
import { getCustomerReviewsQuery } from '@/app/reviews/getCustomerReviewsQuery'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { ReviewsResponseType } from '@/app/services/ReviewTypes'
import { PricelistsResponseType, PricelistType } from '@/app/pricelists/PricelistTypes'

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
export const getServerSideProps: GetServerSideProps = async (context) => {
  const reviews = await axios.get(getCustomerReviewsQuery())
  const pricelists = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/pricelists?populate=*`)

  return {
    props: {
      pricelists: pricelists.data,
      reviews: reviews.data
    }
  }
}

