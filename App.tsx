import React, {useState}               from 'react';
import {bootstrap}                     from './src/bootstrap';
import AppLoading                      from 'expo-app-loading'
import {Provider}                      from "react-redux";
import {store}                         from './src/store/store'
import {ChooseScreenContainer}         from "./src/components/ChooseScreenContainer";


/*
* TODO
* 1 - AsyncStorage user(проверка токена - refresh_token)
* 2 - карточки сумм, вывод общей суммы
* 3 - формы(валидация, отправка)
* 4 - firebase(update, delete - смахиванием влево)
* 5 - вывод графиков
* 6 - переход на форму из шапки кнопкой
* 7 - тип для navigation Props
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
