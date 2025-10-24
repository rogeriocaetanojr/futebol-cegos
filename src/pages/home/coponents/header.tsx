import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { style } from "../styles";
import Logo from '../../../assets/logo.png'


export default function Header(){


    return(
        <View style={style.boxTop}>
                <Image source={Logo} style={style.Logo} />
                <TextInput
                  style={style.searchBar}
                  placeholder="Procure por quadras"
                  placeholderTextColor="#ccc"
                />
              </View>
    )
}