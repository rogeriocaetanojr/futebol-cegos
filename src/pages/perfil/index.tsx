import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import TabBar from '../../components/tabBar';
import { Ionicons } from '@expo/vector-icons';
import { style } from './styles';
import ImgPerfil from '../../assets/imgperfil.png';



export default function Perfil() {
  return (
    <View style={style.container}>
      <View style={style.localHeader}>
        <Image source={ImgPerfil} style={style.avatar} />
        <Text style={style.userName}>Gabriel Dembelenda</Text>
        <Text style={style.userEmail}>gordinhobomdebolagr7@futsenai.com</Text>
      </View>

      <View style={style.bodyContainer}>
        <TouchableOpacity style={style.menuButton}>
          <Ionicons name="settings-outline" size={22} style={style.menuButtonIcon} />
          <Text style={style.menuButtonText}>Configurações</Text>
          <Ionicons name="chevron-forward-outline" size={20} style={style.menuButtonArrow} />
        </TouchableOpacity>

        <TouchableOpacity style={style.menuButton}>
          <Ionicons name="notifications-outline" size={22} style={style.menuButtonIcon} />
          <Text style={style.menuButtonText}>Notificações</Text>
          <Ionicons name="chevron-forward-outline" size={20} style={style.menuButtonArrow} />
        </TouchableOpacity>

        <TouchableOpacity style={style.menuButton}>
          <Ionicons name="time-outline" size={22} style={style.menuButtonIcon} />
          <Text style={style.menuButtonText}>Histórico</Text>
          <Ionicons name="chevron-forward-outline" size={20} style={style.menuButtonArrow} />
        </TouchableOpacity>

        <TouchableOpacity style={style.menuButton}>
          <Ionicons name="log-out-outline" size={22} style={style.menuButtonIcon} />
          <Text style={style.menuButtonText}>Sair</Text>
          <Ionicons name="chevron-forward-outline" size={20} style={style.menuButtonArrow} />
        </TouchableOpacity>
      </View>
      
      <TabBar />
    </View>
  );
}