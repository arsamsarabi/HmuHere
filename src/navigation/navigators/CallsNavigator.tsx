import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { CallsScreen } from '../../screens'
import { CallsScreenParamList } from '../../types'

const CallsStack = createStackNavigator<CallsScreenParamList>()

export const CallsNavigator = () => {
  return (
    <CallsStack.Navigator screenOptions={{ headerShown: false }}>
      <CallsStack.Screen name="CallsScreen" component={CallsScreen} />
    </CallsStack.Navigator>
  )
}
