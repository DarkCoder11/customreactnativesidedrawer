import React from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'

const ReviewsScreen = () => (
  <View style={styles.container}>
  <StatusBar backgroundColor="#c10a28" barStyle="light-content" />
    <Text>ReviewsScreen</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default ReviewsScreen