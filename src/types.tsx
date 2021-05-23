/**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
 * NAVIGATION
  -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
export type RootStackParamList = {
  Root: undefined
  NotFound: undefined
}

export type BottomTabParamList = {
  StatusScreen: undefined
  CallsScreen: undefined
  CameraScreen: undefined
  ChatsScreen: undefined
  SettingsScreen: undefined
}

export type StatusScreenParamList = {
  StatusScreen: undefined
}

export type CallsScreenParamList = {
  CallsScreen: undefined
}

export type CameraScreenParamList = {
  CameraScreen: undefined
}

export type ChatsScreenParamList = {
  ChatsScreen: undefined
}

export type SettingsScreenParamList = {
  SettingsScreen: undefined
}

/**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
 * USER
  -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
export type User = {
  id: string
  name: string
  imageUri: string
}

/**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
 * MESSAGE
  -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
export type Message = {
  id: string
  content: string
  createdAt: string
}

/**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
 * CHATS
  -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

export type Chatroom = {
  id: string
  users: User[]
  lastMessage: Message
}
