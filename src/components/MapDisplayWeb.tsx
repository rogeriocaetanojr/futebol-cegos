import React from 'react';
// Este arquivo SÓ será usado na Web.
// Note que NÃO importamos 'react-native-maps' aqui!
import { View, Text, StyleProp, ViewStyle } from 'react-native';

type Props = {
  localizacao: any; // Ignoramos a localização na web
  style: StyleProp<ViewStyle>; // Recebemos o 'style.mapPlaceholder'
};

// Esta é a versão WEB do seu componente
export default function MapDisplay({ style }: Props) {
  return (
    // Usamos o 'style.mapPlaceholder' que veio do index
    <View style={style}>
      <Text style={{ color: '#666', fontSize: 14, textAlign: 'center', paddingHorizontal: 10 }}>
        (O mapa interativo só está disponível no app móvel)
      </Text>
    </View>
  );
}