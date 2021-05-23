import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { StatusScreen } from '../../screens'
import { StatusScreenParamList } from '../../types'

const StatusStack = createStackNavigator<StatusScreenParamList>()

export const StatusNavigator = () => {
  return (
    <StatusStack.Navigator screenOptions={{ headerShown: false }}>
      <StatusStack.Screen name="StatusScreen" component={StatusScreen} />
    </StatusStack.Navigator>
  )
}
