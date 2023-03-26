import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/legacy/image';
import { getColors } from '../layout/colors';

const HeroBanner = () => {
    const colors = getColors()
    return (
        <Stack overflow={'hidden'}>
            <Stack direction={'row'} maxHeight={500} height={'100%'} width={'100vw'} overflow={'hidden'}
                position={'absolute'} left={0} top={{ lg: 130, md: 130, sm: 80, xs: 80 }} zIndex={9}
                sx={{ background: 'linear-gradient(#f9f9f910,#1e6da119);', backgroundColor: colors.primary, opacity: .7, }} >
            </Stack>
            <Stack direction={'row'} overflow={'hidden'} width={'100vw'}
                height={{ lg: '950px', md: '500px', sm: '700px', xs: '500px' }} alignItems={'center'}
                position={'absolute'} left={0}
                top={{ lg: 130, md: 130, sm: 80, xs: 80 }} sx={{ opacity: .7 }}
                pt={{ lg: 30, md: 20, sm: 10, xs: 0 }}>
                <Image alt={'ortopedijos specialistai'} src={'/media/banner.webp'}
                    layout={'fill'} objectFit={'cover'} objectPosition={'center'} priority />
            </Stack>
            <Stack minHeight={'460px'} zIndex={100} justifyContent={'flex-end'} alignItems={'flex-start'}
                sx={{
                    px: { lg: 4, md: 4, sm: 3, xs: 3 }, mx: 'auto', maxWidth: '1200px', width: '100%'
                }}>
                <Stack sx={{ borderLeft: '2px solid #1E6EA1' }} mb={8}>
                    <Typography variant='h1' fontSize={'34px'} color={'#fff'} px={2}
                        textAlign={'left'} lineHeight={'35px'}>
                        {'ORTOPEDIJOS PASLAUGŲ KLINIKA'}
                    </Typography>
                    <Typography color={'#fff'} px={2} textAlign={'left'}
                        maxWidth={'600px'} lineHeight={'16px'} fontWeight={300} fontSize={14}>
                        Profesionalus patyrusių ir jaunų energingų specialistų kolektyvas,
                        kuris kiekvieno paciento problemas sprendžia individualiai
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default HeroBanner