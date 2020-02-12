import React from 'react'
import {View, Text, Image, TouchableWithoutFeedback, ImageBackground, Dimensions, StyleSheet, YellowBox} from 'react-native'
import { createAppContainer, createSwitchNavigator,  } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import MenuScreenContainer from './src/screens/Menu/MenuScreenContainer'
import MyOfficeScreenContainer from './src/screens/MyOffice/MyOfficeScreenContainer'
import CallScreenContainer from './src/screens/Call/CallScreenContainer'
import DiscountScreenContainer from './src/screens/Discount/DiscountScreenContainer'
import PizzeriaScreenContainer from './src/screens/Pizzeria/PizzeriaScreenContainer'
import DeliveryTermsScreenContainer from './src/screens/DeliveryTerms/DeliveryTermsScreenContainer'
import ReviewsScreenContainer from './src/screens/Reviews/ReviewsScreenContainer'
import NewsAndSocialNetworksScreenContainer from './src/screens/NewsAndSocialNetworks/NewsAndSocialNetworksScreenContainer'
import CustomerMessagesScreenContainer from './src/screens/CustomerMessages/CustomerMessagesScreenContainer'
import CustomDrawer from './src/components/CustomDrawer/CustomDrawer'

YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);



const MenuScreen = createStackNavigator(
  {
    MenuScreenContainer,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <Image style={styles.drawerIcon} source={require('./src/assets/images/drawerIcon.png')}/>
        </TouchableWithoutFeedback>
        ) 
      }
    }
  }
)

const MyOfficeScreen = createStackNavigator(
  {
    MyOfficeScreenContainer,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <Image style={styles.drawerIcon} source={require('./src/assets/images/drawerIcon.png')}/>
        </TouchableWithoutFeedback>
        ) 
      }
    }
  }
)

const CallScreen = createStackNavigator(
  {
    CallScreenContainer,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <Image style={styles.drawerIcon} source={require('./src/assets/images/drawerIcon.png')}/>
        </TouchableWithoutFeedback>
        ) 
      }
    }
  }
)

const DiscountScreen = createStackNavigator(
  {
    DiscountScreenContainer,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <Image style={styles.drawerIcon} source={require('./src/assets/images/drawerIcon.png')}/>
        </TouchableWithoutFeedback>
        ) 
      }
    }
  }
)

const PizzeriaScreen = createStackNavigator(
  {
    PizzeriaScreenContainer,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <Image style={styles.drawerIcon} source={require('./src/assets/images/drawerIcon.png')}/>
        </TouchableWithoutFeedback>
        ) 
      }
    }
  }
)

const DeliveryTermsScreen = createStackNavigator(
  {
    DeliveryTermsScreenContainer,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <Image style={styles.drawerIcon} source={require('./src/assets/images/drawerIcon.png')}/>
        </TouchableWithoutFeedback>
        ) 
      }
    }
  }
)

const ReviewsScreen = createStackNavigator(
  {
    ReviewsScreenContainer,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <Image style={styles.drawerIcon} source={require('./src/assets/images/drawerIcon.png')}/>
        </TouchableWithoutFeedback>
        ) 
      }
    }
  }
)

const NewsAndSocialNetworksScreen = createStackNavigator(
  {
    NewsAndSocialNetworksScreenContainer,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <Image style={styles.drawerIcon} source={require('./src/assets/images/drawerIcon.png')}/>
        </TouchableWithoutFeedback>
        ) 
      }
    }
  }
)

const CustomerMessages = createStackNavigator(
  {
    CustomerMessagesScreenContainer,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <Image style={styles.drawerIcon} source={require('./src/assets/images/drawerIcon.png')}/>
        </TouchableWithoutFeedback>
        ) 
      }
    }
  }
)

const AppDrawerNavigator = createDrawerNavigator({
  MenuScreen,
  MyOfficeScreen,
  CallScreen,
  PizzeriaScreen,
  DeliveryTermsScreen,
  CustomerMessages,

},
{
  contentComponent: (props) => <CustomDrawer drawerLockMode ='locked-open' {...props}/>,
  drawerType: 'slide',
  drawerWidth: Dimensions.get('window').width * 70/100,
  drawerBackgroundColor: '#c12c2a',
  overlayColor: 1,

})

const RootSwitch = createAppContainer(createSwitchNavigator(
  {
    AppDrawerNavigator,
  },
  {
    swipeEnabled: true,
    initialRouteName: 'AppDrawerNavigator',
  }
))

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  }
})

export default () => (
  <RootSwitch />
)