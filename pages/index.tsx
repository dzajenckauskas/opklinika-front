import { getCategoriesQuery } from '@/app/categories/getCategoriesQuery'
import { CategoriesResponseType } from '@/app/categories/ServiceType'
import { ProductsType } from '@/app/products/productTypes'
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
  categories: CategoriesResponseType;
  newProducts: ProductsType;
  individualProducts: ProductsType;
  reviews: ReviewsResponseType;
}

export default function Home({ newProducts, individualProducts, services, reviews, categories }: Props) {
  return (
    <>
      <Head>
        <title>Ortopedijos paslaugų klinika</title>
        <meta name="description" content="Ortopedijos paslaugų klinika pagal individualius poreikius
         parenka, pritaiko ir gamina ortopedijos priemones, bei techniką Vilniuje" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack sx={{ minHeight: '100vh', backgroundColor: '#fff' }}>
        <HomePage services={services}
          reviews={reviews}
          individualProducts={individualProducts}
          newProducts={newProducts}
          categories={categories}
        />

      </Stack>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const services = await axios.get(getServicesQuery())
  const categories = await axios.get(getCategoriesQuery())
  const reviews = await axios.get(getCustomerReviewsQuery())
  const newProducts = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products?filters[isNew][$eq]=true&populate=*`)
  const individualProducts = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products?filters[individualyMade][$eq]=true&populate=*`)

  return {
    props: {
      newProducts: newProducts.data,
      individualProducts: individualProducts.data,
      services: services.data,
      categories: categories.data,
      reviews: reviews.data
    }
  }
}


