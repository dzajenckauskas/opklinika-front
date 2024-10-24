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
                <title>Ortopedijos technikos katalogas - Ortopedijos paslaugų klinika</title>
                <meta name="description" content="Ortopedijos paslaugų klinika" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
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
