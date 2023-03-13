import { ServiceType } from '@/app/services/ServiceType'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
// import Image from 'next/legacy/image'

type Props = {
    service: ServiceType;
}
const ServiceCard = ({ service }: Props) => {
    // const imageUrl = service.attributes.images?.data && service.attributes.images?.data[0].attributes.url
    return (
        <>
            <Grid item lg={3} md={4} sm={6} xs={12} >
                <Stack sx={{
                    overflow: 'hidden', minWidth: 200,
                    width: '100%', position: 'relative', display: 'flex',
                    flexDirection: 'column', justifyContent: 'space-between',
                    minHeight: '100%',
                    boxShadow: 'rgba(0, 0, 0, 0.1) 2px 4px 12px !important'
                }}>

                    <Stack direction={'row'} height={200}
                        sx={{ background: 'linear-gradient(#1e6da190, transparent);', opacity: .99 }}
                        position={'relative'} zIndex={99}>
                    </Stack>
                    <Stack direction={'row'} height={200} width={'100%'}
                        position={'absolute'} zIndex={0}>
                        {/* <Image priority alt={service.attributes.title} objectFit={'cover'} src={imageUrl ?? '/assets/images/cover.png'} layout={'fill'} style={{ position: 'relative', opacity: 0.1, objectFit: 'cover' }} /> */}
                    </Stack>
                    <CardContent sx={{ height: '100%', position: 'absolute', bottom: 0, zIndex: 99 }}>
                        <Stack height={'100%'} flexDirection={'column'} justifyContent={'flex-end'}
                            alignContent={'flex-start'}>
                            <Typography variant="h2" color={"primary"} lineHeight={'17px'} fontWeight={900} fontSize={'18px'}
                                sx={{ ':hover': { filter: 'brightness(75%)', cursor: 'pointer' } }}>
                                {(service.attributes.title.toUpperCase())}
                            </Typography>
                        </Stack>
                        {<Stack pt={1}>
                            {service.attributes.description}
                        </Stack>}
                    </CardContent>
                </Stack>
            </Grid>
        </>
    )
}

export default ServiceCard