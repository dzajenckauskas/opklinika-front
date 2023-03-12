import Grid from '@mui/material/Grid'
import React from 'react'
import Layout from '../Layout'
import ServiceCard from '../services/ServiceCard'
type Props = {
    services: any
}
const PaslaugosPage = ({ services }: Props) => {
    const renderServices = services.data.map((service: any) => {
        return (
            <ServiceCard service={service} key={service.id} />
        )
    })


    return (
        <Layout title={'Paslaugos'} color={"#1E6EA1"}>
            <Grid container spacing={2} sx={{ maxWidth: '1200px', mx: 'auto', pl: { lg: 2, md: 2, sm: 1, xs: 1 }, pr: { lg: 4, md: 4, sm: 5, xs: 5 } }}>
                {renderServices}
            </Grid>
        </Layout>
    )
}

export default PaslaugosPage