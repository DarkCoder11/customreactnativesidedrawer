import React, { Component } from 'react'
import {Image} from 'react-native'
import NewsAndSocialNetworksScreen from './NewsAndSocialNetworksScreen'

class NewsAndSocialNetworksScreenContainer extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#c10a28',
    },
    headerTitle: <Image style={{ height: '90%', width: '70%' }} source={require('../../assets/images/logo.png')}/>
  }
  render() {
    return <NewsAndSocialNetworksScreen />
  }
}

export default NewsAndSocialNetworksScreenContainer