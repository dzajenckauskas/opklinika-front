import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React from 'react'
import { getColors } from '../layout/colors'

const ContactForm = () => {
    const colors = getColors()
    return (
        <Stack width={'40%'}>
            <Typography variant='h3'>
                Susisiekime
            </Typography>
            <Typography fontSize={14} fontWeight={300} py={1} lineHeight={'18px'}>
                Vienas iš būdų gauti reikiamą informaciją, bei užsiregistruoti vizitui - susisiekti el. paštu. Palikite mums žinutę ir būtinai susisieksime aptarti Jūsų poreikius.
            </Typography>
            <Stack spacing={1} py={2}>
                <Stack direction={'row'} spacing={1}>
                    <TextField color={'info'} sx={{ fontSize: 14, backgroundColor: '#fff' }} fullWidth size='small' placeholder='Vardas' />
                    <TextField color={'info'} sx={{ fontSize: 14, backgroundColor: '#fff' }} fullWidth size='small' placeholder='El. paštas' />
                </Stack>
                <TextField color={'info'} sx={{ fontSize: 14, backgroundColor: '#fff' }} fullWidth size='small' placeholder='Žinutė' rows={6} multiline />
            </Stack>
            <Button variant='outlined' sx={{ borderRadius: 0, color: colors.white, fontWeight: 600, border: '2px solid #fff', fontSize: 14, backgroundColor: 'transparent', ':hover': { color: colors.primary, backgroundColor: colors.white, opacity: 1, border: '2px solid #fff', } }}>SIŲSTI UŽKLAUSĄ</Button>
        </Stack>
    )
}

export default ContactForm