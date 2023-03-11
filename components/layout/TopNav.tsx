import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from "next/legacy/image";
import Link from 'next/link';

const TopNav = () => {
    return (
        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}
            sx={{
                backgroundColor: '#1E6EA1', height: 30, position: 'fixed', top: '0px', width: '100vw',
                display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }, zIndex: 999
            }}>
            <Stack direction={'row'} mt={1} spacing={3} pb={1} px={5} maxWidth={'1200px'} justifyContent={'flex-start'} width={'100%'}>
                <Link href={`tel:${'+370 607 921 11'}`} passHref>
                    <Stack direction={'row'} spacing={1} sx={{ cursor: 'pointer' }} alignItems={'center'}>
                        <Image alt='phone number' layout='fixed' width={17} height={16} src={'/assets/images/phone-icon.png'} />
                        <Typography fontWeight={300} color={'#fff'} fontSize={'13px'} className="underlineOnHover">
                            {'+370 607 92111'}
                        </Typography>
                    </Stack>
                </Link>
                <Link href={`mailto:${'info@opklinika.lt'}`} passHref>
                    <Stack direction={'row'} spacing={1} sx={{ cursor: 'pointer' }} alignItems={'center'}>
                        <Image alt='email address' layout='fixed' width={17} height={12} src={'/assets/images/mail-icon.png'} />
                        <Typography fontWeight={300} color={'#fff'} fontSize={'13px'} className="underlineOnHover">
                            {'info@opklinika.lt'}
                        </Typography>
                    </Stack>
                </Link>
                <Link href={`https://goo.gl/maps/RVoW7FDnbvK3EUiBA`} passHref target={'_blank'}>
                    <Stack direction={'row'} spacing={1} sx={{ cursor: 'pointer' }} alignItems={'center'}>
                        <Image alt='address' layout='fixed' width={13} height={16} src={'/assets/images/location-icon.png'} />
                        <Typography fontWeight={300} color={'#fff'} fontSize={'13px'} className="underlineOnHover">
                            {'Laisvės pr. 77, Vilnius'}
                        </Typography>
                    </Stack>
                </Link>
            </Stack>
        </Stack>
    )
}

export default TopNav