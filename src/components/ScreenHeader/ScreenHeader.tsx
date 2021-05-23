import React, { FC } from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

interface ScreenHeaderProps {
  showByDefault?: boolean
  title: string
  isSearchable?: boolean
}

export const ScreenHeader: FC<ScreenHeaderProps> = ({
  title,
  showByDefault = false,
  isSearchable = false,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default ScreenHeader
