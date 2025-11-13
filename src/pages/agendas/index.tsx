import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import TabBar from "../../components/tabBar";
import { Ionicons } from "@expo/vector-icons";
import { style } from "./styles";
import { useNavigation } from "@react-navigation/native";

const MOCK_AGENDAS = [
  {
    id: "1",
    title: "Futebol de cego - Fechada",
    local: "Atlanta",
    time: "20:00 - 21:00",
    date: "Terça",
    players: 10,
    price: 18.0,
    logo: require("../../assets/imgatlanta.png"),
  },
  {
    id: "2",
    title: "Futebol de cego - Aberta",
    local: "Top Sports",
    time: "19:00 - 20:00",
    date: "Quarta",
    players: 14,
    price: 15.9,
    logo: require("../../assets/imgtopsports.png"),
  },
];

type AgendaProps = {
  id: string;
  local: string;
  title: string;
  time: string;
  date: string;
  players: number;
  price: number;
  logo: any;
};

export default function Agendas() {
  const [activeTab, setActiveTab] = useState(0);
  const navigation = useNavigation<any>();

  const renderAgendaCard = ({ item }: { item: AgendaProps }) => (
    <TouchableOpacity
      style={style.cardContainer}
      activeOpacity={0.8}
      onPress={() => {
        if (item.id === "1") {
          console.log(`Card 1 (${item.title}) clicado — navegação desativada.`);
          return;
        }
        navigation.navigate("Contato", { quadra: item });
      }}
    >
      <Image source={item.logo} style={style.cardLogo} />
      <View style={style.cardInfo}>
        <Text style={style.cardTitle} numberOfLines={1}>
          {item.title}
        </Text>

        <View style={style.cardDetailRow}>
          <Ionicons name="location-sharp" size={14} color="#777" />
          <Text style={style.cardDetailText}>{item.local}</Text>
        </View>

        <View style={style.cardDetailRow}>
          <Ionicons name="calendar-outline" size={14} color="#777" />
          <Text style={style.cardDetailText}>{item.date}</Text>
          <Ionicons
            name="time-outline"
            size={14}
            color="#777"
            style={{ marginLeft: 10 }}
          />
          <Text style={style.cardDetailText}>{item.time}</Text>
        </View>

        <View style={style.cardDetailRow}>
          <Ionicons name="people-outline" size={14} color="#777" />
          <Text style={style.cardDetailText}>
            Society ({item.players} jogadores)
          </Text>
        </View>
      </View>

      <View style={style.cardPriceContainer}>
        <Text style={style.cardPrice}>R$ {item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={style.container}>
      <View style={style.localHeader}>
        <Ionicons name="calendar-outline" size={24} color="#fff" />
        <Text style={style.headerTitle}>Minhas agendas</Text>
      </View>

      <View style={style.bodyContainer}>
        {/* Estatísticas */}
        <View style={style.statsContainer}>
          <TouchableOpacity
            style={style.statCard}
            activeOpacity={0.7}
            onPress={() => console.log("Card Próximas clicado")}
          >
            <Ionicons
              name="calendar-outline"
              size={28}
              style={style.statIcon}
              color="#28a745"
            />
            <Text style={style.statValue}>2</Text>
            <Text style={style.statLabel}>Próximas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.statCard}
            activeOpacity={0.7}
            onPress={() => console.log("Card Jogadas clicado")}
          >
            <Ionicons
              name="checkbox-outline"
              size={28}
              style={style.statIcon}
              color="#007bff"
            />
            <Text style={style.statValue}>36</Text>
            <Text style={style.statLabel}>Jogadas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.statCard}
            activeOpacity={0.7}
            onPress={() => console.log("Card Gastos clicado")}
          >
            <Ionicons
              name="cash-outline"
              size={28}
              style={style.statIcon}
              color="#ffc107"
            />
            <Text style={style.statValue}>R$ 648</Text>
            <Text style={style.statLabel}>Gastos</Text>
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View style={style.tabContainer}>
          <TouchableOpacity onPress={() => setActiveTab(0)}>
            <Text
              style={[style.tabText, activeTab === 0 && style.tabTextActive]}
            >
              Próximos (2)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab(1)}>
            <Text
              style={[style.tabText, activeTab === 1 && style.tabTextActive]}
            >
              Histórico (36)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab(2)}>
            <Text
              style={[style.tabText, activeTab === 2 && style.tabTextActive]}
            >
              Cancelados (4)
            </Text>
          </TouchableOpacity>
        </View>

        {/* Lista de Agendas */}
        <FlatList
          data={MOCK_AGENDAS}
          renderItem={renderAgendaCard}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <TabBar />
    </View>
  );
}
