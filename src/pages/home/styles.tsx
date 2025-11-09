import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  Logo: {
    width: 55,
    height: 55,
    resizeMode: "contain",
  },

  container: {
    flex: 1,
    backgroundColor: "#142c44", 
  },

  boxTop: {
    height: 180,
    backgroundColor: "#142c44",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
  },

  searchBar: {
    width: "90%",
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  boxMid: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    width: "100%",
    paddingTop: 15,
  },

  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 8,
    marginBottom: 5,
    color: "#111",
  },

  infoText: {
    fontSize: 12,
    marginLeft: 20,
    color: "#666",
  },

featuresContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%',
  marginTop: 20,
  marginBottom: 10,
},
featureItem: {
  alignItems: 'center',
  flex: 1, 
},
featureIconCircle: {
  width: 50,
  height: 50,
  borderRadius: 30,
  backgroundColor: '#ffffffff', 
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 8,
},
featureText: {
  fontSize: 12,
  color: '#555',
  textAlign: 'center',
},

  bestQuadras: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 18,
    marginBottom: 8,
    color: "#222",
  },

  cardQuadra: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  infoQuadra: {
    flex: 1,
    justifyContent: "center",
  },

  nameQuadra: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 2,
  },

  addressQuadra: {
    flex: 1,
    fontSize: 12,
    color: "#666",
    marginVertical: 2,
  },

  ratingsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },

  ratingText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#444",
    marginLeft: 4,
  },

  reviewsCount: {
    fontSize: 12,
    color: "#666",
    marginLeft: 5,
  },

  Atlanta: {
    width: 55,
    height: 55,
    borderRadius: 8,
    resizeMode: "contain",
    marginRight: 12,
  },

  boxBotton: {
    height: 80,
    backgroundColor: "#142c44",
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
    color: "#fff",
    marginTop: 2,
  },
});
