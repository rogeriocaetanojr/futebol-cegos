import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Linking,
} from "react-native";
import TabBar from "../../components/tabBar";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { style } from "./styles";
import { useRoute } from "@react-navigation/native";
import MapDisplay from "../../components/MapDisplay";

type ContatoRouteParams = {
  nomeQuadra?: string;
  endereco?: string;
  website?: string;
  telefone?: string;
  lat?: number;
  lon?: number;
};

export default function Contato() {
  const route = useRoute();
  const { nomeQuadra, endereco, website, telefone, lat, lon } =
    (route.params as ContatoRouteParams) || {};

  const QUADRA_NAME = nomeQuadra || "";
  const QUADRA_ADDRESS =
    endereco || "Rua Carolina Castelli 1000 - Novo Mundo, Curitiba - PR";
  const QUADRA_WEBSITE = website || "www.topfutebol.com.br";
  const QUADRA_TELEFONE = telefone || "5541984039797";

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const INITIAL_REGION = {
    latitude: lat || -25.4898805,
    longitude: lon || -49.3132829,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };

  const handleSend = () => {
    alert(`Mensagem enviada!`);
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${QUADRA_TELEFONE}?text=${encodeURIComponent(
      "Olá! Gostaria de saber mais informações sobre a quadra " + QUADRA_NAME
    )}`;
    Linking.openURL(url);
  };

  return (
    <View style={style.container}>
      <View style={style.localHeader}>
        <Ionicons name="chatbubbles-outline" size={24} color="#fff" />
        <Text style={style.headerTitle}>Fale Conosco</Text>
      </View>

      <ScrollView
        style={style.bodyContainer}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/*Acesso ao Site */}
        <View style={style.card}>
          <Text style={style.cardTitle}>Acesse o nosso site:</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL(`http://${QUADRA_WEBSITE}`)}
          >
            <Text style={style.linkText}>{QUADRA_WEBSITE}</Text>
          </TouchableOpacity>
        </View>

        {/*Localização e Mapa */}
        <View style={style.card}>
          <Text style={style.cardTitle}>Localização: {QUADRA_NAME}</Text>
          <Text style={style.addressText}>{QUADRA_ADDRESS}</Text>

          <View style={style.mapContainer}>
            <MapDisplay localizacao={INITIAL_REGION} style={style.mapImage} />
            <Text style={style.mapSourceText}>Powered by Google</Text>
          </View>
        </View>

        {/*Formulário de Contato */}
        <View style={style.card}>
          <Text style={style.cardTitle}>Nos mande uma mensagem!</Text>

          <Text style={style.inputLabel}>Nome</Text>
          <TextInput
            style={style.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Seu nome"
          />

          <Text style={style.inputLabel}>Email</Text>
          <TextInput
            style={style.input}
            value={email}
            onChangeText={setEmail}
            placeholder="seu.email@exemplo.com"
            keyboardType="email-address"
          />

          <Text style={style.inputLabel}>Mensagem</Text>
          <TextInput
            style={style.inputMessage}
            value={mensagem}
            onChangeText={setMensagem}
            placeholder="Sua mensagem..."
            multiline={true}
            numberOfLines={4}
          />

          <TouchableOpacity style={style.sendButton} onPress={handleSend}>
            <Text style={style.sendButtonText}>Enviar Mensagem</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={style.floatingWhatsAppButton}
        onPress={openWhatsApp}
      >
        <FontAwesome name="whatsapp" size={28} color="#fff" />
      </TouchableOpacity>

      <TabBar />
    </View>
  );
}
