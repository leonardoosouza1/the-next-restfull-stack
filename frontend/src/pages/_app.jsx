import React from 'react'
import { ThemeProvider } from 'styled-components'
import AppContext from '../../AppContext'
import AppProvider from '../../AppProvider'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </AppProvider>
  )
}

export default MyApp
