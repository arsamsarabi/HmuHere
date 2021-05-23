import * as React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import { ChatListItem, Screen, View, Text } from '../components'
import { mockChatrooms } from '../mocks'
import type { Chatroom } from '../types'

export const ChatsScreen = () => {
  return (
    <Screen style={styles.container}>
      <Text style={styles.title}>Chats Screen</Text>
      <FlatList
        data={mockChatrooms}
        renderItem={({ item }) => <ChatListItem chatroom={item} />}
        keyExtractor={(item) => item.id}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
