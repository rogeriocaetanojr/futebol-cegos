import { StyleSheet } from "react-native";

const HEADER_COLOR = "#142c44";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  localHeader: {
    backgroundColor: HEADER_COLOR,
    height: 105,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  headerTitle: {
    color: '#e5e4e4ff',
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    width: "31%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  statIcon: {
    marginBottom: 5,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  tabText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  tabTextActive: {
    color: HEADER_COLOR,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: HEADER_COLOR,
    paddingBottom: 4,
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "flex-end",
    elevation: 2,
  },
  cardLogo: {
    width: 45,
    height: 45,
    borderRadius: 8,
    marginRight: 12,
    alignSelf: "center",
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  cardDetailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  cardDetailText: {
    fontSize: 12,
    color: "#777",
    marginLeft: 4,
  },
  cardPriceContainer: {
    alignItems: "flex-end",
  },
  cardPrice: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#23c40aff",
  },
});