import { ProductsType } from '@/app/products/productTypes';
import { getCustomerReviewsQuery } from '@/app/reviews/getCustomerReviewsQuery';
import { ReviewsResponseType } from '@/app/services/ReviewTypes';
import KatalogasPage from '@/components/pages/KatalogasPage';
import axios from 'axios'
import { GetStaticProps } from 'next'
import Head from 'next/head'

type Props = {
    products: ProductsType;
    reviews: ReviewsResponseType;

}
export default function Katalogas({ products, reviews }: Props) {
    return (
        <>
            <Head>
                <title>Ortopedijos technikos katalogas | Įtvarai, Protezai ir Avalynė</title>
                <meta
                    name="description"
                    content="Atraskite platų ortopedijos technikos pasirinkimą Vilniuje: įtvarai, protezai, ortopedinė avalynė ir kitos priemonės pagal individualius poreikius. Užsakykite dabar!"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href={`${process.env.NEXT_PUBLIC_URL}/ortopedijos-technikos-katalogas/1`} />

                <meta property="og:title" content="Ortopedijos technikos katalogas | Kokybiškos Priemonės Jūsų Sveikatai" />
                <meta
                    property="og:description"
                    content="Peržiūrėkite mūsų ortopedijos technikos katalogą: aukštos kokybės įtvarai, protezai, ortopedinė avalynė ir daugiau. Užtikrinkite komfortą ir sveikatą su mūsų sprendimais!"
                />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_URL}/ortopedijos-technikos-katalogas/1`} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_URL}/media/ortopedija.jpg`} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Ortopedijos technikos katalogas | Įtvarai, Protezai ir Avalynė" />
                <meta
                    name="twitter:description"
                    content="Mūsų ortopedijos technikos kataloge rasite įtvarus, protezus ir ortopedinę avalynę, pritaikytą jūsų individualiems poreikiams. Pasirūpinkite savo sveikata šiandien!"
                />
                <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_URL}/media/ortopedija.jpg`} />

                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="ortopedijos technikos katalogas, ortopediniai įtvarai, ortopedinė avalynė, protezai, reabilitacijos priemonės, ortopedijos sprendimai"
                />
                <meta name="author" content="Ortopedijos paslaugų klinika" />

                <script type="application/ld+json">
                    {`
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Ortopedijos technikos katalogas",
        "description": "Atraskite platų ortopedijos technikos pasirinkimą: įtvarai, protezai, avalynė ir kitos priemonės pagal individualius poreikius.",
        "url": "${process.env.NEXT_PUBLIC_URL}/ortopedijos-technikos-katalogas/1",
        "numberOfItems": 20,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "url": "${process.env.NEXT_PUBLIC_URL}/ortopedijos-technikos-katalogas/item1"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "url": "${process.env.NEXT_PUBLIC_URL}/ortopedijos-technikos-katalogas/item2"
          }
        ]
      }
    `}
                </script>

                <link rel="icon" href="/favicon.ico" />
            </Head>


            <KatalogasPage products={products} reviews={reviews} />
        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    id: '1',
                },
            },
            {
                params: {
                    id: '2',
                },
            },
            {
                params: {
                    id: '3',
                },
            }
        ],
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
    const id = context.params.id
    const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products?pagination[page]=${id ?? 1}&pagination[pageSize]=12&populate=*`)
    const reviews = await axios.get(getCustomerReviewsQuery())

    return {
        props: {
            products: data.data,
            reviews: reviews.data

        }
    }
}
