import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { ChatsScreen } from '../../screens'
import { ChatsScreenParamList } from '../../types'

const ChatsStack = createStackNavigator<ChatsScreenParamList>()

export const ChatsNavigator = () => {
  return (
    <ChatsStack.Navigator screenOptions={{ headerShown: false }}>
      <ChatsStack.Screen name="ChatsScreen" component={ChatsScreen} />
    </ChatsStack.Navigator>
  )
}
