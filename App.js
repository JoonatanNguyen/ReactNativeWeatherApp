import React from 'react'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import {
  Appearance,
  useColorScheme,
  AppearanceProvider,
} from 'react-native-appearance'

import Screen1 from './src/views/Screen1'
import Screen2 from './src/views/Screen2'
import Feed from './src/views/Feed'
import Tab1 from './src/tabs/Tab1'
import Tab2 from './src/tabs/Tab2'
import Tab3 from './src/tabs/Tab3'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const MaterialBottomTabs = createMaterialBottomTabNavigator()
const MaterialTopTabs = createMaterialTopTabNavigator()

export default function App() {
  const colorScheme = useColorScheme()
  const MyTheme = {
    dark: false,
    colors: {
      primary: 'black',
      background: '#cccccc',
      card: 'red',
      text: 'white',
      border: 'green',
      notification: 'rgb(255, 69, 58)',
    },
  }

  const createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          title: 'My Feed',
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Screen2}
        options={{
          title: 'Detail Screen',
        }}
      />
      <Stack.Screen name="Bottom Tabs" children={createBottomTabs} />
      <Stack.Screen name="Top Tabs" children={createTopTabs} />
    </Stack.Navigator>
  )

  const createTopTabs = () => {
    return (
      <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen
          name="Tab 1"
          component={Tab1}
          options={{ title: 'Hello' }}
        />
        <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
        <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
      </MaterialTopTabs.Navigator>
    )
  }

  const createBottomTabs = () => {
    return (
      <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen name="Tab 1" component={Tab1} />
        <MaterialBottomTabs.Screen name="Tab 2" component={Tab2} />
        <MaterialBottomTabs.Screen name="Tab 3" component={Tab3} />
      </MaterialBottomTabs.Navigator>
    )
  }

  return (
    <AppearanceProvider>
      <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : MyTheme}>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={createHomeStack} />
          <Drawer.Screen name="Contacts" component={Screen1} />
          <Drawer.Screen name="Favourites" component={Screen2} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  )
}
