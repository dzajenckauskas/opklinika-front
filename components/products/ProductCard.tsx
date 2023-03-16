import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import React from 'react'
import Image from 'next/legacy/image'
import { ProductType } from '@/app/products/productTypes'

type Props = {
    product: ProductType;
}
const ProductCard = ({ product }: Props) => {
    const imageUrl = product.attributes.images?.data && product.attributes.images?.data[0].attributes.url
    return (
        <>
            <Grid item lg={3} md={4} sm={6} xs={12} >
                <Stack sx={{
                    minWidth: '200px',
                    backgroundColor: '#fff',
                    width: '100%', position: 'relative', display: 'flex',
                    flexDirection: 'column', justifyContent: 'space-between',
                    minHeight: '100%',
                    boxShadow: 'rgba(0, 0, 0, 0.15) 2px 6px 16px !important'
                }}>
                    <Stack>
                        <Link passHref href={`/products/${product.id}`} style={{ width: '100%' }}>
                            <Stack sx={{ '::hover': { opacity: .8 }, px: 2, pt: 3 }}>
                                {imageUrl && <Image src={imageUrl}
                                    alt={product.attributes.images?.data && product.attributes.images?.data[0].attributes.alternativeText} height={340} width={340} objectFit={'contain'} />}
                            </Stack>
                        </Link>
                        <CardContent>
                            <Typography gutterBottom variant="h2" color={"primary"} lineHeight={'22px'} fontWeight={900}
                                sx={{ ':hover': { filter: 'brightness(75%)', cursor: 'pointer' } }}>
                                {(product.attributes.title.toUpperCase())}
                            </Typography>
                            <Typography variant="h5">
                                {product.attributes.category?.data?.attributes.title}
                            </Typography>
                            <Typography variant="h5" fontWeight={700} color={"primary"}>
                                {product.attributes.typeGroup}
                            </Typography>
                        </CardContent>
                    </Stack>
                    <CardActions sx={{ p: 0, pt: 0, position: 'relative', bottom: 0 }}>
                        <Link passHref href={`/products/${product.id}`} style={{ width: '100%' }}>
                            <Button size="large" color="primary" variant='contained' fullWidth
                                sx={{ borderRadius: 0, height: '50px' }}>
                                Peržiūrėti
                            </Button>
                        </Link>
                    </CardActions>
                </Stack>
            </Grid>
        </>
    )
}

export default ProductCard