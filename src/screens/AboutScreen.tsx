import React                                       from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from "react-native";
import {THEME}                                     from "../theme";
import {AppHeaderIcon}                             from "../components/ui/AppHeaderIcon";
import {HeaderButtons, Item}                       from "react-navigation-header-buttons";

export const AboutScreen = () => {
   return (
      <View style={styles.center}>
         <Text>Это приложение для ведения расходов</Text>
         <Text>Версия приложения <Text style={styles.version}>1.0.0</Text></Text>
      </View>
   );
}

AboutScreen.navigationOptions = ({navigation}: any) => ({
   headerTitle: 'О приложении',
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

