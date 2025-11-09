import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  Logo: {
    width: 140,
    height: 140,
    resizeMode: "contain",
  },
  boxTop: {
    height: 170, 
    backgroundColor: "#142c44",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 24,
  },
  searchBar: {
    width: "90%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});