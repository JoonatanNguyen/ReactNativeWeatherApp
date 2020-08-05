import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function Screen2() {
  const navigation = useNavigation()
  const route = useRoute()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.screenName}</Text>
      <Button
        title="View Bottom Tabs"
        onPress={() => navigation.navigate('Bottom Tabs', { name: 'param 1' })}
      />
      <Button
        title="View Top Tabs"
        onPress={() => navigation.navigate('Top Tabs', { name: 'param 2' })}
      />
      <Button
        title="Pass Data Back"
        onPress={() => navigation.navigate('Feed', { data: 'Hello' })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
  },
})
