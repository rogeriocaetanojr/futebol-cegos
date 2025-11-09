import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 20,
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
    width: "48%",
  },
  filterText: {
    fontSize: 14,
    color: "#333",
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
    alignItems: "flex-end",
    justifyContent: "center",
    paddingLeft: 10,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  cardPriceLabel: {
    fontSize: 12,
    color: "#666",
  },
});
