import { CategoriesResponseType } from '@/app/categories/ServiceType';
import { ProductsType } from '@/app/products/productTypes';
import { ReviewsResponseType } from '@/app/services/ReviewTypes';
import { ServicesResponseType } from '@/app/services/ServiceType';
import { ArrowForward } from '@mui/icons-material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/legacy/image';
import HeroBanner from '../banner/HeroBanner';
import CategoriesSection from '../home/CategoriesSection';
import ProductsSection from '../home/ProductsSection';
import ServicesSection from '../home/ServicesSection';
import Layout from '../Layout';
import { getColors } from '../layout/colors';

type Props = {
    title?: string;
    services: ServicesResponseType;
    reviews?: ReviewsResponseType;
    products: ProductsType;
    categories: CategoriesResponseType;
}

const HomePage = ({ services, reviews, products, categories }: Props) => {
    const colors = getColors()
    return (
        <Layout color={colors.primary} reviews={reviews}>
            <HeroBanner />
            <CategoriesSection categories={categories} />
            <ProductsSection products={products} />
            <Stack sx={{
                backgroundColor: colors.primary,
                width: '100%', position: 'relative', zIndex: 99,
            }}>
                <Stack direction={'row'} justifyContent={'center'} py={8} sx={{
                    maxWidth: '1200px', mx: 'auto', width: '100%',
                    px: { lg: 4, md: 4, sm: 3, xs: 3 }
                }}>
                    <Stack width={'100%'}>
                        <Typography pb={1} fontSize={16} color={colors.white} fontWeight={900} lineHeight={'18px'}>
                            Patyrę ir atsakingi ortopedai-protezuotojai bei ortopedai-technikai užsako, pagamina ir
                            individualiai pritaiko ortopedijos technines priemones:
                        </Typography>
                        <Stack spacing={1}>
                            <Typography fontSize={14} color={colors.white} fontWeight={300} pl={1} lineHeight={'20px'}>
                                <ArrowForward sx={{ height: '14px', position: 'relative', top: '3px', color: colors.white }} />
                                po galūnių amputacijų – rankų ir kojų protezus;
                            </Typography>
                            <Typography fontSize={14} color={colors.white} fontWeight={300} pl={1} lineHeight={'20px'}>
                                <ArrowForward sx={{ height: '14px', position: 'relative', top: '3px', color: colors.white }} />
                                po traumų ir kitų susirgimų – rankų, kojų, stuburo plastikinius ir tekstilinius įtvarus, korsetus;
                            </Typography>
                            <Typography fontSize={14} color={colors.white} fontWeight={300} pl={1} lineHeight={'20px'}>
                                <ArrowForward sx={{ height: '14px', position: 'relative', top: '3px', color: colors.white }} />
                                avalynės įdėklus, skirtus gydymui, reabilitacijai, sportui ir kasdieniniam naudojimui;
                            </Typography>
                            <Typography fontSize={14} color={colors.white} fontWeight={300} pl={1} lineHeight={'20px'}>
                                <ArrowForward sx={{ height: '14px', position: 'relative', top: '3px', color: colors.white }} />
                                kitus ortopedinės paskirties gaminius ir įvairias pagalbines priemones neįgaliems žmonėms.
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction={'row'} height={400} width={'100%'} overflow={'hidden'}
                    position={'absolute'} zIndex={-1}>
                    <Image loading="lazy" alt={'.attributes.title'} objectFit={'cover'} src={'/assets/images/cover.webp'} layout={'fill'}
                        style={{ position: 'relative', opacity: 0.15, objectFit: 'cover', objectPosition: 'center' }} />
                </Stack>
            </Stack>
            <Stack sx={{
                backgroundColor: colors.white, mx: 'auto',
                width: '100%', position: 'relative', zIndex: 99,
                pt: 5, pb: 8
            }}>
                <Stack sx={{ maxWidth: '1200px', mx: 'auto', px: { lg: 4, md: 4, sm: 3, xs: 3 } }}>
                    <Typography fontSize={16} color={colors.primary} py={2} lineHeight={'18px'} fontWeight={600}>
                        Mūsų vizija – būti profesionalia, dinamiška ir konkurencinga ortopedijos techninių priemonių gamybos ir prekybos įmone.
                        Įmonės misija – aprūpinti gyventojus atsakingai ir kokybiškai pagamintomis ortopedijos techninėmis priemonėmis, užtikrinančiomis aukštesnę jų gyvenimo kokybę.
                    </Typography>
                    <Typography lineHeight={'18px'} fontSize={14} textAlign={'justify'} color={'secondary.main'} fontWeight={300}>
                        Glaudžiai bendradarbiaujame su įvairiomis medicinos įstaigomis, neįgalius pacientus vizituojame ir konsultuojame jų gyvenamosiose vietose, ortopedijos techninės priemonės užsakomos, gaminamos ir pritaikomos beveik visoje Lietuvoje. Gamyboje naudojamos kokybiškos, nekenksmingos ir saugios žaliavos, iš kurių gaminamos ortopedijos priemonės yra puikiai vertinamos gydytojų ir pacientų.
                    </Typography>
                    <br />
                    <Typography lineHeight={'18px'} fontSize={14} textAlign={'justify'} color={'secondary.main'} fontWeight={300}>
                        Mūsų gaminamos ortopedijos techninės priemonės yra aprobuotos Lietuvos sveikatos apsaugos ministerijos, atitinka Europos direktyvos 93/42/EEB reikalavimus ir Lietuvos medicinos normos MN 4:2009 būtinuosius reikalavimus. Visiems mūsų gaminiams yra taikomi garantiniai įsipareigojimai.
                    </Typography>
                    <br />
                    <Typography lineHeight={'18px'} fontSize={14} textAlign={'justify'} color={'secondary.main'} fontWeight={300}>
                        Įmonė yra sudariusi sutartį su Valstybine ligonių kasa prie Lietuvos Respublikos sveikatos apsaugos ministerijos, todėl atsižvelgiant į paciento diagnozę ortopediniai gaminiai bei gydytojų konsultacijos yra visiškai arba iš dalies kompensuojami pagal nustatytą tvarką.
                    </Typography>
                </Stack>
            </Stack>
            <ServicesSection services={services} />
        </Layout>
    )
}

export default HomePage

