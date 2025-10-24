import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { style } from "./styles";
import Logo from "../../assets/logo.png";
import Atlanta from "../../assets/imgatlanta.png";
import TopSports from "../../assets/imgtopsports.png";
import { Ionicons } from "@expo/vector-icons";
import Header from '../home/coponents/header';
import Body from '../home/coponents/body'
import TabBar from '../home/coponents/tabBar'

export default function Home() {
  return (
    <View style={style.container}>
      <Header/>
      <Body/>
      <TabBar/>
    </View>
  );
}
