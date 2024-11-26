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
import { GetStaticProps } from 'next'
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
        <title>Ortopedijos paslaugų klinika | Kokybiškos Ortopedijos Paslaugos Vilniuje</title>
        <meta
          name="description"
          content="Ortopedijos paslaugų klinika Vilniuje teikia profesionalias ortopedijos paslaugas: konsultacijos, diagnostika, reabilitacija ir individualių ortopedinių priemonių gamyba. Rūpinamės jūsų sveikata ir judėjimo komfortu."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_URL} />

        <meta property="og:title" content="Ortopedijos paslaugų klinika | Kokybiškos Ortopedijos Paslaugos Vilniuje" />
        <meta
          property="og:description"
          content="Apsilankykite Ortopedijos paslaugų klinikoje Vilniuje! Teikiame profesionalias konsultacijas, ortopedinių priemonių gamybą, reabilitacijos paslaugas. Mūsų prioritetas – jūsų sveikata!"
        />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_URL}/media/homepage-banner.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ortopedijos paslaugų klinika | Kokybiškos Ortopedijos Paslaugos Vilniuje" />
        <meta
          name="twitter:description"
          content="Profesionali ortopedijos klinika Vilniuje – individualios ortopedinės priemonės, konsultacijos ir reabilitacija. Kreipkitės į mūsų specialistus šiandien!"
        />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_URL}/media/homepage-banner.jpg`} />

        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="ortopedijos klinika Vilniuje, ortopedijos paslaugos, reabilitacija Vilnius, ortopediniai įtvarai, ortopedinės priemonės, ortopedijos specialistai, protezai, ortopedinės konsultacijos"
        />
        <meta name="author" content="Ortopedijos paslaugų klinika" />

        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Ortopedijos paslaugų klinika",
      "url": "${process.env.NEXT_PUBLIC_URL}",
      "logo": "${process.env.NEXT_PUBLIC_URL}/favicon.ico",
      "description": "Profesionali ortopedijos klinika Vilniuje. Gydytojų konsultacijos, diagnostika, reabilitacija ir individualių ortopedijos priemonių gamyba.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Laisvės pr. 77",
        "addressLocality": "Vilnius",
        "addressCountry": "LT"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+37060792111",
        "contactType": "customer service"
      }
    }
    `}
        </script>

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
export const getStaticProps: GetStaticProps = async () => {
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


