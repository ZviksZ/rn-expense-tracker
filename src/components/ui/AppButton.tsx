import * as React                                                              from 'react';
import {StyleSheet, View, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native'
import {THEME}                                                                 from "../../theme";
import {AppTextBold}                                                           from "./AppTextBold";

type Props = {
   children: React.ReactNode
   onPress?: any
   color: string
   style?: any
}

export const AppButton: React.FC<Props> = ({children, style, onPress, color = THEME.MAIN_COLOR}) => {

   const content = <View style={{...styles.button, ...style, backgroundColor: color}}>
      <AppTextBold style={styles.text}>
         {children}
      </AppTextBold>
   </View>

   return (
      <>
         {
            Platform.OS === 'android' ? <TouchableNativeFeedback onPressIn={onPress} >
               {content}
            </TouchableNativeFeedback> : <TouchableOpacity onPressIn={onPress} activeOpacity={0.7}>
               {content}
            </TouchableOpacity>
         }
      </>
   );
}

const styles = StyleSheet.create({
   button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
   },
   text: {
      color: '#fff',
   }
})
