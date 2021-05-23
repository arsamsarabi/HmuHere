import React, { FC } from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

interface ChatroomProps {}

export const Chatroom: FC<ChatroomProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Chatroom</Text>
    </View>
  )
}

export default Chatroom
