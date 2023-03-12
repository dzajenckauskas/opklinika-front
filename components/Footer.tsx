import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { getColors } from './layout/colors'
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

const Footer = () => {
    const colors = getColors()

    return (
        <Stack sx={{ width: '100%', backgroundColor: colors.primary, }} >
            <Stack sx={{
                minHeight: '100px', width: '100%', backgroundColor: colors.primary, maxWidth: '1200px', mx: 'auto'
            }} pt={4} pb={2} px={{ lg: 4, md: 4, sm: 3, xs: 3 }} >
                <Stack >
                    <Stack height={'100%'} maxWidth={200}>
                        <Logo width={'200px'} icon primaryColor={'#fff'} />
                    </Stack>
                    <Stack height={'100%'} spacing={.5} mt={2}>
                        <Typography fontSize={16} mt={2} color={'#fff'} fontWeight={900}>UAB Ortopedijos paslaugų klnika</Typography>
                        <Link href={`mailto:${'info@opklinika.lt'}`} passHref>
                            <Typography fontSize={14} color={'#fff'}>Laisvės pr. 77, Vilnius</Typography>
                        </Link>
                        <Link href={`tel:${'+37060792111'}`} passHref>
                            <Typography fontSize={14} color={'#fff'}>+370 607 92111</Typography>
                        </Link>
                        <Link href={`https://goo.gl/maps/RVoW7FDnbvK3EUiBA`} passHref target={'_blank'}>
                            <Typography fontSize={14} color={'#fff'}>info@opklinika.lt</Typography>
                        </Link>
                    </Stack>
                </Stack>
                <Stack mt={20}>
                    <Stack direction={'row'} textAlign={'left'} justifyContent={'center'}>
                        <Typography fontSize={12} color={'#fff'} fontWeight={200}>Ortopedijos paslaugų klnika © 2023</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Footer
