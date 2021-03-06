import React                                       from 'react';
import {View, Text, StyleSheet} from "react-native";
import {THEME}               from "../theme";
import {AppHeaderIcon}       from "../components/ui/AppHeaderIcon";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppButton}           from "../components/ui/AppButton";
import {useDispatch}         from "react-redux";
import {logoutRequest}       from "../store/ducks/global/thunks";

export const OptionsScreen = () => {
   const dispatch = useDispatch()

   const logoutHandler = () => {
      dispatch(logoutRequest())
   }

   return (
      <View style={styles.center}>
         <AppButton color={THEME.DANGEROUS_COLOR} onPress={logoutHandler}>
            <Text>Выход</Text>
         </AppButton>
      </View>
   );
}

OptionsScreen.navigationOptions = ({navigation}: any) => ({
   headerTitle: 'Настройки',
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
   version: {
      fontFamily: 'open-bold'
   }
})

