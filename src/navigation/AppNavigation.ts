import React                      from "react";
import {createAppContainer}       from 'react-navigation'
import {createStackNavigator}     from 'react-navigation-stack'
import {AboutScreen}              from "../screens/AboutScreen";
import {THEME}                    from "../theme";
import {Platform}                 from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Ionicons}                 from '@expo/vector-icons'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createDrawerNavigator}            from 'react-navigation-drawer'

const navigatorOptions = {
   defaultNavigationOptions: {
      headerStyle: {
         backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
      },
      headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
   }
}

/*const PostNavigator = createStackNavigator({
   Main: MainScreen,
   Post: PostScreen
}, navigatorOptions)

const BookedNavigator = createStackNavigator({
   Booked: BookedScreen,
   Post: PostScreen
}, navigatorOptions)

const AboutNavigator = createStackNavigator({
   About: AboutScreen
}, navigatorOptions)

const CreateNavigator = createStackNavigator({
   Create: CreateScreen
}, navigatorOptions)

const bottomTabsConfig = {
   Post: {
      screen: PostNavigator,
      navigationOptions: {
         tabBarLabel: 'Все',
         tabBarIcon: info => <Ionicons name="ios-albums" size={25} color={info.tintColor}/>
      }
   },
   Booked: {
      screen: BookedNavigator,
      navigationOptions: {
         tabBarLabel: 'Избранное',
         tabBarIcon: info => <Ionicons name="ios-star" size={25} color={info.tintColor}/>
      }
   }
}

const BottomNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(bottomTabsConfig, {
   activeTintColor: '#fff',
   shifting: true,
   barStyle: {
      backgroundColor: THEME.MAIN_COLOR
   }
}) : createBottomTabNavigator(bottomTabsConfig, {
   tabBarOptions: {
      activeTintColor: THEME.MAIN_COLOR
   }
})*/



const MainNavigator = createDrawerNavigator({
   PostTabs: {
      screen: AboutScreen,
      navigationOptions: {
         drawerLabel: 'Главная',
         /*drawerIcon: <Ionicons name="ios-star" />*/
      }
   },
   About: {
      screen: AboutScreen,
      navigationOptions: {
         drawerLabel: 'О приложении',
      }
   },
   Create: {
      screen: AboutScreen,
      navigationOptions: {
         drawerLabel: 'Новый пост',
      }
   }
}, {
   contentOptions: {
      activeTintColor: THEME.MAIN_COLOR,
      labelStyle: {
         fontFamily: 'open-bold'
      }
   }
})


export const AppNavigation = createAppContainer(MainNavigator)
