import React          from 'react';
import {Platform}     from "react-native";
import {HeaderButton} from 'react-navigation-header-buttons'
import {Ionicons}     from "@expo/vector-icons";
import {THEME}        from "../../theme";

export const AppHeaderIcon = (props: any) => <HeaderButton {...props} IconComponent={Ionicons}
                                                           iconSize={24}
                                                           color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}/>

