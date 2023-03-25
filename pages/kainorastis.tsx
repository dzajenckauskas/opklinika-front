import Head from 'next/head'
import KainorastisPage from '@/components/pages/KainorastisPage'
import { getCustomerReviewsQuery } from '@/app/reviews/getCustomerReviewsQuery'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { ReviewsResponseType } from '@/app/services/ReviewTypes'

type Props = {
  reviews: ReviewsResponseType;
}

export default function Kainorastis({ reviews }: Props) {
  return (
    <>
      <Head>
        <title>Ortopedijos paslaugų klinika: Kontaktai</title>
        <meta name="description" content="Ortopedijos paslaugų klinika" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <KainorastisPage reviews={reviews} />
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const reviews = await axios.get(getCustomerReviewsQuery())

  return {
    props: {
      reviews: reviews.data
    }
  }
}

