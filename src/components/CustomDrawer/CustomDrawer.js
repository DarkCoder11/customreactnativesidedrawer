import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback, Image, ImageBackground, StyleSheet } from 'react-native'

class CustomDrawer extends Component {

  openMenu() {
    this.props.navigation.closeDrawer();
    this.props.navigation.navigate('MenuScreen');
  }

  toggleDrawer = () => {
 
    console.log(this.props.navigationProps);
 
    this.props.navigationProps.toggleDrawer();
 
  }

  render() {
    const menuItems = this.props.items.map(item => {
      let menuItemName = null
      switch (item.routeName) {
        case 'MenuScreen':
          return menuItemName = (
            <TouchableWithoutFeedback key={item.key} onPress={() => this.props.navigation.navigate('MenuScreen')}>
              <View style={[this.props.activeItemKey === 'MenuScreen' ? styles.selectedMenuItem : styles.menuItem]}>
                <Image style={styles.icon} source={require('../../assets/images/menu.png')} />
                <Text style={styles.menuText}>МЕНЮ</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        case 'MyOfficeScreen':
          return menuItemName = (
            <TouchableWithoutFeedback key={item.key} onPress={() => this.props.navigation.navigate('MyOfficeScreen')}>
              <View style={[this.props.activeItemKey === 'MyOfficeScreen' ? styles.selectedMenuItem : styles.menuItem]}>
                <Image style={styles.icon} source={require('../../assets/images/myoficce.png')} />
                <Text style={styles.menuText}>МОЙ КАБИНЕТ</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        case 'CallScreen':
          return menuItemName = (
            <TouchableWithoutFeedback key={item.key} onPress={() => this.props.navigation.navigate('CallScreen')}>
              <View style={[this.props.activeItemKey === 'CallScreen' ? styles.selectedMenuItem : styles.menuItem]}>
                <Image style={styles.icon} source={require('../../assets/images/call.png')} />
                <Text style={styles.menuText}>ПОЗВОНИТЬ</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        case 'DiscountScreen':
          return menuItemName = (
            <TouchableWithoutFeedback key={item.key} onPress={() => this.props.navigation.navigate('DiscountScreen')}>
              <View style={[this.props.activeItemKey === 'DiscountScreen' ? styles.selectedMenuItem : styles.menuItem]}>
                <Image style={styles.icon} source={require('../../assets/images/discount.png')} />
                <Text style={styles.menuText}>АКЦИИ, СКИДКИ</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        case 'PizzeriaScreen':
          return menuItemName = (
            <TouchableWithoutFeedback key={item.key} onPress={() => this.props.navigation.navigate('PizzeriaScreen')}>
              <View style={[this.props.activeItemKey === 'PizzeriaScreen' ? styles.selectedMenuItem : styles.menuItem]}>
                <Image style={styles.icon} source={require('../../assets/images/pizzeria.png')} />
                <Text style={styles.menuText}>ПИЦЦЕРИИ</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        case 'DeliveryTermsScreen':
          return menuItemName = (
            <TouchableWithoutFeedback key={item.key} onPress={() => this.props.navigation.navigate('DeliveryTermsScreen')}>
              <View style={[this.props.activeItemKey === 'DeliveryTermsScreen' ? styles.selectedMenuItem : styles.menuItem]}>
                <Image style={styles.icon} source={require('../../assets/images/deliveryTerms.png')} />
                <Text style={styles.menuText}>УСЛОВИЯ ДОСТАВКИ</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        case 'ReviewsScreen':
          return menuItemName = (
            <TouchableWithoutFeedback key={item.key} onPress={() => this.props.navigation.navigate('ReviewsScreen')}>
              <View style={[this.props.activeItemKey === 'ReviewsScreen' ? styles.selectedMenuItem : styles.menuItem]}>
                <Image style={styles.icon} source={require('../../assets/images/reviews.png')} />
                <Text style={styles.menuText}>ОТЗЫВЫ</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        case 'NewsAndSocialNetworksScreen':
          return menuItemName = (
            <TouchableWithoutFeedback key={item.key} onPress={() => this.props.navigation.navigate('NewsAndSocialNetworksScreen')}>
              <View style={[this.props.activeItemKey === 'NewsAndSocialNetworksScreen' ? styles.selectedMenuItem : styles.menuItem]}>
                <Image style={styles.icon} source={require('../../assets/images/news.png')} />
                <Text style={styles.menuText}>НОВОСТИ И СОЦ. СЕТИ</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        case 'CustomerMessages':
          return menuItemName = (
            <TouchableWithoutFeedback key={item.key} onPress={() => this.props.navigation.navigate('CustomerMessages')}>
              <View style={[this.props.activeItemKey === 'CustomerMessages' ? styles.selectedMenuItem : styles.menuItem]}>
                <Image style={styles.icon} source={require('../../assets/images/notification.png')} />
                <Text style={styles.menuText}>Сообщения для клиентов</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        default:
          return menuItemName = (
            <TouchableWithoutFeedback key={item.key} onPress={this.openMenu }>
              <View style={[this.props.activeItemKey === 'MenuScreen' ? styles.selectedMenuItem : styles.menuItem]}>
                <Image style={styles.icon} source={require('../../assets/images/menu.png')} />
                <Text style={styles.menuText}>МЕНЮ</Text>
              </View>
            </TouchableWithoutFeedback>
          )
      }
    })
    return (
      <ImageBackground resizeMode='cover' style={styles.container} source={require('../../assets/images/drawerBackground.png')}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../assets/images/logo.png')} />
        </View>
        {menuItems}
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.00,
    // elevation: 24,
  },
  imageContainer: {

    alignItems: 'center',
    paddingTop: 35,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'gray',
    height: 40,
  },
  selectedMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    borderTopWidth: 1,
    borderColor: 'gray',
    height: 40,
  },
  menuText: {
    color: '#ffffff',
  },
  icon: {
    width: 30,
    height: 30,
  }
})

export default CustomDrawer