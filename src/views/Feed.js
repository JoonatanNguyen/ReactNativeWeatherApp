import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function Feed(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navigation Drawer</Text>
      <Button
        title="Press me"
        onPress={() =>
          props.navigation.navigate('Detail', {
            screenName: 'My Detail Screen',
          })
        }
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
