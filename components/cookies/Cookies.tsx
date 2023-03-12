import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import { useCookies } from 'react-cookie';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { getColors } from '../layout/colors';

function Cookies() {
    const [cookies, setCookie] = useCookies(['gdpr-google-analytics'])
    const [showBar, setShowBar] = useState(false)
    const [mounted, setMounted] = useState(false)
    const isCookie = (cookies['gdpr-google-analytics'])
    const colors = getColors()
    useEffect(() => {
        setMounted(true)
        setTimeout(function () {
            setTimeout(function () {
                if (mounted && !cookies['gdpr-google-analytics'])
                    setShowBar(true);
            }, 500);
        }, 2000);

        return () => setMounted(false);
    }, [cookies, showBar, mounted]);

    if (!mounted) {
        return null
    }
    const acceptPrivacyPolicy = () => {
        // initializeAndTrack(location);
        setCookie('gdpr-google-analytics', 'true', { path: '/' });
    }
    const rejectPrivacyPolicy = () => {
        // initializeAndTrack(location);
        setCookie('gdpr-google-analytics', 'false', { path: '/' });
    }
    return (
        <>
            {isCookie && <></>}
            {!isCookie &&
                <Stack direction={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }} justifyContent={'space-between'}
                    alignItems={{ lg: 'center', md: 'center', sm: 'flex-start', xs: 'flex-start' }} px={{ lg: 5, md: 5, sm: 3, xs: 3 }} py={3}
                    position={'fixed'} bottom={0} zIndex={999}
                    sx={{ backgroundColor: colors.primary, width: '100%', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 22px 70px 4px' }}>
                    <Stack width={'100%'} mb={1}>
                        <Typography color={colors.white} fontSize={'16px'} fontWeight={600} pb={1}>
                            Sutikimas su privatumo politika
                        </Typography>
                        <Stack direction={'row'} justifyContent={'flex-start'} alignItems={'top'} pr={{ lg: 4, md: 4, sm: 0, xs: 0 }}>
                            <Typography color={'#fff'} fontSize={'14px'} fontWeight={400} lineHeight={'16px'}>
                                Šios internetinės parduotuvės veikimui reikalingi slapukai (angl. cookies). Dėl detalesnės informacijos, kuri saugoma slapukuose, skaitykite mūsų {' '}
                                <Link href="/privatumo-politika" passHref>
                                    <span style={{ textDecoration: 'underline' }}>privatumo politiką</span>
                                </Link>. Slapukų iš šios parduotuvės priėmimui, spauskite &ldquo;Leisti&ldquo;.
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction={'row'} spacing={2} pt={1}>
                        <Button onClick={acceptPrivacyPolicy} variant={'contained'} color={'info'} >
                            <Typography color={colors.primary} fontSize={'14px'} fontWeight={400} px={3} py={1}>LEISTI</Typography>
                        </Button>
                        <Button onClick={rejectPrivacyPolicy} variant={'outlined'} color={'info'} >
                            <Typography color={'#fff'} fontSize={'14px'} fontWeight={400} px={3} py={1}>NELEISTI</Typography>
                        </Button>
                    </Stack>
                </Stack>
            }
        </>
    )
}

export default Cookies
