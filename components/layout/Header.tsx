import Stack from '@mui/material/Stack'
import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Logo from '../Logo'
import Link from 'next/link'
import TopNav from './TopNav'

const Header = () => {
    const primaryColor = '#1E6EA1'
    const darkColor = '#090909'
    const lightColor = '#E9E9E9'


    const [openMenu, setOpenMenu] = useState(false)
    return (
        <>
            <Stack sx={{ zIndex: 999, position: 'relative', top: '0px', mb: { lg: '130px', md: '130px', sm: '80px', xs: '80px' } }}>
                <TopNav />
                <Stack direction={'row'} alignItems={'center'} sx={{
                    position: 'fixed', top: { lg: 30, md: 30, sm: 0, xs: 0 },
                    width: '100vw', height: { lg: '100px', md: '100px', sm: '80px', xs: '80px' }, backgroundColor: '#fff',
                    boxShadow: 'rgba(50, 50, 93, 0.15) 0px 6px 16px -5px, rgba(0, 0, 0, 0.01) 0px 5px 12px -8px'
                }}>
                    <Stack direction={'row'} justifyContent={'space-between'} sx={{ width: '100%', maxWidth: '1200px', mx: 'auto' }}>
                        <Stack width='300px' px={{ lg: 4, md: 4, sm: 3, xs: 3 }} height={'100%'} alignSelf={'center'}>
                            <Link passHref href={'/'}>
                                <Logo icon title subtitle line primaryColor={primaryColor} />
                            </Link>
                        </Stack>
                        <Stack direction={'row'} spacing={5} p={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Link passHref href={'/katalogas'}><Typography fontSize={14} color={primaryColor} fontWeight={400}>Katalogas</Typography></Link>
                            <Link passHref href={'/kainorastis'}><Typography fontSize={14} color={primaryColor} fontWeight={400}>Kainoraštis</Typography></Link>
                            <Link passHref href={'/paslaugos'}><Typography fontSize={14} color={primaryColor} fontWeight={400}>Paslaugos</Typography></Link>
                            <Link passHref href={'#contacts'}><Typography fontSize={14} color={primaryColor} fontWeight={400}>Kontaktai</Typography></Link>
                        </Stack>
                        <Stack direction={'row'} px={{ lg: 4, md: 4, sm: 3, xs: 3 }} sx={{ display: { xs: 'flex', md: 'none', cursor: 'pointer' } }} alignSelf={'center'}>
                            <div className={`hamburger ${openMenu ? 'is-active' : ''}`} id="hamburger" onClick={() => { setOpenMenu(!openMenu) }}>
                                <span className='line'></span>
                                <span className='line'></span>
                                <span className='line'></span>
                            </div>
                        </Stack>
                    </Stack>
                </Stack>
                {openMenu && <Stack sx={{
                    display: { xs: 'flex', md: 'none' },
                    position: 'fixed', top: '80px',
                    zIndex: -1,
                    width: '100vw',
                    minHeight: '100px', backgroundColor: '#fff',
                    // borderTop: '1px solid #1E6EA1',
                    boxShadow: ' rgba(50, 50, 93, 0.15) 0px 7px 11px -5px, rgba(0, 0, 0, 0.13) 0px 5px 10px -8px'
                }}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Stack direction={'column'} spacing={3} px={3} py={8}>
                            <Link passHref href={'/katalogas'}><Typography fontSize={14} textTransform={'uppercase'} color={primaryColor} fontWeight={600}>Katalogas</Typography></Link>
                            <Link passHref href={'/kainorastis'}><Typography fontSize={14} textTransform={'uppercase'} color={primaryColor} fontWeight={600}>Kainoraštis</Typography></Link>
                            <Link passHref href={'/paslaugos'}><Typography fontSize={14} textTransform={'uppercase'} color={primaryColor} fontWeight={600}>Paslaugos</Typography></Link>
                            <Link passHref href={'/kontaktai'}><Typography fontSize={14} textTransform={'uppercase'} color={primaryColor} fontWeight={600}>Kontaktai</Typography></Link>
                        </Stack>
                    </Stack>
                </Stack>}
            </Stack></>
    )
}

export default Header
