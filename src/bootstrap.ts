import * as Font from "expo-font";

export async function bootstrap() {
   try {
      await Font.loadAsync({
         'open-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
         'open-bold': require('../assets/fonts/OpenSans-Bold.ttf')
      })

      //await DB.init()
   } catch (e) {
      console.log(e)
   }

}
