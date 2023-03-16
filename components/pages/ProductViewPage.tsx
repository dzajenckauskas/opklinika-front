import { ProductType } from '@/app/products/productTypes';
import { ArrowBack } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import { getColors } from '../layout/colors';

type Props = {
    product: ProductType;
}

const ProductViewPage = ({ product }: Props) => {
    const router = useRouter()
    const imageUrl = product?.attributes.images?.data && product?.attributes.images?.data[0]?.attributes.url
    console.log(product);

    const colors = getColors()
    return (
        <Stack alignItems={'flex-start'} p={4} maxWidth={'lg'} mx={'auto'} minHeight={'80vh'}>
            <Stack direction={'row'} sx={{ alignItems: 'center' }}>
                <ArrowBack sx={{ height: '14px', color: colors.primary }} />
                <Button onClick={() => router.push('/katalogas')} size="small" disableRipple sx={{
                    display: 'flex', flexDirection: 'row', alignContent: 'center',
                    ':hover': { backgroundColor: 'transparent', textDecoration: 'underline' }
                }}>
                    {"Katalogas"}
                </Button>
            </Stack>
            <Stack color={'primary.main'} direction={'row'} >
                <Stack mt={{ lg: 4, md: 4, sm: 4, xs: 2 }} spacing={{ lg: 4, md: 4, sm: 4, xs: 2 }}>
                    <Stack sx={{ color: 'primary.main' }} direction={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }}
                        spacing={{ lg: 4, md: 4, sm: 4, xs: 4 }}>
                        {imageUrl && <Stack sx={{ border: '1px solid' }}>
                            <Image alt={product?.attributes.images?.data[0]?.attributes.alternativeText}
                                src={imageUrl} width={1093} height={1051} objectFit={'contain'} />
                        </Stack>}
                        <Stack spacing={1}>
                            <Typography variant='h1'>
                                {product?.attributes.title}
                            </Typography>
                            <Typography variant='h2'>
                                {product?.attributes.price} Eur
                            </Typography>
                            <Typography fontWeight={600} color={'#000000DE'} fontSize={14}>
                                {'KATEGORIJA: '}
                                <span style={{ fontWeight: 600 }}>{product?.attributes.category?.data?.attributes.title}</span>
                            </Typography>
                            <Typography fontWeight={600} color={'#000000DE'} fontSize={14}>
                                {'TIPAS: '} <span style={{ fontWeight: 600 }}>{product?.attributes.type}</span>
                            </Typography>

                            <Typography variant='body1' fontSize={14} color={'#000000DE'} fontWeight={300}>
                                <span style={{ fontWeight: 600 }}> {'Techninis aprašymas ir paskirtis:'}</span> <br />
                                {product?.attributes.description}
                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack direction={'column'} sx={{ border: '0px solid #1e6da1', color: '#000000DE' }}>
                        {product.attributes.diagnosesTable.map((diagnose, index) => (
                            <Stack key={diagnose.id}>
                                {product.attributes.diagnosesTable[(index) !== 1 ? index - 1 : 0]?.percent !== product.attributes.diagnosesTable[index].percent &&
                                    <>
                                        <Stack direction={'row'} justifyContent={'space-between'} width={{ lg: '100%', md: '100%', sm: '100%', xs: '100%' }}
                                            sx={{ py: 2 }}>
                                            <Typography color={colors.primary} fontSize={18} lineHeight={'15px'} fontWeight={600} >
                                                {'Kompensuojama'} {diagnose.percent}{'%:'}
                                            </Typography>
                                        </Stack>
                                        <Stack direction={{ lg: 'row', md: 'row', sm: 'row', xs: 'column' }} sx={{ backgroundColor: '#1e6da1' }} >
                                            <Stack width={{ lg: '50%', md: '50%', sm: '50%', xs: '100%' }} direction={'row'} alignItems={'center'} p={1}>
                                                <Typography color={'#fff'} fontSize={14} lineHeight={'15px'} >
                                                    {'Diagnozė'}
                                                </Typography>
                                            </Stack>
                                            <Stack justifyContent={'center'} width={{ lg: '50%', md: '50%', sm: '50%', xs: '100%' }}
                                                sx={{ border: '.5px solid #1e6da1', p: 1 }}>
                                                <Typography color={'#fff'} fontSize={14} lineHeight={'15px'} >
                                                    {'Gydytojai'}
                                                </Typography>
                                            </Stack>
                                        </Stack>

                                    </>
                                }
                                <Stack direction={{ lg: 'row', md: 'row', sm: 'row', xs: 'column' }} sx={{ border: '.5px solid #1e6da1' }} >
                                    <Stack width={{ lg: '50%', md: '50%', sm: '50%', xs: '100%' }}>
                                        {diagnose.diagnoses?.map((diagnose) => (
                                            <Stack key={diagnose.id} sx={{ border: '.5px solid #1e6da1', p: 1, height: '100%', alignItems: 'center' }} direction={'row'}>
                                                <Typography fontSize={14} lineHeight={'15px'}>
                                                    {diagnose.description}
                                                </Typography>
                                            </Stack>
                                        ))}

                                    </Stack>
                                    <Stack justifyContent={'center'} width={{ lg: '50%', md: '50%', sm: '50%', xs: '100%' }}
                                        sx={{ border: '.5px solid #1e6da1', p: 1 }}>
                                        <Typography fontSize={14} lineHeight={'15px'}>
                                            {diagnose.specialists}
                                        </Typography>
                                    </Stack>
                                </Stack>
                                {diagnose?.notes?.map((note) => (
                                    <Stack key={note.id} justifyContent={'center'} width={{ lg: '100%', md: '100%', sm: '100%', xs: '100%' }} pt={1}>
                                        <Typography color={colors.primary} fontStyle={'italic'}>
                                            {note?.text}
                                        </Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        ))}
                    </Stack>

                </Stack>
            </Stack>
        </Stack>

    )
}

export default ProductViewPage