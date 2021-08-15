import { StatusBar } from "expo-status-bar"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "./src/screens/Home"
import MiniApp from "./src/screens/MiniApp"

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="MiniApp" component={MiniApp} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  )
}
