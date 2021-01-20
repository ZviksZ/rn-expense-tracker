import React, {useEffect, useState} from 'react';
import {bootstrap}                  from './src/bootstrap';
import AppLoading                   from 'expo-app-loading'
import {Provider, useDispatch}      from "react-redux";
import {store}                      from './src/store/store'
import {RouterContainer}            from "./src/components/RouterContainer";
import {getStorageUserRequest}      from "./src/store/ducks/global/thunks";


/*
* TODO
* 1- проверить массив при добавлении и обновлении
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
         <RouterContainer/>
      </Provider>
   );
}
