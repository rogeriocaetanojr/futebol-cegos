import React from "react";
import { View, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { style } from "./header.styles";
import Logo from "../assets/logo.png";

type HeaderProps = {
  showSearchBar?: boolean;
};

export default function Header({ showSearchBar = false }: HeaderProps) {
  return (
    <View style={style.boxTop}>
      <Image source={Logo} style={style.Logo} />
      {showSearchBar && (
        <View style={style.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#888" style={style.searchIcon} />
          <TextInput
            style={style.searchInput}
            placeholder="Procure por quadras"
            placeholderTextColor="#888"
          />
        </View>
      )}
    </View>
  );
}