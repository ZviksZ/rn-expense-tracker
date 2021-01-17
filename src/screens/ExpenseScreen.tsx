import React, {useEffect}                                                      from 'react';
import {View, Text, StyleSheet, ActivityIndicator}                             from "react-native";
import {THEME}                                                                 from "../theme";
import {AppHeaderIcon}                                                         from "../components/ui/AppHeaderIcon";
import {HeaderButtons, Item}                                                   from "react-navigation-header-buttons";
import {useDispatch, useSelector}                                              from "react-redux";
import {selectExpenses, selectIsExpensesLoading, selectIsExpensesLoadingNever} from "../store/ducks/expense/selectors";
import {fetchExpensesRequest}                                                  from "../store/ducks/expense/thunks";
import {selectGlobal}                                                          from "../store/ducks/global/selectors";


export const ExpenseScreen = () => {
   const {expenses} = useSelector(selectExpenses)
   const {user} = useSelector(selectGlobal)
   const isLoadingNever = useSelector(selectIsExpensesLoadingNever)
   const isLoading = useSelector(selectIsExpensesLoading)
   const dispatch = useDispatch()

   useEffect(() => {
      if (user) {
         dispatch(fetchExpensesRequest(user.localId))
      }
   }, [])

   if (isLoading || isLoadingNever) {
      return <View style={styles.center}>
         <ActivityIndicator color={THEME.MAIN_COLOR} size="large"/>
      </View>
   }

   return (
      <View style={styles.center}>
         {
            expenses ? expenses.filter(expense => expense.type === 'expense').map(expense => <Text key={expense.id}>{expense.amount}</Text>) : <Text style={{color: THEME.TEXT_COLOR}}>Данных пока нет</Text>
         }
      </View>
   );
}

ExpenseScreen.navigationOptions = ({navigation}: any) => ({
   headerTitle: 'Расходы',
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

