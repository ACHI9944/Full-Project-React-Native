import { StyleSheet } from "react-native";

const AuthFormStyle = StyleSheet.create({
  authForm: {
    width: "100%",
    alignItems: "center",
  },
  smallText: {
    marginBottom: 5,
    fontWeight: "100",
    fontSize: 10,
  },
  textInput: {
    fontSize: 17,
  },
  button: {
    backgroundColor: "#bbaaf3",
    width: "90%",
    height: 56,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  pressedStyle: {
    backgroundColor: "#bbaaf3",
    width: "90%",
    height: 56,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
  },
  validStyle: {
    backgroundColor: "#542ee0",
  },
  buttonTextStyle: {
    color: "white",
    fontSize: 17,
  },
});

export default AuthFormStyle;
