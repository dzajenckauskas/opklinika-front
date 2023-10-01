import { getCustomerReviewsQuery } from '@/app/reviews/getCustomerReviewsQuery';
import { ReviewsResponseType } from '@/app/services/ReviewTypes';
import PrivacyPolicyPagePage from '@/components/pages/PrivacyPolicyPagePage';
import axios from 'axios';
import { GetStaticProps } from 'next';
import Head from 'next/head';

type Props = {
    reviews: ReviewsResponseType;
}
export default function PrivacyPolicyPage({ reviews }: Props) {
    return (
        <>
            <Head>
                <title>Privatumo politika - Ortopedijos paslaugų klinika</title>
                <meta name="description" content="Ortopedijos paslaugų klinika" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PrivacyPolicyPagePage reviews={reviews} />
        </>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const reviews = await axios.get(getCustomerReviewsQuery())
    return {
        props: {
            reviews: reviews.data
        }
    }
}
