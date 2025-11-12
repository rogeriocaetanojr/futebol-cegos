import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, TextInput } from "react-native";
import TabBar from "../../components/tabBar";
import { Ionicons } from "@expo/vector-icons";
import { style } from "./styles";



const MOCK_DATA = [
  {
    id: "1",
    name: "Atlanta Esportes",
    address: "R. Carolina Derosso, 108 - Xaxim, Curitiba - PR",
    rating: 4.9,
    reviews: 37,
    price: 200,
    logo: require("../../assets/imgatlanta.png"),
  },
  {
    id: "2",
    name: "Top Sports",
    address: "R. Carolina Castelli, 1000 - Novo Mundo, Curitiba - PR",
    rating: 5.0,
    reviews: 16,
    price: 230,
    logo: require("../../assets/imgtopsports.png"),
  },
  {
    id: "3",
    name: "Ipiranga Sports",
    address: "R. Ipiranga, 770 - Capão Raso, Curitiba - PR",
    rating: 4.78,
    reviews: 161,
    price: 210,
    logo: require("../../assets/imgipiranga.png"),
  },
  {
    id: "4",
    name: "Meia Roda Court",
    address: "R. Engenheiro João Bley Filho, 95 - Pinheirinho, Curitiba - PR",
    rating: 4.8,
    reviews: 86,
    price: 120,
    logo: require("../../assets/imgmeiaroda.png"),
  },
  {
    id: "5",
    name: "JB Esportes",
    address: "R. João Bettega, 3173 - Portão, Curitiba - PR",
    rating: 4.6,
    reviews: 26,
    price: 180,
    logo: require("../../assets/imgjb.png"),
  },
  // Adicione mais quadras aqui...
];
type QuadraProps = {
  id: string;
  name: string;
  address: string;
  rating: number;
  reviews: number;
  price: number;
  logo: any;
};

export default function Quadras() {
  const renderQuadraCard = ({ item }: { item: QuadraProps }) => (
    <View style={style.cardContainer}>
      <Image source={item.logo} style={style.cardLogo} />

      <View style={style.cardInfoColumn}>
        <Text style={style.cardTitle}>{item.name}</Text>
        <Text style={style.cardAddress} numberOfLines={2}>
          {item.address}
        </Text>
        <View style={style.cardRatingRow}>
          <Ionicons name="star" size={14} color="#FFD700" />
          <Text style={style.cardRatingText}>{item.rating.toFixed(1)}</Text>
          <Text style={style.cardReviewsText}>({item.reviews} avaliações)</Text>
        </View>
      </View>

      <View style={style.cardPriceColumn}>
        <Text style={style.cardPrice}>R${item.price}</Text>
        <Text style={style.cardPriceLabel}>/hora</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={style.localHeader}>
  <Ionicons name="football-outline" size={24} color="#fff" />
  <Text style={style.headerTitle}>Encontre sua quadra</Text>
</View>
      <View style={style.bodyContainer}>
        <View style={style.searchContainer}>
  <Ionicons name="search-outline" size={20} color="#888" style={style.searchIcon} />
  <TextInput
    style={style.searchInput}
    placeholder="Procure por quadras"
    placeholderTextColor="#888"
  />
</View>

        <View style={style.filterContainer}>
          <TouchableOpacity style={style.filterButton}>
            <Text style={style.filterText}>Todos os tipos</Text>
            <Ionicons name="chevron-down-outline" size={16} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={style.filterButton}>
            <Text style={style.filterText}>Todos tamanhos</Text>
            <Ionicons name="chevron-down-outline" size={16} color="#333" />
          </TouchableOpacity>
        </View>

        <Text style={style.resultsTitle}> 5 quadras encontradas na região</Text>

        <FlatList
          data={MOCK_DATA}
          renderItem={renderQuadraCard}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>

      <TabBar />
    </View>
  );
}
