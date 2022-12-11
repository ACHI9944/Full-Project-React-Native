import { StyleSheet } from "react-native";

const LoginScreenStyle = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  imageAndText: {
    alignItems: "center",
    marginTop: 70,
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
    marginBottom: 70,
  },
  bottomText: {
    flexDirection: "row",
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
