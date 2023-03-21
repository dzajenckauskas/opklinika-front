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
    const [email, setEmail] = useState<string>()
    const [name, setName] = useState<string>()
    const [message, setMessage] = useState<string>()
    // const [completed, setCompleted] = useState(false)
    const onSubmit = () => {
        axios.post("https://www.api.opklinika.lt/api/contact-forms", {
            data: {
                email: email,
                name: name,
                message: message
            }
        })
            .then((response) => {
                console.log(response);
                setCompleted(true)
            });
    }
    return (
        <Stack width={{ lg: '50%', md: '50%', sm: '50%', xs: '100%' }} pt={{ lg: 2, md: 2, sm: 2, xs: 8 }}>
            <form onSubmit={onSubmit}>
                <Typography color={colors.white} variant='h3'>
                    Palikite mums žinutę
                </Typography>
                <Typography color={colors.white} fontSize={14} fontWeight={300} py={1} lineHeight={'18px'}>
                    Vienas iš būdų gauti reikiamą informaciją, bei užsiregistruoti vizitui - susisiekti el. paštu
                </Typography>
                <Stack spacing={2} py={2}>
                    <Stack direction={'row'} spacing={2}>
                        <TextField
                            color={'info'} sx={{ fontSize: 14 }} variant={'outlined'} InputProps={{ sx: { color: colors.white } }}
                            InputLabelProps={{ sx: { color: colors.white } }}
                            fullWidth size='small' label='Vardas'
                            onChange={(e) => setName(e.target.value)} />

                        <TextField color={'info'} sx={{ fontSize: 14 }} variant={'outlined'} InputProps={{ sx: { color: colors.white } }}
                            InputLabelProps={{ sx: { color: colors.white } }}
                            fullWidth size='small' label='El. paštas'
                            onChange={(e) => setEmail(e.target.value)} />
                    </Stack>
                    <TextField color={'info'} sx={{ fontSize: 14 }} variant={'outlined'} InputProps={{ sx: { color: colors.white } }}
                        InputLabelProps={{ sx: { color: colors.white } }}
                        fullWidth size='small' label='Žinutės tekstas' rows={6} multiline
                        onChange={(e) => setMessage(e.target.value)} />
                </Stack>

                <Button type={'submit'} variant='outlined' fullWidth
                    sx={{
                        color: colors.white, fontWeight: 600, border: '2px solid #fff',
                        fontSize: 14, backgroundColor: 'transparent', ':hover': {
                            color: colors.primary,
                            backgroundColor: colors.white, border: '2px solid #fff',
                        }
                    }}>
                    SIŲSTI UŽKLAUSĄ
                </Button>

                {completed &&
                    <Typography fontWeight={300} pt={1}>
                        Žinutė išsiųsta! Su Jumis susisieksime artimiausiu metu.
                    </Typography>
                }
            </form>
        </Stack>
    )
}

export default ContactForm