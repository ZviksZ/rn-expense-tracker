import {StatusBar}              from 'expo-status-bar';
import React, {useState}        from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {bootstrap}              from './src/bootstrap';
import AppLoading               from 'expo-app-loading'
import {Provider}               from "react-redux";
import {store}                  from './src/store/store'
import {AppNavigation} from './src/navigation/AppNavigation';

/*
* TODO
* 1 - PUSH-уведомления
* 2 - слайдеры
* 3 - формы(валидация, отправка)
* 4 - firebase
* 5 - анимация
* 6 - навигация
* */


export default function App() {
   const [isReady, setIsReady] = useState(false)

   if (!isReady) {
      return <AppLoading
         startAsync={bootstrap}
         onFinish={() => setIsReady(true)}
         onError={(err: any) => console.log(err)}/>
   }

   return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});
