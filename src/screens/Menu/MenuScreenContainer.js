import React, { Component } from 'react'
import {View, Image,  Dimensions, YellowBox, StatusBar, StyleSheet} from 'react-native'
import WebView from 'react-native-webview'
import AppMetrica from 'react-native-appmetrica';
import { DrawerActions } from 'react-navigation-drawer';



YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);

console.ignoredYellowBox = ['Warning: ReactNative.createElement'];



var SITE_URL = "http://app.roosters-pizza.ru";

class MenuScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  openDrawer() {
    this.drawer.open();
  }

  closeDrawer() {
    this.drawer.close();
  }

width = Dimensions.get('window').width;
height = Dimensions.get('window').height;

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#c10a28',
    },
    headerTitle: <Image style={{ height: '90%', width: '70%' }} resizeMode="stretch" source={require('../../assets/images/logo.png')}/>
  }
  hideSpinner() {
    this.setState({ visible: false });
  }

  componentDidMount() {
    YellowBox.ignoreWarnings(['Warning: ...']);

    this.props.navigation.dispatch(DrawerActions.toggleDrawer());

    AppMetrica.activateWithApiKey('9a0a9709-9ff5-49d2-82fd-0463246e57b0');

    AppMetrica.reportEvent('Hello world');
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#c10a28" barStyle="light-content" />

      <WebView
        source={{ uri: 'http://app.roosters-pizza.ru' }}
      />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  containerWebView: {
    flex: 1,
  }
});

export default MenuScreenContainer