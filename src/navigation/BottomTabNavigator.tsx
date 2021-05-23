import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { BottomTabParamList } from '../types'
import {
  StatusNavigator,
  CallsNavigator,
  CameraNavigator,
  ChatsNavigator,
  SettingsNavigator,
} from './navigators'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  const tabBarIconCommonProps = {
    size: 24,
    style: { marginBottom: -3 },
  }

  return (
    <BottomTab.Navigator
      initialRouteName="ChatsScreen"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].iconsColour }}
    >
      <BottomTab.Screen
        name="StatusScreen"
        component={StatusNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? 'people-circle' : 'people-circle-outline'}
              color={color}
              {...tabBarIconCommonProps}
            />
          ),
          title: 'Status',
        }}
      />
      <BottomTab.Screen
        name="CallsScreen"
        component={CallsNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? 'call' : 'call-outline'}
              color={color}
              {...tabBarIconCommonProps}
            />
          ),
          title: 'Calls',
        }}
      />
      <BottomTab.Screen
        name="CameraScreen"
        component={CameraNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? 'camera' : 'camera-outline'}
              color={color}
              {...tabBarIconCommonProps}
            />
          ),
          title: 'Camera',
        }}
      />
      <BottomTab.Screen
        name="ChatsScreen"
        component={ChatsNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? 'chatbubbles' : 'chatbubbles-outline'}
              color={color}
              {...tabBarIconCommonProps}
            />
          ),
          title: 'Chats',
        }}
      />
      <BottomTab.Screen
        name="SettingsScreen"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? 'cog' : 'cog-outline'}
              color={color}
              {...tabBarIconCommonProps}
            />
          ),
          title: 'Settings',
        }}
      />
    </BottomTab.Navigator>
  )
}
