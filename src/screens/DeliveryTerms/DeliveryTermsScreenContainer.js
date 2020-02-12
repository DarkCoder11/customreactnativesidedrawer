import React, { Component } from 'react'
import {Image} from 'react-native'
import DeliveryTermsScreen from './DeliveryTermsScreen'

class DeliveryTermsScreenContainer extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#c10a28',
    },
    headerTitle: <Image style={{ height: '90%', width: '70%' }} resizeMode="stretch" source={require('../../assets/images/logo.png')}/>
  }
  render() {
    return <DeliveryTermsScreen />
  }
}

export default DeliveryTermsScreenContainer