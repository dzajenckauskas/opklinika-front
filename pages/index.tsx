import { ProductAttributesType, ProductsType } from '@/app/products/productTypes'
import { getCustomerReviewsQuery } from '@/app/reviews/getCustomerReviewsQuery'
import { getServicesQuery } from '@/app/services/getServicesQuery'
import { ReviewsResponseType } from '@/app/services/ReviewTypes'
import { ServicesResponseType } from '@/app/services/ServiceType'
import HomePage from '@/components/pages/HomePage'
import Stack from '@mui/material/Stack'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

type Props = {
  services: ServicesResponseType;
  products: ProductsType;
  reviews: ReviewsResponseType;
}

export default function Home({ products, services, reviews }: Props) {
  return (
    <>
      <Head>
        <title>Ortopedijos paslaugų klinika</title>
        <meta name="description" content="Ortopedijos paslaugų klinika" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack sx={{ minHeight: '100vh', backgroundColor: '#fff' }}>
        <HomePage services={services}
          reviews={reviews}
          products={products}
        />

      </Stack>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const services = await axios.get(getServicesQuery())
  const reviews = await axios.get(getCustomerReviewsQuery())
  const products = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products?filters[isNew][$eq]=true&populate=*`)

  return {
    props: {
      products: products.data,
      services: services.data,
      reviews: reviews.data
    }
  }
}


