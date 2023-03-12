import { ProductsType } from '@/app/products/productTypes';
import KatalogasPage from '@/components/pages/KatalogasPage';
import axios from 'axios'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

type Props = {
    products: ProductsType;
}
export default function Katalogas({ products }: Props) {
    return (
        <>
            <Head>
                <title>Ortopedijos paslaugų klinika: Katalogas</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <KatalogasPage products={products} />
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products?pagination[page]=${context.query.page ?? 1}&pagination[pageSize]=20&populate=*`)

    return {
        props: {
            products: data.data,
        }
    }
}