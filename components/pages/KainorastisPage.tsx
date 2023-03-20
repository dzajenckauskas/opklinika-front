import { ReviewsResponseType } from '@/app/services/ReviewTypes'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import Layout from '../Layout'
import { getColors } from '../layout/colors'

type Props = {
    reviews: ReviewsResponseType;
}


const KainorastisPage = ({ reviews }: Props) => {
    const colors = getColors()
    const priceList2 = [
        {
            category: 'Konsultacijos',
            products:
                [{
                    title: 'Gydytojo ortopedo - traumatologo konsultacija (kreipiantis be siuntimo)',
                    price: 45
                },
                {
                    title: 'Vaikų gydytojo ortopedo - traumatologo konsultacija (kreipiantis be siuntimo)',
                    price: 55
                },
                {
                    title: 'Fizinės medicinos ir reabilitacijos gydytojo konsultacija (kreipiantis be siuntimo, be eilės)',
                    price: 30
                },
                {
                    title: 'Kineziterapeuto konsultacija (funkcinis paciento ištyrimas)',
                    price: 25
                }]
        },
        {
            category: 'Tyrimai',
            products:
                [{
                    title: 'Kūdikių klubų displazijos tyrimas echoskopu',
                    price: 25
                }]
        },
        {
            category: 'Kineziterapijos užsiėmimai',
            products:
                [{
                    title: 'Individuali kineziterapija (suaugusiems ir vaikams nuo 7 m.) 1 kartas',
                    duration: '30min',
                    price: 16,
                },
                {
                    title: 'Individuali kineziterapija (suaugusiems) 5 kartai',
                    price: 70
                }]
        },
        {
            category: 'Masažai suaugusiems',
            products:
                [{
                    title: 'Viršutinės galūnės ir pečių juostos masažas (1 kartas)',
                    duration: '15min',
                    price: '18*/20**',
                },
                {
                    title: ' Plaštakos ir dilbio masažas (1 kartas)',
                    duration: '10min',
                    price: '12*/14**',
                },
                {
                    title: 'Nugaros masažas (kaklo, krūtinės, juosmens -1 kartas)',
                    duration: '20min',
                    price: ' 25*/27**',
                },
                {
                    title: 'Juosmens - kryžmens masažas (1 kartas)',
                    duration: '15min',
                    price: '18*/20**',
                },
                {
                    title: 'Kaklo ir pečių juostos srities masažas (1 kartas)',
                    duration: '15min',
                    price: '18*/20**',
                },
                {
                    title: 'Apatinės galūnės masažas (pėdos, čiurnos , kelio - 1 kartas)',
                    duration: '15min',
                    price: '18*/20**',
                },
                {
                    title: 'Apatinės galūnės ir juosmens srities masažas – 1 kartas',
                    duration: '15min',
                    price: '18*/20**',
                }]
        },
        {
            category: 'Fizioterapija',
            products:
                [{
                    title: 'Magneto terapija (1 laukas) 1 kartas',
                    duration: '10-20min',
                    price: '9*/10**',
                },
                {
                    title: 'Elektroterapija (1 laukas) 1 kartas',
                    duration: '10-15min',
                    price: '9*/10**',
                },
                {
                    title: 'Ultragarso terapija (1 laukas) 1 kartas',
                    duration: '5-10min',
                    price: '9*/10**',
                },
                {
                    title: 'Kompresinė terapija 1 kartas',
                    duration: '20min',
                    price: 15,
                },
                {
                    title: 'Kineziologinis teipavimas (1 laukas)',
                    price: '10 - 15',
                }]
        }
    ]






    const priceList = [
        {
            category: 'Viršutinių galūnių įtvarinės sistemos',
            products:
                [{
                    title: 'Rieįo plaštakos įtvaras RT 1-9',
                    price: 65
                },
                {
                    title: 'Alkūnės įtvaras RT 3-1-2',
                    price: 150
                },
                {
                    title: 'Alkūnės įtvaras RT 4',
                    price: 90
                },
                {
                    title: 'Piršto įtvaras PR 1 (ranka)',
                    price: 25
                }]
        },
        {
            category: 'Apatinių galūnių įtvarinės sistemos',
            products:
                [{
                    title: 'Avalynės įdėklai GS -4 (iki 35 dydžio)',
                    price: 45
                },
                {
                    title: 'Avalynės įdėklai GS -4 (nuo 35 dydžio)',
                    price: 59
                },
                {
                    title: 'Avalynės įdėklai GS-4 (sportiniai)',
                    price: 75
                },
                {
                    title: 'Kulkšnies pėdos įtvaras KT-1',
                    price: 90
                },
                {
                    title: 'Kulkšnies pėdos įtvaras KT 1 ( tik vaikams)',
                    price: 90
                },
                {
                    title: 'Kulkšnies pėdos kelio įtvaras KT 1-5',
                    price: 150
                },
                {
                    title: 'Piršto įtvaras PR 1 (koja)',
                    price: 35
                }]
        },
        {
            category: 'Stuburo įtvarinės sistemos',
            products:
                [{
                    title: 'Krūtinės juosmens įtvaras KR0-9-3',
                    price: 200
                }]
        }]

    const renderPricelist = priceList.map((category) => {
        return (
            <Stack key={category.category}>
                <Typography variant='h4' color={'primary.main'} fontWeight={600} pt={2} pb={.5}>
                    {category.category}
                </Typography>
                {category.products.map((product) => {
                    return (
                        <Stack key={product.title} spacing={5} direction={'row'} justifyContent={'space-between'} alignItems={'center'} pb={1}>
                            <Typography fontSize={16} color={'secondary.main'} width={'80%'} >
                                {product.title}
                            </Typography>
                            <Typography variant='h6' color={'primary.main'} fontWeight={600} width={'20%'} textAlign={'right'}>
                                {product.price}
                            </Typography>
                        </Stack>
                    )
                })}
            </Stack>
        )
    })
    const renderPricelist2 = priceList2.map((category) => {
        return (
            <Stack key={category.category}>
                <Typography variant='h4' color={'primary.main'} fontWeight={600} pt={2} pb={1}>
                    {category.category}
                </Typography>
                {category.products.map((product) => {
                    return (
                        <Stack key={product.title} spacing={5} direction={'row'} justifyContent={'space-between'} alignItems={'center'} pb={1}>
                            <Typography fontSize={16} color={'secondary.main'} width={product?.duration ? '70%' : '85%'} lineHeight={'16px'}>
                                {product.title}
                            </Typography>
                            {product?.duration && <Typography fontSize={14} fontWeight={300} color={'secondary.main'} width={'15%'} lineHeight={'12px'} >
                                {product?.duration}
                            </Typography>}
                            <Typography lineHeight={'12px'} fontSize={16} color={'primary.main'} fontWeight={600} width={'15%'} textAlign={'right'}>
                                {product.price}
                            </Typography>
                        </Stack>
                    )
                })}
            </Stack>
        )
    })

    return (
        <Layout title={'Kainoraštis'} reviews={reviews}>
            <Stack pb={20} spacing={{ lg: 30, md: 10, sm: 10, xs: 10 }} direction={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }}
                sx={{ maxWidth: '1200px', mx: 'auto', px: { lg: 4, md: 4, sm: 3, xs: 3 }, }}>
                <Stack width={'100%'}>
                    <Typography fontSize={18} fontWeight={900} color={'primary.main'}>
                        PASLAUGOS
                    </Typography>
                    {renderPricelist2}
                    <Stack mt={4} spacing={1}>
                        <Typography fontSize={14} color={colors.primary} fontStyle={'italic'} lineHeight={'14px'}>
                            {'* papildomos paslaugos kurių pageidauja UAB Ortopedijos paslaugų klinika pacientas'}
                        </Typography>
                        <Typography fontSize={14} color={colors.primary} fontStyle={'italic'} lineHeight={'14px'}>
                            {'** nedraustiems privalomuoju sveikatos draudimu pacientams, užsienio piliečiams ir pacientams kreipiantis be gydytojo'}
                        </Typography>
                    </Stack>
                </Stack>
                <Stack width={'100%'}>
                    <Typography fontSize={18} fontWeight={900} color={'primary.main'}>
                        INDIVIDUALIAI GAMINAMI ĮTVARAI
                    </Typography>
                    {renderPricelist}
                </Stack>
            </Stack>
        </Layout>
    )
}

export default KainorastisPage