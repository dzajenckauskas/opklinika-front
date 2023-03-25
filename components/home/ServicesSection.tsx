import { ServicesResponseType } from '@/app/services/ServiceType';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react'
import { getColors } from '../layout/colors';
import ServiceCard from '../services/ServiceCard';


type Props = {
    title?: string;
    color?: string;
    services: ServicesResponseType;
}

const ServicesSection = ({ services, color }: Props) => {
    const colors = getColors()
    const renderServices = services.data.map((service) =>
        <ServiceCard service={service} key={service.id} />
    )
    return (
        <>
            <Stack sx={{
                backgroundColor: colors.softGrey, mx: 'auto',
                width: '100%', position: 'relative', zIndex: 99,
                pt: 5
            }}>
                <Stack sx={{ maxWidth: '1200px', mx: 'auto', px: { lg: 4, md: 4, sm: 3, xs: 3 } }}>
                    <Stack id={'services'} sx={{
                        scrollMarginTop: '200px',
                        maxWidth: '1200px', mx: 'auto',
                        px: { lg: 4, md: 4, sm: 3, xs: 3 },
                    }} pb={10} alignItems={'center'} >
                        <Typography variant='h1' color={color ?? '#1E6EA1'} pb={5} pt={2} textAlign={'center'}>
                            {'ORTOPEDIJOS PASLAUGOS'}
                        </Typography>
                        <Grid container spacing={2}>
                            {renderServices}
                        </Grid>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default ServicesSection