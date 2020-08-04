import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Screen2(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.route.params.screenName}</Text>
      <Button
        title="View Bottom Tabs"
        onPress={() =>
          props.navigation.navigate('Bottom Tabs', { name: 'param 1' })
        }
      />
      <Button
        title="View Top Tabs"
        onPress={() =>
          props.navigation.navigate('Top Tabs', { name: 'param 2' })
        }
      />
      <Button
        title="Pass Data Back"
        onPress={() => props.navigation.navigate('Feed', { data: 'Hello' })}
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
