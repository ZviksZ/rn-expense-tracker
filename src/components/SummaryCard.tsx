import React                    from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {THEME}                  from "../theme";

type Props = {
   data: {
      income: number,
      expense: number
   }
}

export const SummaryCard = ({data}: Props) => {
   return (
      <View style={styles.wrapper}>
         <View style={styles.part}>
            <Text style={styles.title}>Расходы</Text>
            <Text style={styles.amount}>{data.expense}</Text>
         </View>
         <View style={{...styles.part, ...styles.second}}>
            <Text style={styles.title}>Доходы</Text>
            <Text style={styles.amount}>{data.income}</Text>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
      padding: 10,
      borderWidth: 2,
      borderColor: THEME.SECONDARY_COLOR,
      borderRadius: 4
   },
   part: {
      width: '50%',
      alignItems: 'center'
   },
   title: {
      fontFamily: 'open-bold',
      fontSize: 20
   },
   amount: {
      fontFamily: 'open-regular',
      fontSize: 18,
      marginTop: 5
   },
   second: {
      borderLeftColor: THEME.TEXT_COLOR,
      borderLeftWidth: 1
   }
})
