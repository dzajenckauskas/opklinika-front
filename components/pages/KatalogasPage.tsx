import { ProductsType } from '@/app/products/productTypes'
import { ReviewsResponseType } from '@/app/services/ReviewTypes'
import { Grid, Pagination } from '@mui/material'
import Stack from '@mui/material/Stack'
import { useRouter } from 'next/router'
import { ChangeEvent } from 'react'
import Layout from '../Layout'
import ProductCard from '../products/ProductCard'

type Props = {
    products?: ProductsType;
    reviews?: ReviewsResponseType
}

const KatalogasPage = ({ products, reviews }: Props) => {
    const renderProducts = products?.data.map((product) => (
        <ProductCard product={product} key={product.id} />
    ))
    const router = useRouter()
    const handleChange = (e: ChangeEvent<unknown>, p: number) => {
        router.push({
            query: { ...router.query, page: p.toString() },
        })
    };
    const { page } = router.query

    return (
        <Layout title={'ORTOPEDIJOS PRIEMONĖS'} color={"#1E6EA1"} reviews={reviews}>
            <Stack color={'primary.main'} direction={'row'} sx={{ maxWidth: '1200px', mx: 'auto', px: { lg: 4, md: 4, sm: 3, xs: 3 }, }}>
                <Stack spacing={4} direction={'column'}>
                    {products && <Grid container spacing={4}>
                        {renderProducts}
                    </Grid>}
                    {products && products?.meta.pagination.pageCount > 1 &&
                        <Stack direction={'row'} mb={4} width={'100%'} justifyContent={'center'} pt={2}>
                            <Pagination count={products?.meta.pagination.pageCount} page={page ? Number(page) : 1}
                                onChange={handleChange} color={'primary'} shape="rounded" />
                        </Stack>}
                </Stack>
            </Stack>
        </Layout>
    )
}

export default KatalogasPage