import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { style } from "../styles";
import { Ionicons } from "@expo/vector-icons";

export default function TabBar() {
    return(
        <View style={style.boxBotton}>
        <TouchableOpacity style={style.navButton}>
          <Ionicons name="home-outline" size={24} color="#fff" />
          <Text style={style.navText}>Início</Text>
        </TouchableOpacity>

            <TouchableOpacity style={style.navButton}>
      <Ionicons name="tablet-landscape-outline" size={24} color="#fff" />
      <Text style={style.navText}>Quadras</Text>
    </TouchableOpacity>
        
        <TouchableOpacity style={style.navButton}>
          <Ionicons name="calendar-outline" size={24} color="#fff" />
          <Text style={style.navText}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.navButton}>
          <Ionicons name="person-outline" size={24} color="#fff" />
          <Text style={style.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    )

}