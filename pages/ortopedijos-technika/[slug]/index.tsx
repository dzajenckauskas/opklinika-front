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
