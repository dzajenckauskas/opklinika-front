import { ProductType } from '@/app/products/productTypes';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';

type Props = {
    product: ProductType;
}

const ProductViewPage = ({ product }: Props) => {
    const router = useRouter()
    const imageUrl = product?.attributes.images?.data[0]?.attributes.url
    return (
        <Stack alignItems={'flex-start'} p={4} maxWidth={'lg'} mx={'auto'} minHeight={'80vh'}>
            <Button onClick={() => router.push('/katalogas')} size="small">
                {"Atgal į katalogą"}
            </Button>
            <Stack color={'primary.main'} direction={'row'} >
                <Stack mt={{ lg: 4, md: 4, sm: 4, xs: 2 }} spacing={{ lg: 4, md: 4, sm: 4, xs: 2 }}>
                    <Stack sx={{ color: 'primary.main' }} direction={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }}
                        spacing={{ lg: 4, md: 4, sm: 4, xs: 4 }}>
                        <Stack >
                            <Image alt={product?.attributes.images?.data[0]?.attributes.alternativeText}
                                src={imageUrl} width={1093} height={1051} objectFit={'contain'} />
                        </Stack>
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

                            <Typography variant='body1' fontSize={14} color={'#000000DE'}>
                                <span style={{ fontWeight: 600 }}> {'Techninis aprašymas ir paskirtis:'}</span> <br />
                                {product?.attributes.description}
                            </Typography>
                        </Stack>
                    </Stack>

                    {/* <Stack direction={'column'} sx={{ border: '0px solid #1e6da1', color: '#000000DE' }}>
                        {product.attributes.diagnoses.map((diagnose) => (
                            <Stack direction={{ lg: 'row', md: 'row', sm: 'row', xs: 'column' }} sx={{ border: '.5px solid #1e6da1' }}>
                                <Stack width={{ lg: '40%', md: '40%', sm: '40%', xs: '100%' }}>
                                    {diagnose.diagnoses.data.map((diagnoseCell) => (
                                        <Stack key={diagnose.id} sx={{ border: '.5px solid #1e6da1', p: 1, height: '100%', alignItems: 'center' }} direction={'row'}>
                                            <Typography fontSize={14} lineHeight={'15px'} fontWeight={600} sx={{ pr: .5, minWidth: 60 }}>
                                                {diagnoseCell.attributes.code}
                                            </Typography>
                                            <Typography fontSize={14} lineHeight={'15px'}>
                                                {diagnoseCell.attributes.description}
                                            </Typography>
                                        </Stack>
                                    ))}
                                </Stack>
                                <Stack key={diagnose.id} justifyContent={'center'} width={{ lg: '50%', md: '50%', sm: '50%', xs: '100%' }}
                                    sx={{ border: '.5px solid #1e6da1', p: 1 }}>
                                    <Typography fontSize={14} lineHeight={'15px'}>
                                        {diagnose.specialists.data.map((specialistCell) => (
                                            <>{specialistCell.attributes.specialisation}{', '}</>)
                                        )}
                                    </Typography>
                                </Stack>
                                <Stack justifyContent={'center'} width={{ lg: '10%', md: '10%', sm: '10%', xs: '100%' }}
                                    sx={{ border: '.5px solid #1e6da1', p: 1 }}>
                                    <Typography fontSize={14} lineHeight={'15px'}>
                                        {diagnose.reimbursementPercentage.data.attributes.value}
                                    </Typography>
                                </Stack>
                            </Stack>
                        ))}
                    </Stack> */}

                    {product.attributes.diagnoses?.length > 0 && <Stack>
                        <Typography color={'#000000DE'}>
                            {`¹ 100 proc. bazinės kainos kompensuojama:
                            - asmenims, kuriems teisės aktų nustatyta tvarka nustatytas
                            0–25 procentų darbingumo lygis, bei asmenims, kuriems yra
                            sukakęs senatvės pensijos amžius ir teisės aktų nustatyta
                            tvarka nustatytas didelių specialiųjų poreikių lygis;
                            - vaikams;
                            - valstybės remiamiems asmenims, gaunantiems socialinę
                            pašalpą.`}
                            <br />
                            <br />
                            {`² 80 proc. bazinės kainos kompensuojama:
                            - iš dalies darbingiems asmenims, kuriems teisės aktų
                            nustatyta tvarka yra nustatytas 30–55 procentų
                            darbingumo lygis;
                            - asmenims, kuriems yra sukakęs senatvės pensijos amžius;
                            - kitiems apdraustiesiems, kurių gydymui, medicininei
                            reabilitacijai ir ligos prevencijai būtinos ortopedijos
                            techninės priemonės.`}
                            <br />
                            <br />
                            {`³ 100 proc. vaikams, kai avalynės dydis didesnis nei 36`}
                        </Typography>
                    </Stack>}
                </Stack>
            </Stack>
        </Stack>

    )
}

export default ProductViewPage