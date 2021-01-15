import React, {useState}                                              from 'react';
import {StyleSheet, ActivityIndicator, View, TextInput, Text, Button} from "react-native";
import {THEME}                                                        from "../theme";
import {NavigationParams, NavigationScreenProp, NavigationState}      from "react-navigation";
import {AppButton}                                                    from "../components/ui/AppButton";
import {useForm, Controller}                                          from "react-hook-form";
import {yupResolver}                                                  from '@hookform/resolvers/yup'
import * as yup                                                       from 'yup'
import {useDispatch}                                             from "react-redux";
import {loginRequest, registerRequest}                           from "../store/ducks/global/thunks";

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

export const AuthScreen = () => {
   const [isLogin, setIsLogin] = useState(true)
   const dispatch = useDispatch()
   const {control, handleSubmit, errors} = useForm<IFormInputs>({
      resolver: yupResolver(loginSchema),
   })

   const onSubmit = async (data: IFormInputs) => {
      if (isLogin) {
         dispatch(loginRequest(data))
      } else {
         dispatch(registerRequest(data))
      }
   };

   const changeAuthTypeHandler = () => {
      setIsLogin(prev => !prev)
   }

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
         {errors.login && <Text style={styles.error}>{errors.login.message}</Text>}
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
                  secureTextEntry
               />
            )}
            name="password"
            defaultValue=""
         />
         {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

         <AppButton color={THEME.MAIN_COLOR} onPress={handleSubmit(onSubmit)}>
            <Text>{isLogin ? 'Войти' : 'Зарегистрироваться'}</Text>
         </AppButton>

         <View style={styles.bottom}>
            <Button title={isLogin ? 'Регистрация' : 'Войти в аккаунт'} onPress={changeAuthTypeHandler} color={THEME.SECONDARY_COLOR}/>
         </View>

      </View>
   );
}

AuthScreen.navigationOptions = ({navigation}: Props) => ({
   headerTitle: 'Авторизация',
})

const styles = StyleSheet.create({
   wrapper: {
      flex: 1,
      height: '100%',
      flexDirection: "column",
      justifyContent:"flex-start",
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
   bottom: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 16
   },
   changeBtn: {
      opacity: 0.7
   },
   error: {
      color: THEME.DANGEROUS_COLOR
   }
});

