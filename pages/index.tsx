import { getCustomerReviewsQuery } from '@/app/reviews/getCustomerReviewsQuery'
import { getServicesQuery } from '@/app/services/getServicesQuery'
import HomePage from '@/components/pages/HomePage'
import Stack from '@mui/material/Stack'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

type Props = {
  services: any;
  reviews: any;
}

export default function Home({ services, reviews }: Props) {
  console.log(services);

  return (
    <>
      <Head>
        <title>Ortopedijos paslaugų klinika</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack sx={{ minHeight: '100vh', backgroundColor: '#fff' }}>
        <HomePage services={services}
          reviews={reviews}
        />

      </Stack>
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

