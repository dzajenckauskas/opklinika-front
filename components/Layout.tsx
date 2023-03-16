import { ReviewsResponseType } from '@/app/services/ReviewTypes';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import Footer from './Footer';
import Header from './layout/Header';
import { getColors } from './layout/colors';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Cookies from './cookies/Cookies';

type Props = {
    children: React.ReactNode;
    title?: string;
    color?: string;
    reviews?: ReviewsResponseType;
}

const Layout = ({ children, title, color, reviews }: Props) => {
    const [activeSlide, setActiveSlide] = useState<number>(0)
    // const [touchStart, setTouchStart] = useState(0);
    // const [touchEnd, setTouchEnd] = useState(0);

    // function handleTouchStart(e: any) {
    //     setTouchStart(e.targetTouches[0].clientX);
    // }

    // function handleTouchMove(e: any) {
    //     setTouchEnd(e.targetTouches[0].clientX);
    // }

    const toNextSlide = () => {
        if (reviews?.data) {
            const max = reviews.data && reviews.data.length - 1
            setActiveSlide((activeSlide + 1) > max ? 0 : activeSlide + 1)
        }
    }
    const toPreviousSlide = () => {
        if (reviews?.data) {
            const max = reviews.data && reviews.data.length - 1
            setActiveSlide((activeSlide - 1) < 0 ? max : activeSlide - 1)
        }
    }

    // function handleTouchEnd() {
    //     if (reviews?.data)
    //         if (touchStart - touchEnd > 100) {
    //             toNextSlide()
    //         }

    //     if (touchStart - touchEnd < -100) {
    //         toPreviousSlide()

    //     }
    // }
    const colors = getColors()
    const renderReviews = reviews?.data.map((review) => {
        return (
            <Stack key={review.id} sx={{ minHeight: 50, justifyContent: 'center', width: '100%', px: 1 }}>
                <Typography color={colors.dark} fontWeight={300} fontSize={'14px'} fontStyle={'italic'} lineHeight={'16px'}
                    sx={{
                        lineHeight: '25px',
                        textAlign: 'justify',
                        textJustify: "inter-word",
                        minHeight: '70px',
                    }}>
                    <span style={{ fontSize: 26, color: colors.primary, opacity: 0.75, position: 'relative', left: '-2px', bottom: '2px' }}>{'„'}</span>
                    {review.attributes.review}
                    <span style={{ fontSize: 26, color: colors.primary, opacity: 0.75, position: 'relative', right: '2px', top: '2px' }}>{'“'}</span>
                </Typography>

                <Stack pt={3} alignItems={'flex-end'}>
                    <Rating
                        size={'small'}
                        disabled
                        value={review.attributes.rate}
                        emptyIcon={<StarIcon style={{ opacity: 0.85, width: '14px', color: colors.primary }} />}
                        icon={<StarIcon style={{ opacity: 1, width: '14px', color: colors.primary }} />}
                    />
                    <Typography color={'primary.main'} fontWeight={700} fontSize={'12px'} textAlign={'right'}>
                        {review.attributes.customer.toUpperCase()}
                    </Typography>
                </Stack>
            </Stack>
        )
    })
    return (
        <Stack sx={{ minHeight: '100vh', height: '100%', backgroundColor: '#f9f9f9' }}>
            <Header />
            <Stack minHeight={'80vh'} pb={8}>
                {title && <Typography variant='h1' lineHeight={'20px'} color={color ?? '#1E6EA1'} mb={4} sx={{
                    textAlign: 'left', width: '100%', pt: 8,
                    textTransform: 'uppercase', maxWidth: '1200px', mx: 'auto', px: { lg: 4, md: 4, sm: 3, xs: 3 },
                }}>
                    {title}
                </Typography>}
                {children}
            </Stack>
            <Stack alignItems={'center'} justifyContent={'space-between'} sx={{ width: '100%', backgroundColor: colors.primary, }} pt={8} pb={8}>
                <Stack flexDirection={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }} sx={{ maxWidth: '1200px' }}>
                    <Stack direction={'column'} spacing={1} sx={{ mx: 'auto', alignItems: 'flex-start', position: 'relative', width: '100%', px: 4 }}>
                        <Typography variant='h1' lineHeight={'20px'} color={'#fff'} mb={1} sx={{
                            textTransform: 'uppercase', textAlign: 'left'
                        }}>
                            {'Registracija'}
                        </Typography>
                        <Typography fontSize={14} fontWeight={300}>Mūsų ortopedijos klinikoje kiekvieno paciento vizitus deriname individualiai registracijos laikus pas specialistus. Kreipkitės telefonu, kad galėtumėte paskirti Jums tinkamą vizito laiką pas kvalifikuotus specialistus, kurie padės rasti tinkamiausią sprendimą Jūsų poreikiams spręsti.</Typography>
                    </Stack>
                    <Stack direction={'column'} sx={{ my: 'auto', mx: 'auto', alignItems: 'flex-end', width: '100%', px: 4 }}>
                        <Typography variant='h1' lineHeight={'20px'} color={'#fff'} mb={1} mt={{ lg: 0, md: 0, sm: 3, xs: 3 }} sx={{
                            textTransform: 'uppercase', textAlign: 'left'
                        }}>
                            <Link href={`tel:${'+370 607 921 11'}`} passHref>
                                <Stack direction={'row'} spacing={3} sx={{ cursor: 'pointer' }} alignItems={'center'}>
                                    <LocalPhoneOutlinedIcon fontSize='large' sx={{ height: '50px', marginRight: '-5px' }} />
                                    <Typography variant='h1' lineHeight={'20px'}>
                                        {'+370 607 92111'}
                                    </Typography>
                                </Stack>
                            </Link>
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            {reviews && <Stack sx={{ width: '100%', backgroundColor: '#f9f9f9' }} pt={8} pb={6}>
                <Typography variant='h1' lineHeight={'20px'} color={'#1E6EA1'} mb={2} sx={{
                    textTransform: 'uppercase', textAlign: 'center'
                }}>
                    {'Pacientų atsiliepimai'}
                </Typography>
                <Stack direction={'row'} sx={{ maxWidth: '650px', mx: 'auto', alignItems: 'center', position: 'relative', width: '100%', px: 10, pb: 2 }}>
                    <Button variant='contained' sx={{ position: 'absolute', opacity: .5, left: '20px', height: 20, width: 20, borderRadius: '50%', p: 0, minWidth: 20 }}
                        onClick={toPreviousSlide}><ArrowBackIosNew sx={{ p: .7 }} /></Button>
                    {renderReviews && renderReviews[activeSlide]}
                    <Button variant='contained' sx={{ position: 'absolute', opacity: .5, right: '20px', height: 20, width: 20, borderRadius: '50%', p: 0, minWidth: 20 }}
                        onClick={toNextSlide}><ArrowForwardIos sx={{ p: .7 }} /></Button>
                </Stack>
            </Stack>}
            <Footer />
            <Cookies />
        </Stack>
    )
}

export default Layout