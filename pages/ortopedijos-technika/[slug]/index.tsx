import { getProductQuery } from '@/app/products/getProductQuery'
import { getProductsQuery } from '@/app/products/getProductsQuery'
import { ProductType } from '@/app/products/productTypes'
import Footer from '@/components/Footer'
import Header from '@/components/layout/Header'
import ProductViewPage from '@/components/pages/ProductViewPage'
import Stack from '@mui/material/Stack'
import axios from 'axios'
import Head from 'next/head'

type Props = {
    product: ProductType;
}

const ProductView = ({ product }: Props) => {
    const imageUrl = product?.attributes?.images?.data && product?.attributes.images?.data?.[0]?.attributes.url

    return (
        <>
            <Head>
                <title>{`${product?.attributes?.title} | ${product?.attributes?.category?.data?.attributes.title} | ${product?.attributes?.type} | Ortopedijos paslaugų klinika`}</title>
                <meta
                    name="description"
                    content={`${product?.attributes?.title} - ${product?.attributes?.description}. Atraskite aukštos kokybės ${product?.attributes?.type} priemones, pritaikytas pagal individualius poreikius. Užsakykite dabar!`}
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href={`${process.env.NEXT_PUBLIC_URL}/ortopedijos-technika/${product?.attributes?.slug}`} />

                <meta property="og:title" content={`${product?.attributes?.title} | ${product?.attributes?.category?.data?.attributes.title} | ${product?.attributes?.type} | Ortopedijos paslaugų klinika`} />
                <meta
                    property="og:description"
                    content={`${product?.attributes?.title} - ${product?.attributes?.description}. Užsakykite dabar ir pagerinkite savo judėjimo komfortą. Aukštos kokybės ${product?.attributes?.type} priemonės pagal individualius poreikius.`}
                />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_URL}/ortopedijos-technika/${product?.attributes?.slug}`} />
                <meta property="og:type" content="product" />
                <meta
                    property="og:image"
                    content={`${process.env.NEXT_PUBLIC_URL}/${imageUrl}`}
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${product?.attributes?.title} | ${product?.attributes?.category?.data?.attributes.title} | ${product?.attributes?.type} | Ortopedijos paslaugų klinika`} />
                <meta
                    name="twitter:description"
                    content={`${product?.attributes?.title} - ${product?.attributes?.description}. Pasirūpinkite savo sveikata ir komfortu su mūsų ${product?.attributes?.type} priemonėmis.`}
                />
                <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_URL}/${imageUrl}`} />

                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content={`${product?.attributes?.title}, ortopedijos priemonės, ortopediniai produktai, ${product?.attributes?.category?.data?.attributes.title}, ${product?.attributes?.type}, aukštos kokybės ortopedija, individualūs ortopedijos sprendimai`}
                />
                <meta name="author" content="Ortopedijos paslaugų klinika" />

                <script type="application/ld+json">
                    {`
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "${product?.attributes?.title}",
        "description": "${product?.attributes?.description}",
        "url": "${process.env.NEXT_PUBLIC_URL}/ortopedijos-technika/${product?.attributes?.slug}",
        "image": "${process.env.NEXT_PUBLIC_URL}/${imageUrl}",
        "brand": "Ortopedijos paslaugų klinika",
        "sku": "${product?.attributes?.type}",
        "category": "${product?.attributes?.category?.data?.attributes.title}",
        "productType": "${product?.attributes?.type}",
        "offers": {
          "@type": "Offer",
          "url": "${process.env.NEXT_PUBLIC_URL}/ortopedijos-technika/${product?.attributes?.slug}",
          "priceCurrency": "EUR",
          "price": "${product?.attributes?.price}",
          "priceValidUntil": "2024-12-31",
          "availability": "https://schema.org/InStock"
        }
      }
    `}
                </script>

                <link rel="icon" href="/favicon.ico" />
            </Head>



            <Stack sx={{ minHeight: '100vh', height: '100%', backgroundColor: '#f9f9f9' }}>
                <Header />
                <ProductViewPage product={product} />
                <Footer />
            </Stack>
        </>
    )
}
export default ProductView

export async function getStaticPaths() {
    const pages = await axios.get(getProductsQuery())
    const paths = pages.data.data?.map((page: ProductType) => ({
        params: { slug: page?.attributes.slug },
    }))

    return {
        paths,
        fallback: false,
    }
}


export const getStaticProps = async (context: any) => {
    const slug = context.params?.slug
    const data = await axios.get(getProductQuery(slug))
    return {
        props: {
            product: data.data.data[0],
        }
    }
}
