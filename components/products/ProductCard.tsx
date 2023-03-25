import { ProductType } from '@/app/products/productTypes'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { getColors } from '../layout/colors'

type Props = {
    product: ProductType;
    preview?: boolean;
}
const ProductCard = ({ product, preview }: Props) => {
    const colors = getColors()
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
                    {product.attributes.isNew &&
                        <CardActions sx={{ p: 0, pt: 0, position: 'absolute', top: 16, zIndex: 99 }}>
                            <Button size="large" variant='contained'
                                sx={{ borderRadius: 0, height: '30px', opacity: '80%', textAlign: 'left' }}>
                                NAUJAS!
                            </Button>
                        </CardActions>}
                    <Stack>
                        <Link passHref href={`/produktai/${product.attributes.slug}`} style={{ width: '100%' }}>
                            <Stack sx={{ '::hover': { opacity: .8 }, px: 2, pt: 3 }}>
                                {imageUrl && <Image src={imageUrl}
                                    alt={product.attributes.images?.data && product.attributes.images?.data[0].attributes.name}
                                    height={340} width={340} objectFit={'contain'} />}
                            </Stack>
                        </Link>
                        <Stack px={2} py={2}>
                            <Link passHref href={`/produktai/${product.attributes.slug}`} style={{ width: '100%' }}>
                                <Typography gutterBottom color={colors.primary} fontWeight={900}
                                    sx={{ ':hover': { filter: 'brightness(75%)', cursor: 'pointer' } }}>
                                    {(product.attributes.title)}
                                </Typography>
                            </Link>
                            {!preview && <>
                                {product?.attributes.category?.data?.attributes.title &&
                                    <Typography color={colors.primary} fontSize={12}>
                                        {'KATEGORIJA '} <br />
                                        <span style={{ fontWeight: 600, color: colors.grey, fontSize: 14, lineHeight: '12px', textTransform: 'uppercase' }}>{product?.attributes.category?.data?.attributes.title}</span>
                                    </Typography>}
                                {product?.attributes.type &&
                                    <Typography color={colors.primary} fontSize={12} pt={1}>
                                        {'TIPAS '} <br />
                                        <span style={{
                                            fontWeight: 600, color: colors.grey, fontSize: 14,
                                            lineHeight: '12px', textTransform: 'uppercase'
                                        }}>{product?.attributes.type}</span>
                                    </Typography>}
                            </>}
                        </Stack>
                    </Stack>
                    <CardActions sx={{ p: 0, pt: 0, position: 'relative', bottom: 0 }}>
                        <Link passHref href={`/produktai/${product.attributes.slug}`} style={{ width: '100%' }}>
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