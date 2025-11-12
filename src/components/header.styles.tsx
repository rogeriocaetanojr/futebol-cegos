import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  boxTop: {
    backgroundColor: "#142c44",
    width: "100%",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },

  Logo: {
    width: 140,
    height: 120,
    resizeMode: "contain",
    marginBottom: 1, 
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "90%",
    height: 40,
    borderRadius: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ddd",
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
});