import React                              from "react";
import {createAppContainer}               from 'react-navigation'
import {createStackNavigator}             from 'react-navigation-stack'
import {AboutScreen}                      from "../screens/AboutScreen";
import {THEME}                            from "../theme";
import {Platform}                         from 'react-native'
import {createBottomTabNavigator}         from 'react-navigation-tabs'
import {Ionicons}                         from '@expo/vector-icons'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createDrawerNavigator}            from 'react-navigation-drawer'
import {AsyncStorageService}              from "../services/helpers/asyncStorageService";
import {IncomeScreen}                     from "../screens/IncomeScreen";
import {AuthScreen}                       from "../screens/AuthScreen";
import {OptionsScreen}                    from "../screens/OptionsScreen";
import {AddExpenseScreen}                 from "../screens/AddExpenseScreen";
import {ExpenseScreen}                    from "../screens/ExpenseScreen";

const navigatorOptions = {
   defaultNavigationOptions: {
      headerStyle: {
         backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
      },
      headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
   }
}

const AboutNavigator = createStackNavigator({
   About: AboutScreen
}, navigatorOptions)

const IncomeNavigator = createStackNavigator({
   Main: IncomeScreen,
   Form: AddExpenseScreen
}, navigatorOptions)

const ExpenseNavigator = createStackNavigator({
   Main: ExpenseScreen,
   Form: AddExpenseScreen
}, navigatorOptions)

const AuthScreenNavigator = createStackNavigator({
   Main: AuthScreen
}, navigatorOptions)

const OptionsScreenNavigator = createStackNavigator({
   Main: OptionsScreen
}, navigatorOptions)

const AddExpenseNavigator = createStackNavigator({
   AddExpense: AddExpenseScreen
}, navigatorOptions)

const BottomMainNavigator = createBottomTabNavigator({
   Expense: {
      screen: ExpenseNavigator,
      navigationOptions: {
         tabBarLabel: 'Расходы',
      }
   },
   Income: {
      screen: IncomeNavigator,
      navigationOptions: {
         tabBarLabel: 'Доходы',
      }
   },
}, {
   tabBarOptions: {
      activeTintColor: THEME.MAIN_COLOR,
      tabStyle: {
         justifyContent: 'center'
      },
      showIcon: false
   }
})


const MainNavigator = createDrawerNavigator({
   MainTabs: {
      screen: BottomMainNavigator,
      navigationOptions: {
         drawerLabel: 'Главная',
         /*drawerIcon: <Ionicons name="ios-star" />*/
      }
   },
   Add: {
      screen: AddExpenseNavigator,
      navigationOptions: {
         drawerLabel: 'Добавить сумму',

      },
   },
   About: {
      screen: AboutNavigator,
      navigationOptions: {
         drawerLabel: 'О приложении',

      },
   },
   Options: {
      screen: OptionsScreenNavigator,
      navigationOptions: {
         drawerLabel: 'Настройки',

      },
   },
}, {
   contentOptions: {
      activeTintColor: THEME.MAIN_COLOR,
      labelStyle: {
         fontFamily: 'open-bold'
      }
   }
})

export const AppNavigation = createAppContainer(MainNavigator)
export const AuthNavigation = createAppContainer(AuthScreenNavigator)
