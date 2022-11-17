import React, { useContext, useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { ArticlesProvider } from '../context/ArticlesContext'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ArticlesProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </ArticlesProvider>
    )
}

export default MyApp
