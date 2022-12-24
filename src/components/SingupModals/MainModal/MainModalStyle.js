import { StyleSheet } from "react-native";

const MainModalStyle = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : null,
  },
  topBar: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 25,
  },
  header: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
  },
});

export default MainModalStyle;
