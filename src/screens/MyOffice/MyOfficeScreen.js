import React from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'

const MyOfficeScreen = () => (
  <View style={styles.container}>
  <StatusBar backgroundColor="#c10a28" barStyle="light-content" />
    <Text>MyOfficeScreen</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default MyOfficeScreen