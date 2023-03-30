import { CategoryType } from '@/app/categories/ServiceType'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useState } from 'react'
import { getColors } from '../layout/colors'

type Props = {
    category: CategoryType;
}
const CategoryCard = ({ category }: Props) => {
    const [first, setfirst] = useState(false)
    const imageUrl = category.attributes.images?.data && category.attributes.images?.data[0].attributes.url
    const colors = getColors()
    return (
        <>
            <Grid item lg={4} md={4} sm={6} xs={12} >
                <Link href={'/ortopedijos-technikos-katalogas'} passHref>
                    <Stack onMouseEnter={() => setfirst(!first)} onMouseLeave={() => setfirst(false)} sx={{
                        overflow: 'hidden', minWidth: 200,
                        width: '100%', position: 'relative', display: 'flex',
                        flexDirection: 'column', justifyContent: 'space-between',
                        boxShadow: 'rgba(0, 0, 0, 0.1) 2px 4px 12px !important',
                        cursor: 'pointer', ':hover': { opacity: .91 }, opacity: first ? .8 : 1
                    }}>
                        <Stack direction={'row'} height={120} width={'100%'}
                            position={'absolute'} zIndex={991} >
                            {imageUrl && <Image alt={category.attributes.title} objectFit={'cover'}
                                src={imageUrl}
                                layout={'fill'} loading="lazy" style={{ position: 'relative', opacity: 0.1, objectFit: 'cover' }} />}
                        </Stack>
                        <Stack direction={'row'} height={120}
                            sx={{ background: 'linear-gradient(#f9f9f940,#1e6da199);', backgroundColor: colors.primary, opacity: .9, }}
                            position={'relative'} zIndex={99}>
                        </Stack>

                        <CardContent sx={{ height: '100%', position: 'absolute', bottom: 0, zIndex: 99 }}>
                            <Stack height={'100%'} flexDirection={'column'} justifyContent={'flex-end'}
                                alignContent={'flex-start'}>
                                <Typography fontSize={18} lineHeight={'22px'} fontWeight={700} color={colors.white}
                                    sx={{ textTransform: 'uppercase', ':hover': { filter: 'brightness(75%)', cursor: 'pointer', color: colors.white, } }}>
                                    {(category.attributes.title)}
                                </Typography>
                                {first &&
                                    <Typography mt={.5} fontSize={15} lineHeight={'17px'} fontWeight={300} color={colors.white}
                                        sx={{ ':hover': { filter: 'brightness(75%)', cursor: 'pointer', color: colors.white } }}>
                                        {(category.attributes.description)}
                                    </Typography>}
                            </Stack>
                        </CardContent>
                    </Stack>
                </Link>
            </Grid >
        </>
    )
}

export default CategoryCard