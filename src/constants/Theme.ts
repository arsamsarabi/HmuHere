import { Platform } from 'react-native'
import { DefaultTheme } from 'react-native-paper'
import type { Theme } from 'react-native-paper/lib/typescript/types'

import Colors from './Colors'

export const getTheme = (mode: 'light' | 'dark'): Theme => ({
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: mode === 'light' ? Colors.light.tint : Colors.dark.tint,
    accent: Colors.accent,
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
      fontWeight: 'normal',
    },
  },
})
