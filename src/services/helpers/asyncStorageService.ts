import AsyncStorage from '@react-native-async-storage/async-storage';

export class AsyncStorageService {
   static async setItem(key: string, value: any) {
      try {
         const jsonValue = JSON.stringify(value)
         await AsyncStorage.setItem(key, jsonValue)
      } catch (e) {
         console.log(e)
      }
   }

   static async getItem(key: string) {
      try {
         return await AsyncStorage.getItem(key)
      } catch(e) {
         console.log(e)
      }
   }
}
