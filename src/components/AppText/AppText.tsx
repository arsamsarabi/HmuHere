import React from 'react'
import { Platform } from 'react-native'

import { Text, TextProps } from '../Themed'

const AppText = (props: TextProps) => {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir' }]}
    />
  )
}

export { AppText as Text }
