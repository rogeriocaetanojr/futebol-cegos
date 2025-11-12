import { StyleSheet } from "react-native";
const HEADER_COLOR = '#142c44';

export const style = StyleSheet.create({
  localHeader: {
    backgroundColor: HEADER_COLOR,
    height: 105, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  headerTitle: {
    color: '#e5e4e4ff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 20,
  },
searchContainer: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#fff",
  width: "100%",
  height: 40,
  borderRadius: 10,
  paddingHorizontal: 12,
  borderWidth: 1,
  borderColor: "#ddd",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 2,
  marginBottom: -3,
  marginTop: 10,
},

searchIcon: {
  marginRight: 10,
},

searchInput: {
  flex: 1,
  height: "100%",
  fontSize: 14,
  color: "#333",
},

  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 15,
  },
  filterButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "49%",
  },
  filterText: {
    fontSize: 13,
    color: "#807f7fff",
  },

  resultsTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 10,
  },

  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardLogo: {
    width: 55,
    height: 55,
    borderRadius: 8,
    marginRight: 12,
  },
  cardInfoColumn: {
    flex: 1,
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },
  cardAddress: {
    fontSize: 12,
    color: "#666",
    marginVertical: 2,
  },
  cardRatingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  cardRatingText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#444",
    marginLeft: 4,
  },
  cardReviewsText: {
    fontSize: 12,
    color: "#666",
    marginLeft: 5,
  },
  cardPriceColumn: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },
  cardPrice: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#23c40aff",
  },
  cardPriceLabel: {
    fontSize: 12,
    color: "#9c9b9bff",
  },
});
