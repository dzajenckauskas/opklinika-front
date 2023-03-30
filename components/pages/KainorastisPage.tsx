import { PricelistsResponseType } from '@/app/pricelists/PricelistTypes'
import { ReviewsResponseType } from '@/app/services/ReviewTypes'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Layout from '../Layout'
import { getColors } from '../layout/colors'

type Props = {
    reviews: ReviewsResponseType;
    pricelists: PricelistsResponseType;
}


const KainorastisPage = ({ reviews, pricelists }: Props) => {
    const colors = getColors()

    const renderPricelist = pricelists.data.map((pricelistGroup, index) => {
        return (
            <Stack key={pricelistGroup.id} maxWidth={'700px'}>
                <Typography fontSize={18} color={'primary.main'} fontWeight={600} pb={1} >
                    {pricelistGroup.attributes.title}
                </Typography>
                {pricelistGroup.attributes.serviceLines?.map((serviceLine) => {
                    return (
                        <Stack key={serviceLine.id} direction={'row'} spacing={1} justifyContent={'space-between'} alignItems={'center'} pb={1}>
                            <Stack width={{ xs: '70%', sm: '60%' }}>
                                <Typography fontSize={16} color={'secondary.main'} lineHeight={'16px'}>
                                    {serviceLine.title}
                                </Typography>

                                <Stack display={{ xs: 'none', sm: 'flex' }} direction={'row'} alignItems={'center'}>
                                    <Typography fontSize={12} color={colors.grey} lineHeight={'16px'}>
                                        {serviceLine.description}
                                    </Typography>
                                </Stack>
                                <Stack display={{ xs: 'flex', sm: 'none' }} direction={'row'} alignItems={'center'}>
                                    <Typography fontSize={12} color={colors.grey} lineHeight={'16px'}>
                                        {serviceLine.description}{', '}{serviceLine?.duration}
                                    </Typography>
                                </Stack>

                            </Stack>
                            {serviceLine?.duration &&
                                <Typography display={{ xs: 'none', sm: 'flex' }} fontSize={12} textAlign={'center'} fontWeight={300}
                                    color={colors.grey} width={'25%'} lineHeight={'12px'} >
                                    {serviceLine?.duration}
                                </Typography>}
                            <Typography ml={0} fontSize={14} color={'primary.main'} fontWeight={600} width={{ xs: '30%', sm: '15%' }} textAlign={'right'}>
                                {serviceLine.price}€
                            </Typography>
                        </Stack>
                    )
                })}
                {pricelists.data[(index) !== 1 ? index - 1 : 0]?.attributes.notes !== pricelists.data[index]?.attributes.notes &&
                    <Stack>
                        <Stack justifyContent={'center'} width={{ lg: '100%', md: '100%', sm: '100%', xs: '100%' }} pt={0} pb={3}>
                            {pricelistGroup?.attributes?.notes?.map((note) => (
                                <Typography key={note.id} color={colors.primary} fontStyle={'italic'} fontSize={12} lineHeight={'14px'}>
                                    {note?.text}
                                </Typography>
                            ))}
                        </Stack>
                    </Stack>
                }
            </Stack>
        )
    })

    return (
        <Layout title={'Ortopedijos paslaugų kainoraštis'} reviews={reviews}>
            <Stack pb={20} spacing={{ lg: 30, md: 10, sm: 10, xs: 10 }} direction={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }}
                sx={{ maxWidth: '1200px', width: '100%', mx: 'auto', px: { lg: 4, md: 4, sm: 3, xs: 3 }, }}>
                <Stack width={'100%'}>
                    {renderPricelist}
                </Stack>
            </Stack>
        </Layout>
    )
}

export default KainorastisPage