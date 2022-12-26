import { StyleSheet } from "react-native";

const LoginScreenStyle = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "white",
  },
  keyboardAvoidingView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  imageAndText: {
    alignItems: "center",
    marginTop: 70,
    marginBottom: 5,
  },

  image: {
    width: 80,
    height: 80,
  },

  gradientText: {
    fontSize: 50,
    fontFamily: "bona-nova",
  },
  authForm: {
    width: "100%",
    marginBottom: 120,
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
