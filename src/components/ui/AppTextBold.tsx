import * as React         from 'react';
import {Text, StyleSheet} from "react-native";

export const AppTextBold = (props: any) => {
   return (
      <Text style={{...styles.default, ...props.style}}>
         {props.children}
      </Text>
   );
}

const styles = StyleSheet.create({
   default: {
      fontFamily: 'open-bold'
   }
})
