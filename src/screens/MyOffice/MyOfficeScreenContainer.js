import React, { Component } from 'react'
import {View, Image, ActivityIndicator, Dimensions, YellowBox} from 'react-native'
import MyOfficeScreen from './MyOfficeScreen'
import { WebView } from 'react-native-webview';
import AppMetrica from 'react-native-appmetrica';

class MyOfficeScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

width = Dimensions.get('window').width;
height = Dimensions.get('window').height;

componentDidMount() {
  YellowBox.ignoreWarnings(['Warning: ...']);

  AppMetrica.activateWithApiKey('9a0a9709-9ff5-49d2-82fd-0463246e57b0');

  AppMetrica.reportEvent('DeliveryTerms');
}

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#c10a28',
    },
    headerTitle: <Image style={{ height: '90%', width: '70%' }} resizeMode="stretch" source={require('../../assets/images/logo.png')}/>
  }
  hideSpinner() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          onLoad={() => this.hideSpinner()}
          style={{ flex: 1 }}
          source={{ uri: "https://roosters-pizza.ru/new_site/login" }}
        />
        {this.state.visible && (
          <ActivityIndicator
            style={{ position: "absolute", top: this.height / 2, left: this.width / 2 }}
            size="large"
          />
        )}
      </View>
    );
  }
}

export default MyOfficeScreenContainer