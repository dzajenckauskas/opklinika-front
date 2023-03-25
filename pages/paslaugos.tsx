import { getCustomerReviewsQuery } from '@/app/reviews/getCustomerReviewsQuery';
import { getServicesQuery } from '@/app/services/getServicesQuery';
import { ReviewsResponseType } from '@/app/services/ReviewTypes';
import PaslaugosPage from '@/components/pages/PaslaugosPage';
import axios from 'axios'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

type Props = {
  services: any;
  reviews: ReviewsResponseType
}
export default function Paslaugos({ services, reviews }: Props) {
  return (
    <>
      <Head>
        <title>Ortopedijos paslaugų klinika: Kontaktai</title>
        <meta name="description" content="Ortopedijos paslaugų klinika" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PaslaugosPage services={services} reviews={reviews} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await axios.get(getServicesQuery())
  const reviews = await axios.get(getCustomerReviewsQuery())

  return {
    props: {
      services: data.data,
      reviews: reviews.data
    }
  }
}
