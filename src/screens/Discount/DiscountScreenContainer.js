import React, { Component } from 'react'
import {Image} from 'react-native'
import DiscountScreen from './DiscountScreen'

class DiscountScreenContainer extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#c10a28',
    },
    headerTitle: <Image style={{ height: '90%', width: '70%' }} source={require('../../assets/images/logo.png')}/>
  }
  render() {
    return <DiscountScreen />
  }
}

export default DiscountScreenContainer