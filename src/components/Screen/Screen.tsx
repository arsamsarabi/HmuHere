import React, { FC, ReactElement } from 'react'
import { View, SafeAreaView, StyleSheet, StatusBar } from 'react-native'

interface ScreenProps {
  children: ReactElement[]
  style?: any
  paddingHorizontal?: number
}

export const Screen: FC<ScreenProps> = ({ children, style, paddingHorizontal = 0 }) => (
  <SafeAreaView style={[styles.screen, style]}>
    <View style={[styles.innerView, { paddingHorizontal }]}>{children}</View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight || 0 + 16,
    flex: 1,
    width: '100%',
  },
  innerView: {
    flex: 1,
    width: '100%',
    paddingBottom: 8,
  },
})
