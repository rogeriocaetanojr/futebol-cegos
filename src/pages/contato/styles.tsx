import { StyleSheet } from "react-native";

// Estas são as cores da sua paleta
const colors = {
  primary: "#000075c5", // O roxo/azul do seu app
  background: "#d9d9dac5", // O cinza-claro do "boxMid"
  card: "#f8f4f4bd", // O branco dos cards
  text: "#333",
  textSecondary: "#797878ff",
  white: "#fff",
};

export const style = StyleSheet.create({
  // --- ESTRUTURA (Layout principal) ---
  // Este é o "esqueleto" que imita sua tela Home
  // Usa o mesmo layout flex
  container: {
    flex: 1,
  },
  boxTop: {
    flex: 0.3,
    backgroundColor: colors.primary,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 30,
  },
  Logo: {
    width: 150,
    height: 140,
    resizeMode: "contain",
  },
  // O boxMid será o ScrollView
  boxMid: {
    flex: 1.7,
    backgroundColor: colors.background,
    width: "100%",
  },
  boxBotton: {
    flex: 0.17,
    backgroundColor: colors.primary,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 5,
  },
  navButton: {
    alignItems: "center",
    padding: 5,
  },
  navText: {
    fontSize: 10,
    color: colors.white,
    marginTop: 2,
  },

  // --- CONTEÚDO DA TELA DE CONTATO ---
  // Estilos específicos para o body de contato
  
  // Card genérico
  card: {
    backgroundColor: colors.card,
    borderRadius: 15,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    marginTop: 20,
  },
  
  // Título das seções (ex: "Localização")
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    textAlign: "center",
    marginBottom: 15,
  },

  // Card "Acesse o site"
  siteText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary, // Usando a cor primária
    textAlign: "center",
  },

  // Card "Localização"
  addressText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: 15,
  },
  mapPlaceholder: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    backgroundColor: "#ccc", // Um placeholder cinza para o mapa
    justifyContent: "center",
    alignItems: "center",
  },
  mapText: {
    color: "#666",
    fontSize: 16,
  },

  // Card "Formulário"
  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#dcd6d6ff", // Um cinza um pouco diferente para o input
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    width: "100%",
  },
  textArea: {
    height: 120, // Altura maior para "Mensagem"
    textAlignVertical: 'top', // Começa a digitar do topo
  },
  button: {
    backgroundColor: colors.primary, // Botão com a cor primária
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
