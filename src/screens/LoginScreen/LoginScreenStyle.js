import { StyleSheet } from "react-native";

const LoginScreenStyle = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "white",
  },
  keyboardAvoidingView: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageAndText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },

  authForm: {
    flex: 2,
    width: "100%",
    marginTop: 5,
  },
  bottomText: {
    flexDirection: "row",
    marginBottom: 5,
  },
  smallText: {
    fontSize: 15,
    fontWeight: "600",
    marginHorizontal: 5,
  },
  smallButtonText: {
    color: "#06b2c9",
    fontWeight: "600",
    fontSize: 15,
  },
});

export default LoginScreenStyle;
