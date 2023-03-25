import { ProductsType } from '@/app/products/productTypes';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React from 'react'
import { getColors } from '../layout/colors'
import ProductCard from '../products/ProductCard';

type Props = {
    products: ProductsType;
    color?: string;

}

const ProductsSection = ({ products, color }: Props) => {
    const colors = getColors()
    const renderProducts = products?.data.map((product) =>
        <ProductCard product={product} key={product.id} preview />
    )
    return (
        <>
            <Stack sx={{
                backgroundColor: colors.softGrey, mx: 'auto',
                width: '100%', position: 'relative', zIndex: 99,
            }}>
                <Stack sx={{ maxWidth: '1200px', mx: 'auto', px: { lg: 4, md: 4, sm: 3, xs: 3 } }}>
                    <Stack sx={{
                        maxWidth: '1200px', mx: 'auto',
                        px: { lg: 4, md: 4, sm: 3, xs: 3 },
                    }} pt={2} pb={10} alignItems={'center'} >
                        <Typography variant='h1' color={color ?? '#1E6EA1'} py={5} textAlign={'center'}>
                            {'NAUJI PRODUKTAI'}
                        </Typography>
                        <Stack color={'primary.main'} direction={'row'} sx={{
                            maxWidth: '1200px', mx: 'auto',
                            px: { lg: 4, md: 4, sm: 3, xs: 3 },
                        }}>
                            <Stack spacing={4} direction={'column'}>
                                {products &&
                                    <Grid container spacing={4}>
                                        {renderProducts}
                                    </Grid>}
                                <Link passHref href={'/katalogas'}>
                                    <Stack pt={2} direction={'row'} justifyContent={'center'}>
                                        <Button sx={{ fontSize: 14 }} variant='outlined'>PRODUKTŲ KATALOGAS</Button>
                                    </Stack>
                                </Link>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default ProductsSection