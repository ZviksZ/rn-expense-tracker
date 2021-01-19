import React                                      from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ExpenseInterface}                         from "../store/ducks/expense/contracts/state";
import {THEME}                                    from "../theme";

type Props = {
   expense: ExpenseInterface
   onPress: (expense: ExpenseInterface) => void
   activeCard: boolean | null
}

export const ExpenseCard = ({expense, onPress, activeCard}: Props) => {
   const pressHandler = () => {
      onPress(expense)
   }

   let style = styles.card

   if (activeCard) {
      style = {...style, ...styles.activeCard}
   }

   return (
      <TouchableOpacity onPress={pressHandler} activeOpacity={0.7}>
         <View style={style}>
            <Text>{expense.amount} - {expense.date}</Text>
         </View>
      </TouchableOpacity>

   );
}

const styles = StyleSheet.create({
   card: {
      width: '100%',
      height: 40,
      marginBottom: 15,
      padding: 10,
      borderColor: THEME.LIGHT_COLOR,
      borderWidth: 2,
      borderStyle: 'solid'
   },
   activeCard: {
      backgroundColor: THEME.LIGHT_COLOR
   }
})
