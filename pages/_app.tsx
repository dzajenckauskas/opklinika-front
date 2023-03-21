import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PT_Sans } from '@next/font/google'

const mainTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            color: '#fff',
          },
          '& label.Mui-focused': {
            color: '#fff',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#fff',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#fff',
            },
            '&:hover fieldset': {
              borderColor: '#fff',
              borderWidth: '0.15rem',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#fff',
            },
          },
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: '25px',
      fontWeight: '600'
    },
    h2: {
      fontSize: '20px',
      fontWeight: '600'
    },
    h3: {
      fontSize: '18px',
      fontWeight: '600'
    },
    h4: {
      fontSize: '16px',
      fontWeight: '500'
    },
    h5: {
      fontSize: '14px',
      fontWeight: '500'
    },
    h6: {
      fontWeight: 300,
      fontSize: '12px',
      letterSpacing: '.5px',
    },
    body2: {
      fontSize: '12px'
    },
    body1: {
      fontSize: '12px',
    },
    button: {
      fontSize: '10px'
    }
  },
  palette: {
    primary: {
      main: '#1E6EA1',
    },
    secondary: {
      main: '#090909',
    },
    error: {
      main: '#EA0000'
    },
    info: {
      main: '#fff',
      dark: '#f2f2f2'
    }
  },

})

const ptSans = PT_Sans({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
})


function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
      html {
        font-family: ${ptSans.style.fontFamily};
      }
    `}</style>
      <ThemeProvider theme={mainTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
