import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { style } from "../styles";
import Atlanta from "../../home/../../assets/imgatlanta.png";
import TopSports from "../../home/../../assets/imgtopsports.png";
import { Ionicons } from "@expo/vector-icons";

export default function Body(){

    return(

    <View style={style.boxMid}>
        <Text style={style.welcomeText}>Bem-Vindo, Cegos!</Text>
        <Text style={style.infoText}>
          Atualmente, você não possui nenhum agendamento.
        </Text>

        <View style={style.boxAppointments}>
          <Text style={style.textAppointments}>
            Todos os seus jogos agendados ficarão visíveis nesta seção.
          </Text>
        </View>
        <View>
          <Text style={style.bestQuadras}>Melhores quadras</Text>
          <View style={style.cardQuadra}>
            <Image source={Atlanta} style={style.Atlanta} />
            <View style={style.infoQuadra}>
              <Text style={style.nameQuadra}>Atlanta Esportes</Text>
              <Text style={style.addressQuadra}>
                R. Carolina Derosso, 108 - Xaxim, Curitiba - PR, 81810-510
              </Text>
               <View style={style.ratingsContainer}>
                <Ionicons name="star" size={12} color="#FFD700" />
                <Text style={style.ratingText}>4.5</Text>
                <Text style={style.reviewsCount}> (47 Avaliações)</Text>
            </View>
            </View>
          </View>
          <View style={style.cardQuadra}>
            <Image source={TopSports} style={style.Atlanta} />
            <View style={style.infoQuadra}>
              <Text style={style.nameQuadra}>Top Sports Centro Esportivo</Text>
              <Text style={style.addressQuadra}>
                R. Carolina Castelli, 1000 - Novo Mundo, Curitiba - PR,
                81050-450
              </Text>
               <View style={style.ratingsContainer}>
                <Ionicons name="star" size={12} color="#FFD700" />
                <Text style={style.ratingText}>4.9</Text>
                <Text style={style.reviewsCount}> (98 Avaliações)</Text>
            </View>
            </View>
          </View>
        </View>
      </View>
    )

}