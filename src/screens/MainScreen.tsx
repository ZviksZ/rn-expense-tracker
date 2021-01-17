import React, {useEffect}                                                      from 'react';
import {View, Text, StyleSheet, ActivityIndicator}                             from "react-native";
import {THEME}                                                                 from "../theme";
import {AppHeaderIcon}                                                         from "../components/ui/AppHeaderIcon";
import {HeaderButtons, Item}                                                   from "react-navigation-header-buttons";
import {useDispatch, useSelector}                                              from "react-redux";
import {selectExpenses, selectIsExpensesLoading, selectIsExpensesLoadingNever} from "../store/ducks/expense/selectors";
import {fetchExpensesRequest}                                                  from "../store/ducks/expense/thunks";
import {selectGlobal}                                                          from "../store/ducks/global/selectors";

export const MainScreen = () => {
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
            expenses && expenses.map(expense => <Text key={expense.id}>{expense.amount}</Text>)
         }
      </View>
   );
}

MainScreen.navigationOptions = ({navigation}: any) => ({
   headerTitle: 'Главная',
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

