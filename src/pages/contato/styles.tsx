import { StyleSheet } from "react-native";

const HEADER_COLOR = "#142c44";
const CARD_BACKGROUND = "#ffffff";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
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
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },

  bodyContainer: {
    flex: 1,
    padding: 15,
  },

  card: {
    backgroundColor: CARD_BACKGROUND,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },

  linkText: {
    fontSize: 16,
    color: "#007bff",
    textAlign: "center",
    fontWeight: "500",
    paddingVertical: 5,
  },

  addressText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
    lineHeight: 20,
  },
  mapContainer: {
    height: 200,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  },
  mapImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  mapPin: {
    position: "absolute",
    top: "40%",
    left: "50%",
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "red",
    transform: [{ translateX: -10 }, { translateY: -10 }],
  },
  mapSourceText: {
    position: "absolute",
    bottom: 5,
    left: 5,
    fontSize: 10,
    color: "#555",
  },

  inputLabel: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  inputMessage: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    height: 100,
    textAlignVertical: "top",
  },
  sendButton: {
    backgroundColor: HEADER_COLOR,
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  floatingWhatsAppButton: {
    position: "absolute",
    bottom: 100,
    right: 20,
    backgroundColor: "#25D366",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 6,
    zIndex: 99,
  },
});
