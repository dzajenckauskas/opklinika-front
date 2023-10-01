import { ProductType } from '@/app/products/productTypes';
import { ArrowBack } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { getColors } from '../layout/colors';

type Props = {
    product: ProductType;
}

const ProductViewPage = ({ product }: Props) => {
    const imageUrl = product?.attributes?.images?.data && product?.attributes.images?.data[0]?.attributes.url
    const colors = getColors()

    return (
        <Stack alignItems={'flex-start'} p={4} maxWidth={'lg'} mx={'auto'} minHeight={'80vh'} sx={{ backgroundColor: '#f9f9f9' }}>
            <Link href={'/ortopedijos-technikos-katalogas/1'} >
                <Stack direction={'row'} sx={{ alignItems: 'center' }}>
                    <ArrowBack sx={{ height: '14px', color: colors.primary }} />
                    <Button size="small" disableRipple sx={{
                        display: 'flex', flexDirection: 'row', alignContent: 'center',
                        ':hover': { backgroundColor: 'transparent', textDecoration: 'underline' }
                    }}>
                        {"Ortopedijos priemonių katalogas"}
                    </Button>
                </Stack>
            </Link>
            <Stack color={'primary.main'} direction={'row'} >
                <Stack mt={{ lg: 4, md: 4, sm: 4, xs: 2 }} spacing={{ lg: 4, md: 2, sm: 4, xs: 2 }} pb={10}>
                    <Stack sx={{ color: 'primary.main' }} direction={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }} pb={4}
                        spacing={{ lg: 4, md: 4, sm: 4, xs: 4 }}>
                        {imageUrl &&
                            <Stack sx={{ backgroundColor: '#fff', boxShadow: 'rgba(0, 0, 0, 0.15) 2px 6px 16px !important' }}>
                                <Image alt={product?.attributes.title}
                                    src={imageUrl} width={1093} height={1051} objectFit={'contain'} />
                            </Stack>}
                        <Stack spacing={1}>
                            <Typography variant='h1' maxWidth={600} textTransform={'uppercase'} pb={2}>
                                {product?.attributes?.title}
                            </Typography>
                            {product?.attributes?.category?.data?.attributes.title &&
                                <Typography color={colors.primary} fontSize={12}>
                                    {'KATEGORIJA '} <br />
                                    <span style={{ fontWeight: 600, color: colors.grey, fontSize: 16, lineHeight: '14px', textTransform: 'uppercase' }}>
                                        {product?.attributes?.category?.data?.attributes.title}
                                    </span>
                                </Typography>}
                            {/* {product?.attributes?.price &&
                                <Typography color={colors.primary} fontSize={12}>
                                    {'KAINA '} <br />
                                    <span style={{ fontWeight: 600, color: colors.grey, fontSize: 16, lineHeight: '14px' }}>{product?.attributes.price}€</span>
                                </Typography>} */}
                            {product?.attributes?.prices &&
                                <Typography color={colors.primary} fontSize={12}>
                                    {'KAINOS '} <br />
                                    <span style={{ fontWeight: 600, color: colors.grey, fontSize: 16, lineHeight: '14px' }}>{product?.attributes.prices}€</span>
                                </Typography>}
                            <Typography fontSize={12} color={colors.primary}>
                                {'TIPAS '} <br />
                                <span style={{ fontWeight: 600, color: colors.grey, fontSize: 16, lineHeight: '14px' }}>{product?.attributes?.type}</span>
                            </Typography>
                            <Typography variant='body1' fontSize={14} lineHeight={'18px'} color={colors.grey} pt={1} textAlign={'justify'}>
                                <span style={{ fontWeight: 600, textTransform: 'uppercase', lineHeight: '30px', fontSize: '16px' }}> {'Techninis aprašymas ir paskirtis'}</span> <br />
                                {product?.attributes?.description}
                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack direction={'column'} sx={{ border: '1px solid #1e6da1', color: '#000000DE', boxShadow: 'rgba(0, 0, 0, 0.15) 2px 6px 16px !important' }}>
                        {product.attributes?.diagnosesTable.map((diagnose, index) => (
                            <Stack key={diagnose.id} sx={{ boxShadow: 'rgba(0, 0, 0, 0.15) 2px 6px 16px !important' }}>
                                {product.attributes.diagnosesTable[(index) !== 1 ? index - 1 : 0]?.percent !== product.attributes.diagnosesTable[index].percent &&
                                    <Stack>
                                        <Stack direction={'row'} justifyContent={'space-between'} width={{ lg: '100%', md: '100%', sm: '100%', xs: '100%' }}
                                            sx={{ py: 0, px: 1, backgroundColor: colors.primary }}>
                                            <Typography color={colors.white} fontSize={22} py={1} fontWeight={600} textTransform={'uppercase'}>
                                                {'Kompensuojama'} {diagnose.percent}{'%'}
                                            </Typography>
                                        </Stack>
                                        <Stack direction={{ lg: 'row', md: 'row', sm: 'row', xs: 'column' }} sx={{ backgroundColor: '#fff', border: '1px solid #1e6da1', }} >
                                            <Stack width={{ lg: '50%', md: '50%', sm: '50%', xs: '100%' }} direction={'row'} p={1} sx={{ borderRight: '1px solid #1e6da1' }}>
                                                <Typography color={colors.primary} fontSize={16} fontWeight={600} textTransform={'uppercase'} lineHeight={'15px'} >
                                                    {'Diagnozės'}
                                                </Typography>
                                            </Stack>
                                            <Stack display={{ lg: 'flex', md: 'flex', sm: 'flex', xs: 'none' }} width={{ lg: '50%', md: '50%', sm: '50%', xs: '100%' }} direction={'row'} alignItems={'center'} p={1} sx={{ borderLeft: '1px solid #1e6da1' }}>
                                                <Typography color={colors.primary} fontSize={16} fontWeight={600} textTransform={'uppercase'} lineHeight={'15px'} >
                                                    {'Gydytojai'}
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                }
                                <Stack direction={{ lg: 'row', md: 'row', sm: 'row', xs: 'column' }} sx={{ border: '.5px solid #1e6da1', backgroundColor: '#fff' }} >
                                    <Stack width={{ lg: '50%', md: '50%', sm: '50%', xs: '100%' }}>
                                        {diagnose.diagnoses?.map((diagnose) => (
                                            <Stack key={diagnose.id} sx={{ border: '.5px solid #1e6da1', borderRight: '1px solid #1e6da1', p: 1, height: '100%', alignItems: 'center' }} direction={'row'}>
                                                <Typography fontSize={14} lineHeight={'18px'}>
                                                    {diagnose.diagnose}
                                                </Typography>
                                            </Stack>
                                        ))}
                                    </Stack>
                                    <Stack width={{ lg: '50%', md: '50%', sm: '50%', xs: '100%' }} direction={'row'} alignItems={'center'} p={1
                                    } sx={{ border: '1px solid #1e6da1' }} display={{ lg: 'none', md: 'none', sm: 'none', xs: 'flex' }}>
                                        <Typography color={colors.primary} fontSize={16} fontWeight={600} textTransform={'uppercase'} lineHeight={'15px'} >
                                            {'Gydytojai'}
                                        </Typography>
                                    </Stack>
                                    <Stack justifyContent={'center'} width={{ lg: '50%', md: '50%', sm: '50%', xs: '100%' }}
                                        sx={{ border: '.5px solid #1e6da1', p: 1, borderLeft: '1px solid #1e6da1', }}>
                                        <Typography fontSize={14} lineHeight={'15px'} textAlign={{ lg: 'center', md: 'center', sm: 'center', xs: 'left' }}>
                                            {diagnose.specialists}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                    {product?.attributes?.notes?.map((note) => (
                        <Stack key={note.id} justifyContent={'center'} width={{ lg: '100%', md: '100%', sm: '100%', xs: '100%' }} pt={0}>
                            <Typography color={colors.primary} fontStyle={'italic'} fontSize={12} lineHeight={'14px'}>
                                {note?.text}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Stack>

    )
}

export default ProductViewPage