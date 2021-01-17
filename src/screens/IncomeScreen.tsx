import React                                                                   from 'react';
import {View, Text, StyleSheet, ActivityIndicator}                             from "react-native";
import {THEME}                                                                 from "../theme";
import {AppHeaderIcon}                                                         from "../components/ui/AppHeaderIcon";
import {HeaderButtons, Item}                                                   from "react-navigation-header-buttons";
import {useSelector}                                                           from "react-redux";
import {selectExpenses, selectIsExpensesLoading, selectIsExpensesLoadingNever} from "../store/ducks/expense/selectors";

export const IncomeScreen = () => {
   const {expenses} = useSelector(selectExpenses)
   const isLoadingNever = useSelector(selectIsExpensesLoadingNever)
   const isLoading = useSelector(selectIsExpensesLoading)

   if (isLoading || isLoadingNever) {
      return <View style={styles.center}>
         <ActivityIndicator color={THEME.MAIN_COLOR} size="large"/>
      </View>
   }

   return (
      <View style={styles.center}>
         {
            expenses ? expenses.filter(expense => expense.type === 'income').map(expense => <Text key={expense.id}>{expense.amount}</Text>) :
               <Text style={{color: THEME.TEXT_COLOR}}>Данных пока нет</Text>
         }
      </View>
   );
}

IncomeScreen.navigationOptions = ({navigation}: any) => ({
   headerTitle: 'Доходы',
   headerRight: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Add amount" iconName="md-add-circle-outline" onPress={() => navigation.push('Form')}/>
   </HeaderButtons>,
   headerLeft: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Toggle drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}/>
   </HeaderButtons>
})

const styles = StyleSheet.create({
   center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
})

