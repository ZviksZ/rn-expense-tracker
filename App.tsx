import React, {useState}               from 'react';
import {bootstrap}                     from './src/bootstrap';
import AppLoading                      from 'expo-app-loading'
import {Provider}                      from "react-redux";
import {store}                         from './src/store/store'
import {ChooseScreenContainer}         from "./src/components/ChooseScreenContainer";

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
         <ChooseScreenContainer/>
      </Provider>
   );
}
