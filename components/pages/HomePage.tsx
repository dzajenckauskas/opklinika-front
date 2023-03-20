import { ReviewsResponseType } from '@/app/services/ReviewTypes';
import { ServicesResponseType } from '@/app/services/ServiceType';
import { ArrowForward } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/legacy/image';
import Layout from '../Layout';
import { getColors } from '../layout/colors';
import ServiceCard from '../services/ServiceCard';

type Props = {
    title?: string;
    color?: string;
    services: ServicesResponseType;
    reviews?: ReviewsResponseType;
}

const HomePage = ({ color, services, reviews }: Props) => {
    const colors = getColors()

    const renderServices = services.data.map((service) =>
        <ServiceCard service={service} key={service.id} />
    )
    return (
        <Layout color={colors.primary}
            reviews={reviews}
        >
            <Stack direction={'row'} maxHeight={500} height={'100%'} width={'100vw'} overflow={'hidden'} position={'absolute'} left={0} top={{ lg: 130, md: 130, sm: 80, xs: 80 }} zIndex={9}
                sx={{ background: 'linear-gradient( transparent,#1e6da190);', opacity: 1 }} >
            </Stack>
            <Stack direction={'row'} overflow={'hidden'} width={'100vw'} height={{ lg: '950px', md: '500px', sm: '700px', xs: '500px' }} alignItems={'center'} position={'absolute'} left={0}
                top={{ lg: 130, md: 130, sm: 80, xs: 80 }} sx={{ opacity: .5 }}
                pt={{ lg: 30, md: 20, sm: 10, xs: 0 }}>
                <Image alt={'ortopedijos specialistai'} src={'/media/banner.jpg'} layout={'fill'} objectFit={'cover'} objectPosition={'center'} priority />
            </Stack>
            <Stack minHeight={'460px'} zIndex={100} justifyContent={'flex-end'} alignItems={'flex-start'}
                sx={{
                    px: { lg: 4, md: 4, sm: 3, xs: 3 }, mx: 'auto', maxWidth: '1200px', width: '100%'
                }}>
                <Stack sx={{ borderLeft: '2px solid #1E6EA1' }} mb={8}>
                    <Typography variant='h1' fontSize={'34px'} color={'#fff'} px={2} textAlign={'left'} lineHeight={'35px'}>
                        {'ORTOPEDIJOS PASLAUGŲ KLINIKA'}
                    </Typography>
                    <Typography variant='h5' color={'#fff'} px={2} textAlign={'left'} maxWidth={'600px'} lineHeight={'16px'} fontWeight={300} fontSize={14}>
                        Profesionalus patyrusių ir jaunų energingų specialistų kolektyvas, kuris kiekvieno paciento problemas sprendžia individualiai
                    </Typography>
                </Stack>
            </Stack>

            <Stack sx={{
                backgroundColor: colors.white, mx: 'auto', width: '100%', position: 'relative', zIndex: 99,
                pt: 5, pb: 10
            }}>
                <Stack sx={{ maxWidth: '1200px', mx: 'auto', px: { lg: 4, md: 4, sm: 3, xs: 3 } }}>
                    <Typography fontSize={14} textAlign={'justify'} color={'secondary.main'} fontWeight={300}>
                        Suburtas profesionalus patyrusių ir jaunų energingų specialistų kolektyvas, kuris kiekvieno paciento problemas sprendžia individualiai. Įmonėje konsultuoja ir gydymą bei ortopedijos technines priemones paskiria aukščiausios kvalifikacijos gydytojai specialistai – ortopedai-traumatologai bei fizinės medicinos ir reabilitacijos gydytojai.
                        <br />
                        <br />
                        <b style={{ color: colors.primary }}>   Patyrę ir atsakingi ortopedai-protezuotojai bei ortopedai-technikai užsako, pagamina ir individualiai pritaiko ortopedijos technines priemones:</b>
                    </Typography>
                    <Typography fontSize={14} textAlign={'justify'} color={'secondary.main'} fontWeight={300} pl={1} pt={0} lineHeight={'20px'}>
                        <ArrowForward sx={{ height: '14px', position: 'relative', top: '3px', color: colors.primary }} fontWeight={300} /> po galūnių amputacijų – rankų ir kojų protezus; <br />
                        <ArrowForward sx={{ height: '14px', position: 'relative', top: '3px', color: colors.primary }} fontWeight={300} /> po traumų ir kitų susirgimų – rankų, kojų, stuburo plastikinius ir tekstilinius įtvarus, korsetus;<br />
                        <ArrowForward sx={{ height: '14px', position: 'relative', top: '3px', color: colors.primary }} fontWeight={300} />  avalynės įdėklus, skirtus gydymui, reabilitacijai, sportui ir kasdieniniam naudojimui;<br />
                        <ArrowForward sx={{ height: '14px', position: 'relative', top: '3px', color: colors.primary }} fontWeight={300} /> kitus ortopedinės paskirties gaminius ir įvairias pagalbines priemones neįgaliems žmonėms.<br />
                    </Typography>
                    <Typography fontSize={14} textAlign={'justify'} color={'primary.main'} py={2} lineHeight={'16px'} fontWeight={600}>
                        Mūsų vizija – būti profesionalia, dinamiška ir konkurencinga ortopedijos techninių priemonių gamybos ir prekybos įmone.
                        Įmonės misija – aprūpinti gyventojus atsakingai ir kokybiškai pagamintomis ortopedijos techninėmis priemonėmis, užtikrinančiomis aukštesnę jų gyvenimo kokybę.
                    </Typography>
                    <Typography fontSize={14} textAlign={'justify'} color={'secondary.main'} fontWeight={300}>
                        UAB „ORTOPEDIJOS PASLAUGŲ KLINIKA“ taikomas lankstus pacientų aptarnavimas. Glaudžiai bendradarbiaujame su įvairiomis medicinos įstaigomis, neįgalius pacientus vizituojame ir konsultuojame jų gyvenamosiose vietose, ortopedijos techninės priemonės užsakomos, gaminamos ir pritaikomos beveik visoje Lietuvoje. Gamyboje naudojamos kokybiškos, nekenksmingos ir saugios žaliavos, iš kurių gaminamos ortopedijos priemonės yra puikiai vertinamos gydytojų ir pacientų.
                    </Typography>
                    <Typography fontSize={14} textAlign={'justify'} color={'secondary.main'} fontWeight={300}>
                        Mūsų gaminamos ortopedijos techninės priemonės yra aprobuotos Lietuvos sveikatos apsaugos ministerijos, atitinka Europos direktyvos 93/42/EEB reikalavimus ir Lietuvos medicinos normos MN 4:2009 būtinuosius reikalavimus. Visiems mūsų gaminiams yra taikomi garantiniai įsipareigojimai.
                    </Typography>
                    <Typography fontSize={14} textAlign={'justify'} color={'secondary.main'} fontWeight={300}>
                        Įmonė yra sudariusi sutartį su Valstybine ligonių kasa prie Lietuvos Respublikos sveikatos apsaugos ministerijos, todėl atsižvelgiant į paciento diagnozę ortopediniai gaminiai bei gydytojų konsultacijos yra visiškai arba iš dalies kompensuojami pagal nustatytą tvarką.
                    </Typography>
                </Stack>

            </Stack>
            <Stack id={'services'} sx={{ scrollMarginTop: '120px;', maxWidth: '1200px', mx: 'auto', px: { lg: 4, md: 4, sm: 3, xs: 3 }, }} pt={2} pb={10} alignItems={'center'} >
                <Typography variant='h1' color={color ?? '#1E6EA1'} mb={4} pt={7} textAlign={'center'}>
                    {'ORTOPEDIJOS PASLAUGOS'}
                </Typography>
                <Grid container spacing={2}>
                    {renderServices}
                </Grid>
            </Stack>


        </Layout>
    )
}

export default HomePage