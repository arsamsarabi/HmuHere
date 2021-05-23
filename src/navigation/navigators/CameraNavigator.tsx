import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { CameraScreen } from '../../screens'
import { CameraScreenParamList } from '../../types'

const CameraStack = createStackNavigator<CameraScreenParamList>()

export const CameraNavigator = () => {
  return (
    <CameraStack.Navigator screenOptions={{ headerShown: false }}>
      <CameraStack.Screen name="CameraScreen" component={CameraScreen} />
    </CameraStack.Navigator>
  )
}
