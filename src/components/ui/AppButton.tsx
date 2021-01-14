import * as React                           from 'react';
import {StyleSheet, View, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native'
import {THEME}                              from "../../theme";
import {AppTextBold}                        from "./AppTextBold";

type Props = {
   children: React.ReactNode
   onPress?: any
   color: string
}

export const AppButton: React.FC<Props> = ({children, onPress, color = THEME.MAIN_COLOR}) => {
   const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
   return (
      <Wrapper onPress={onPress} activeOpacity={0.7}>
         <View style={{...styles.button, backgroundColor: color}}>
            <AppTextBold style={styles.text}>
               {children}
            </AppTextBold>
         </View>
      </Wrapper>
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
      color: '#fff'
   }
})
