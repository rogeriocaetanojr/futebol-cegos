import React from 'react';
// Este arquivo SÓ será usado no celular, então podemos
// importar o MapView sem medo!
import MapView, { Marker, Region } from 'react-native-maps';
import { StyleProp, ViewStyle } from 'react-native';

type Props = {
  localizacao: Region;
  style: StyleProp<ViewStyle>;
};

// Esta é a versão NATIVA (iOS/Android) do seu componente
export default function MapDisplay({ localizacao, style }: Props) {
  return (
    <MapView style={style} initialRegion={localizacao}>
      <Marker
        coordinate={{
          latitude: localizacao.latitude,
          longitude: localizacao.longitude,
        }}
        title="Top Sports Centro Esportivo"
      />
    </MapView>
  );
}