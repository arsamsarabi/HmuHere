import React, { FC } from 'react'
import { Avatar } from 'react-native-paper'
import dayjs from 'dayjs'

import type { Chatroom } from '../../types'
import { styles } from './styles'
import { Text } from '../AppText/AppText'
import { View } from '../Themed'

interface ChatListItemProps {
  chatroom: Chatroom
  borderBottom?: boolean
}

export const ChatListItem: FC<ChatListItemProps> = ({ chatroom, borderBottom = true }) => {
  const sender = chatroom.users[1]
  const message = chatroom.lastMessage
  const messageDate = dayjs(message.createdAt)
  const isYesterday = messageDate.isAfter(dayjs().subtract(1, 'day'))
  const timestamp = isYesterday ? 'Yesterday' : messageDate.format('DD/MM/YYYY')

  return (
    <View style={styles.container}>
      <View style={styles.firstCol}>
        <Avatar.Image size={56} source={{ uri: sender.imageUri }} />
      </View>
      <View style={[styles.secondCol, borderBottom ? styles.borderBottom : null]}>
        <View style={styles.message}>
          <Text style={styles.senderName}>{sender.name}</Text>
          <Text numberOfLines={1}>{message.content}</Text>
        </View>
        <View style={styles.date}>
          <Text>{timestamp}</Text>
        </View>
      </View>
    </View>
  )
}

export default ChatListItem
