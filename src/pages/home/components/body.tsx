import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { style } from "../styles";
import Atlanta from "../../../assets/imgatlanta.png";
import TopSports from "../../../assets/imgtopsports.png";
import Ipiranga from "../../../assets/imgipiranga.png";
import meiaRoda from "../../../assets/imgmeiaroda.png";
import { Ionicons } from "@expo/vector-icons";

export default function Body() {
  return (
    <View style={style.boxMid}>
      <Text style={style.welcomeText}>Bem Vindo, Gabriel Dembelenda!</Text>
      <Text style={style.infoText}>
        Atualmente, você possui 2 agendamentos.
      </Text>

      <View style={style.featuresContainer}>
        <TouchableOpacity
          style={style.featureItem}
          activeOpacity={0.7}
          onPress={() => console.log("Encontre por perto clicado")}
        >
          <View style={style.featureIconCircle}>
            <Ionicons name="location-outline" size={30} color="#142c44" />
          </View>
          <Text style={style.featureText}>Encontre{"\n"}por perto</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.featureItem}
          activeOpacity={0.7}
          onPress={() => console.log("Reserve em segundos clicado")}
        >
          <View style={style.featureIconCircle}>
            <Ionicons name="time-outline" size={30} color="#142c44" />
          </View>
          <Text style={style.featureText}>Reserve em{"\n"}segundos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.featureItem}
          activeOpacity={0.7}
          onPress={() => console.log("Jogue com amigos clicado")}
        >
          <View style={style.featureIconCircle}>
            <Ionicons name="people-outline" size={30} color="#142c44" />
          </View>
          <Text style={style.featureText}>Jogue com{"\n"}amigos</Text>
        </TouchableOpacity>
      </View>

      <Text style={style.bestQuadras}>Melhores quadras</Text>

      <ScrollView>
        <TouchableOpacity
          style={style.cardQuadra}
          activeOpacity={0.7}
          onPress={() => console.log("Top Sports clicado")}
        >
          <Image source={TopSports} style={style.Atlanta} />
          <View style={style.infoQuadra}>
            <Text style={style.nameQuadra}>Top Sports</Text>
            <Text style={style.addressQuadra}>
              R. Carolina Castelli, 1000 - Novo Mundo, Curitiba - PR
            </Text>
            <View style={style.ratingsContainer}>
              <Ionicons name="star" size={12} color="#FFD700" />
              <Text style={style.ratingText}>5.0</Text>
              <Text style={style.reviewsCount}> (16 Avaliações)</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.cardQuadra}
          activeOpacity={0.7}
          onPress={() => console.log("Atlanta Esportes clicado")}
        >
          <Image source={Atlanta} style={style.Atlanta} />
          <View style={style.infoQuadra}>
            <Text style={style.nameQuadra}>Atlanta Esportes</Text>
            <Text style={style.addressQuadra}>
              R. Carolina Derosso, 108 - Xaxim, Curitiba - PR
            </Text>
            <View style={style.ratingsContainer}>
              <Ionicons name="star" size={12} color="#FFD700" />
              <Text style={style.ratingText}>4.9</Text>
              <Text style={style.reviewsCount}> (37 Avaliações)</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.cardQuadra}
          activeOpacity={0.7}
          onPress={() => console.log("Ipiranga Sportes clicado")}
        >
          <Image source={Ipiranga} style={style.Atlanta} />
          <View style={style.infoQuadra}>
            <Text style={style.nameQuadra}>Ipiranga Sportes</Text>
            <Text style={style.addressQuadra}>
              R. Ipiranga, 770 - Capão Raso, Curitiba - PR
            </Text>
            <View style={style.ratingsContainer}>
              <Ionicons name="star" size={12} color="#FFD700" />
              <Text style={style.ratingText}>4.8</Text>
              <Text style={style.reviewsCount}> (161 Avaliações)</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.cardQuadra}
          activeOpacity={0.7}
          onPress={() => console.log("Meia Roda Court clicado")}
        >
          <Image source={meiaRoda} style={style.Atlanta} />
          <View style={style.infoQuadra}>
            <Text style={style.nameQuadra}>Meia Roda Court</Text>
            <Text style={style.addressQuadra}>
              R. Engenheiro João Bley Filho, 95 - Pinheirinho, Curitiba - PR
            </Text>
            <View style={style.ratingsContainer}>
              <Ionicons name="star" size={12} color="#FFD700" />
              <Text style={style.ratingText}>4.8</Text>
              <Text style={style.reviewsCount}> (86 Avaliações)</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
