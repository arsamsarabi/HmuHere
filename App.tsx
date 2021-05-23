import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as PaperProvider } from 'react-native-paper'

import useCachedResources from './src/hooks/useCachedResources'
import useColorScheme from './src/hooks/useColorScheme'
import Navigation from './src/navigation'
import { getTheme } from './src/constants/Theme'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()
  const theme = getTheme(colorScheme)

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </PaperProvider>
    )
  }
}
