import React, {useEffect, useState, useRef}                                              from 'react';
import {View, Text, StyleSheet, ActivityIndicator, ScrollView, Button, TouchableOpacity} from "react-native";
import {THEME}                                                                           from "../theme";
import {AppHeaderIcon}                                                                   from "../components/ui/AppHeaderIcon";
import {HeaderButtons, Item}                                                             from "react-navigation-header-buttons";
import {useDispatch, useSelector}                                                        from "react-redux";
import {selectExpenses, selectIsExpensesLoading, selectIsExpensesLoadingNever}           from "../store/ducks/expense/selectors";
import {fetchExpensesRequest, removeExpenseRequest}                            from "../store/ducks/expense/thunks";
import {selectGlobal}                                                          from "../store/ducks/global/selectors";
import {ExpenseCard}                                                           from "../components/ExpenseCard";
import {ExpenseInterface}                                                      from "../store/ducks/expense/contracts/state";
import BottomSheet                                                             from 'reanimated-bottom-sheet';
import {AppButton}                                                             from "../components/ui/AppButton";
import {editExpense}                                                           from "../store/ducks/expense/actionCreators";

export const ExpenseScreen = ({navigation}: any) => {
   const {expenses} = useSelector(selectExpenses)
   const {user} = useSelector(selectGlobal)
   const isLoadingNever = useSelector(selectIsExpensesLoadingNever)
   const isLoading = useSelector(selectIsExpensesLoading)
   const dispatch = useDispatch()
   const [activeExpense, setActiveExpense] = useState<ExpenseInterface | null>(null)

   const sheetRef = useRef(null);

   const expensePressHandler = (expense: ExpenseInterface) => {
      if (activeExpense && activeExpense.id === expense.id) {
         // @ts-ignore
         sheetRef.current.snapTo(0)
         setActiveExpense(null)
      } else {
         // @ts-ignore
         sheetRef.current.snapTo(1)
         setActiveExpense(expense)
      }
   }

   const removeHandler = () => {
      console.log(activeExpense)
      if (activeExpense?.id) {
         dispatch(removeExpenseRequest(activeExpense.id))
         // @ts-ignore
         sheetRef.current.snapTo(0)
         setActiveExpense(null)
      }
   }

   const changeHandler = () => {
      dispatch(editExpense(activeExpense))
      // @ts-ignore
      sheetRef.current.snapTo(0)
      setActiveExpense(null)
      navigation.navigate('Form')
   }

   const renderContent = () => (
      <View
         style={styles.popup}
      >
         <AppButton color={THEME.MAIN_COLOR} onPress={changeHandler}>
            <Text>Изменить</Text>
         </AppButton>
         <AppButton color={THEME.DANGEROUS_COLOR} onPress={removeHandler}>
            <Text>Удалить</Text>
         </AppButton>
      </View>
   );

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
      <>
         <ScrollView style={styles.list}>
            {
               expenses ? expenses.filter(expense => expense.type === 'expense').map(expense => <ExpenseCard activeCard={activeExpense && activeExpense.id === expense.id} key={expense.id}
                                                                                                             onPress={expensePressHandler} expense={expense}/>) :
                  <Text style={{color: THEME.TEXT_COLOR}}>Данных пока нет</Text>
            }


         </ScrollView>
         <BottomSheet
            ref={sheetRef}
            snapPoints={[0, 100]}
            borderRadius={10}
            renderContent={renderContent}
         />
      </>
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
   },
   list: {
      padding: 10
   },
   popup: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#fff',
      padding: 16,
      height: 100,
   }
})

