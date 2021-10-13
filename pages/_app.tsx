import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/header'

import React, {useState} from 'react'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/themes';

function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState<"light"|"dark">("light")

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme: darkTheme}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
  
}
export default MyApp
