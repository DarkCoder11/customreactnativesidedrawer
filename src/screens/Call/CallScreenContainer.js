import React, { Component } from 'react'
import {Image, Linking, YellowBox} from 'react-native'
import CallScreen from './CallScreen'


class CallScreenContainer extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#c10a28',
    },
    headerTitle: <Image style={{ height: '90%', width: '70%' }} resizeMode="stretch" source={require('../../assets/images/logo.png')}/>
  }


  componentDidMount() {
    Linking.openURL('tel:88001007720');
    YellowBox.ignoreWarnings(['Warning: ...']);
  }

  
  render() {
    return <CallScreen />
  }
}

export default CallScreenContainer