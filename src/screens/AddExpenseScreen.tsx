import React, {useState}                                              from "react";
import {View, StyleSheet, TextInput, Alert, Keyboard, Platform, Text} from "react-native";
import {THEME}                                                        from "../theme";
import {HeaderButtons, Item}                                          from "react-navigation-header-buttons";
import {AppHeaderIcon}                                                from "../components/ui/AppHeaderIcon";
import RNPickerSelect                                            from 'react-native-picker-select';
import {AppButton}                                               from "../components/ui/AppButton";
import {useDispatch, useSelector}                                from "react-redux";
import {addExpenseRequest}                                       from "../store/ducks/expense/thunks";
import {selectGlobal}                                            from "../store/ducks/global/selectors";
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";


const types = [
   {
      label: 'Доход',
      value: 'income',
   },
   {
      label: 'Расход',
      value: 'expense',
   },
];


export const AddExpenseScreen = ({navigation}: any) => {
   const [amount, setAmount] = useState('');
   const [text, setText] = useState('');
   const [type, setType] = useState('');

   const {user} = useSelector(selectGlobal)
   const dispatch = useDispatch()

   const addExpense = () => {
      if (amount.trim() && type?.trim() && user?.localId) {
         dispatch(addExpenseRequest({
            amount: +amount,
            type,
            date: new Date().toLocaleDateString(),
            userId: user.localId,
            text
         }))
         setAmount('')
         setType('')
         Keyboard.dismiss()
         navigation.navigate('Main')
      } else {
         Alert.alert('Сумма и тип должны быть заполнены')
      }
   }

   return (
      <View style={styles.wrapper}>
         <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            style={
               Platform.OS === 'ios'
                  ? pickerSelectStyles.inputIOS
                  : pickerSelectStyles.inputAndroid
            }
            keyboardType="numeric"
            placeholder="Введите сумму"
            value={amount}
            onChangeText={setAmount}/>
         <View style={styles.divider}/>
         <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            style={
               Platform.OS === 'ios'
                  ? pickerSelectStyles.inputIOS
                  : pickerSelectStyles.inputAndroid
            }
            placeholder="Введите описание"
            value={text}
            onChangeText={setText}/>
         <View style={styles.divider}/>
         <RNPickerSelect
            placeholder={{label: 'Выберите тип', color: '#9EA0A4', value: null}}
            items={types}
            onValueChange={value => {
               setType(value)
            }}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
            value={type}
         />
         <View style={styles.divider}/>
         <AppButton color={THEME.MAIN_COLOR} onPress={addExpense}>
            <Text>Добавить сумму</Text>
         </AppButton>
      </View>
   );
};

AddExpenseScreen.navigationOptions = ({navigation}: any) => ({
   headerTitle: 'Форма добавления',
   headerLeft: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Toggle drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}/>
   </HeaderButtons>
})

const pickerSelectStyles = StyleSheet.create({
   inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30,
   },
   inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30,
   },
});

const styles = StyleSheet.create({
   wrapper: {
      flex: 1,
      flexDirection: "column",
      marginBottom: 15,
      padding: 15
   },
   input: {
      width: "60%",
      borderStyle: "solid",
      borderBottomWidth: 2,
      borderBottomColor: THEME.MAIN_COLOR
   },
   divider: {
      marginVertical: 15
   }
});

