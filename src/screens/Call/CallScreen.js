import React from 'react'
import { View, Text, StyleSheet, Linking, StatusBar } from 'react-native'

const CallScreen = () => (
  <View style={styles.container}>
<StatusBar backgroundColor="#c10a28" barStyle="light-content" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default CallScreen