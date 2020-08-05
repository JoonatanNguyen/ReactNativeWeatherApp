import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function Feed() {
  const navigation = useNavigation()
  const route = useRoute()
  const detailResult = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {detailResult ? detailResult.data : 'Navigation Drawer'}
      </Text>
      <Button
        title="Press me"
        onPress={() =>
          navigation.navigate('Detail', {
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
