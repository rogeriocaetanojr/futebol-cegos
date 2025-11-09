import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { style } from "./header.styles"; 
import Logo from "../assets/logo.png";   

type HeaderProps = {
  showSearchBar?: boolean; 
}

export default function Header({ showSearchBar = false }: HeaderProps) {
  return (
    <View style={style.boxTop}>
      <Image source={Logo} style={style.Logo} />
      
      {showSearchBar && (
        <TextInput
          style={style.searchBar}
          placeholder="Procure por quadras"
          placeholderTextColor="#ccc"
        />
      )}

    </View>
  );
}