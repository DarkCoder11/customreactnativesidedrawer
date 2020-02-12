import React, { Component } from 'react'
import { Image, View, ScrollView, TextInput, Text, Button, StatusBar, ActivityIndicator } from 'react-native'
import AppMetrica from 'react-native-appmetrica';
import CustomerMessagesScreen from './CustomerMessagesScreen'



class CustomerMessagesScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'test', email: '', theme: '', msg: '', visible: false };


  }

  componentDidMount() {
    AppMetrica.activateWithApiKey('9a0a9709-9ff5-49d2-82fd-0463246e57b0');

    AppMetrica.reportEvent('CustomerMessages');

  }

  hideSpinner() {
    this.setState({ visible: false });
  }



  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#c10a28',
    },
    headerTitle: <Image  style={{ height: '90%', width: '70%' }} source={require('../../assets/images/logo.png')} />
  }

  sendData() {
    this.setState({ visible: true });
    fetch('https://roosters-pizza.ru/docs/g00gle_d0cs.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        theme: this.state.theme,
        msg: this.state.msg,
      }),
    }).then(() => {
      this.setState({ visible: false });
    });
  }

  render() {
    return <View>

    <StatusBar backgroundColor="#c10a28" barStyle="light-content" />
      <ScrollView keyboardDismissMode="interactive">
      <Text>Нам важно ваше мнение</Text>
      <Text>ПОЖАЛУЙСТА, ОСТАВЬТЕ СВОЙ ОТЗЫВ</Text>
      <View style={{marginTop: 40}}>
      <Text style={{fontWeight: 'bold'}}>Укажите Ваше имя:</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(name) => this.setState({name})}
      />
      </View>
      
      <View style={{marginTop: 30}}>
        <Text style={{fontWeight: 'bold'}}>Укажите Ваше имя:</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(email) => this.setState({email})}
          />
      </View>

      <View style={{marginTop: 30}}>
        <Text style={{fontWeight: 'bold'}}>Укажите Ваше имя:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(theme) => this.setState({theme})}
        />
      </View>

      <View style={{marginTop: 30}}>
        <Text style={{fontWeight: 'bold'}}>Укажите Ваше имя:</Text>
        <TextInput
          style={{height: 100, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(msg) => this.setState({msg})}
        />
      </View>



        {this.state.visible ? <ActivityIndicator size="large" /> : <Text> </Text>}
        
      <View style={{marginTop: 10}}>
        <Button
          onPress={this.sendData.bind(this)}  
          title="Отправить"
          color="#c10a28"
          accessibilityLabel="Learn more about this purple button"
        />
      </View> 
        
      </ScrollView>
    </View>
  }
}

export default CustomerMessagesScreenContainer