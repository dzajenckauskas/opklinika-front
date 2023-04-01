import { getProductQuery } from '@/app/products/getProductQuery'
import { ProductType } from '@/app/products/productTypes'
import Footer from '@/components/Footer'
import Header from '@/components/layout/Header'
import ProductViewPage from '@/components/pages/ProductViewPage'
import Stack from '@mui/material/Stack'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'

type Props = {
    product: ProductType;
}

const ProductView = ({ product }: Props) => {
    return (
        <>
            <Head>
                <title>{`${product.attributes.title} - Ortopedijos paslaugų klinika`}</title>
                <meta name="description" content={`${product.attributes.title}. ${product.attributes.description}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug = context.query.slug

    const data = await axios.get(getProductQuery(slug))
    return {
        props: {
            product: data.data.data[0],
        }
    }
}
