import { ProductsType } from '@/app/products/productTypes';
import { getCustomerReviewsQuery } from '@/app/reviews/getCustomerReviewsQuery';
import { ReviewsResponseType } from '@/app/services/ReviewTypes';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react'
import Head from 'next/head'
import PrivacyPolicyPagePage from '@/components/pages/PrivacyPolicyPagePage';

type Props = {
    products: ProductsType;
    reviews: ReviewsResponseType;

}
export default function PrivacyPolicyPage({ products, reviews }: Props) {
    return (
        <>
            <Head>
                <title>Ortopedijos paslaugų klinika: PrivacyPolicyPage</title>
                <meta name="description" content="Ortopedijos paslaugų klinika" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PrivacyPolicyPagePage reviews={reviews} />
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products?pagination[page]=${context.query.page ?? 1}&pagination[pageSize]=12&populate=deep`)
    const reviews = await axios.get(getCustomerReviewsQuery())

    return {
        props: {
            products: data.data,
            reviews: reviews.data

        }
    }
}
