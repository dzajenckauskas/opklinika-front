import { ProductsType } from '@/app/products/productTypes';
import { getCustomerReviewsQuery } from '@/app/reviews/getCustomerReviewsQuery';
import { ReviewsResponseType } from '@/app/services/ReviewTypes';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react'
import Head from 'next/head'
import PrivacyPolicyPagePage from '@/components/pages/PrivacyPolicyPagePage';

type Props = {
    reviews: ReviewsResponseType;

}
export default function PrivacyPolicyPage({ reviews }: Props) {
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
    const reviews = await axios.get(getCustomerReviewsQuery())

    return {
        props: {
            reviews: reviews.data
        }
    }
}
