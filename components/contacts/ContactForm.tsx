import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import React, { useState } from 'react'
import { getColors } from '../layout/colors'

const ContactForm = () => {
    const colors = getColors()
    const [completed, setCompleted] = useState(false)
    const onSubmit = () => {
        axios.post("https://www.api.opklinika.lt/api/contact-forms", {
            data: {
                email: 'email@gmail.com',
                password: 'password',
                name: 'name',
                message: 'hello'
            }
        })
            .then((response) => {
                console.log(response);
                setCompleted(true)
            });
    }
    return (
        <Stack width={'40%'} pt={2}>
            <form onSubmit={onSubmit}>
                <Typography variant='h3'>
                    Palikite mums žinutę
                </Typography>
                <Typography fontSize={14} fontWeight={300} py={1} lineHeight={'18px'}>
                    Vienas iš būdų gauti reikiamą informaciją, bei užsiregistruoti vizitui - susisiekti el. paštu
                </Typography>
                <Stack spacing={1} py={2}>
                    <Stack direction={'row'} spacing={1}>
                        <TextField color={'info'} sx={{ fontSize: 14, backgroundColor: '#fff' }} fullWidth size='small' placeholder='Vardas' />
                        <TextField color={'info'} sx={{ fontSize: 14, backgroundColor: '#fff' }} fullWidth size='small' placeholder='El. paštas' />
                    </Stack>
                    <TextField color={'info'} sx={{ fontSize: 14, backgroundColor: '#fff' }} fullWidth size='small' placeholder='Žinutės tekstas' rows={6} multiline />
                </Stack>
                <Button type={'submit'} variant='outlined' sx={{ borderRadius: 0, color: colors.white, fontWeight: 600, border: '2px solid #fff', fontSize: 14, backgroundColor: 'transparent', ':hover': { color: colors.primary, backgroundColor: colors.white, opacity: 1, border: '2px solid #fff', } }}>SIŲSTI UŽKLAUSĄ</Button>
                {completed && <Typography fontWeight={300} pt={1}>Žinutė išsiųsta! Su Jumis susisieksime artimiausiu metu.</Typography>}
            </form>
        </Stack>
    )
}

export default ContactForm