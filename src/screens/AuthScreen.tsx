import React                                                     from 'react';
import {StyleSheet, ActivityIndicator, View, TextInput, Text}    from "react-native";
import {THEME}                                                   from "../theme";
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import {AppButton}                                               from "../components/ui/AppButton";
import {useForm, Controller}                                     from "react-hook-form";
import {yupResolver}                                             from '@hookform/resolvers/yup'
import * as yup                                                  from 'yup'

export const loginSchema = yup.object().shape({
   login: yup.string().required('Обязательное поле').email('Введите корректный email'),
   password: yup.string().required('Обязательное поле'),
})

type Props = {
   navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

interface IFormInputs {
   login: string
   password: string
}

export const AuthScreen = ({navigation}: Props) => {
   const {control, handleSubmit, errors} = useForm<IFormInputs>({
      resolver: yupResolver(loginSchema),
   })

   const onSubmit = (data: IFormInputs) => console.log(data);

   return (
      <View style={styles.wrapper}>
         <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
               <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Логин"
               />
            )}
            name="login"
            defaultValue=""
         />
         {errors.login && <Text>{errors.login.message}</Text>}
         <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
               <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Пароль"
               />
            )}
            name="password"
            defaultValue=""
         />
         {errors.password && <Text>{errors.password.message}</Text>}

         <AppButton color={THEME.MAIN_COLOR} onPress={handleSubmit(onSubmit)}>
            <Text>Войти</Text>
         </AppButton>
      </View>
   );
}

AuthScreen.navigationOptions = ({navigation}: Props) => ({
   headerTitle: 'Авторизация',
})

const styles = StyleSheet.create({
   wrapper: {
      flex: 1,
      flexDirection: "column",
      marginBottom: 15,
      paddingVertical: 20,
      paddingHorizontal: 10
   },
   input: {
      width: "100%",
      borderStyle: "solid",
      borderBottomWidth: 2,
      borderBottomColor: THEME.LIGHT_COLOR,
      marginBottom: 15,
      paddingVertical: 15
   },
});

