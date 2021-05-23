import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { SettingsScreen } from '../../screens'
import { SettingsScreenParamList } from '../../types'

const SettingsStack = createStackNavigator<SettingsScreenParamList>()

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </SettingsStack.Navigator>
  )
}
