import React                                       from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from "react-native";
import {THEME}                                     from "../theme";
import {AppHeaderIcon}                             from "../components/ui/AppHeaderIcon";
import {HeaderButtons, Item}                       from "react-navigation-header-buttons";

export const MainScreen = () => {
   return (
      <View style={styles.center}>
         <Text>Главная</Text>
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

