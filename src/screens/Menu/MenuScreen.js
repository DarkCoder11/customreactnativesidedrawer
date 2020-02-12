import React from 'react'
import {View, Text, StyleSheet, YellowBox, StatusBar} from 'react-native'


YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);

// RN < 0.52
console.ignoredYellowBox = ['Warning: ReactNative.createElement'];

const MenuScreen = () => (
  <View style={styles.container}>
  <StatusBar backgroundColor="#c10a28" barStyle="light-content" />
    <Text>MenuScreen</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default MenuScreen