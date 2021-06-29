import React from 'react'
import AppLoading from 'expo-app-loading'

import Routes from './routes'

import {
  useFonts,
  Jost_400Regular as jostRegular,
  Jost_600SemiBold as jostSemiBold
} from '@expo-google-fonts/jost'

export default function App () {
  const [fontsLoaded] = useFonts({
    jostRegular,
    jostSemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return <Routes />
}
