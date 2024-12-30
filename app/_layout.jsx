import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot,Stack } from 'expo-router'
import "../global.css";
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const RootLayout = () => {
  return (
  
    <Stack>
      <Stack.Screen name="index" options = {{ headerShown: false }}/>
      <Stack.Screen name="profile" options={{ title: "Profile Page" }} />
    </Stack>
  
  )
}

export default RootLayout

