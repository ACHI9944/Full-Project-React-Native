import { StyleSheet } from "react-native";

const AuthFormStyle = StyleSheet.create({
  authForm: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#fbfbfb",
    borderRadius: 4,
    borderWidth: 0.5,
    width: "90%",
    marginBottom: 24,
    height: 48,
    paddingHorizontal: 10,
    paddingVertical: 3,
    justifyContent: "center",
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
    marginTop: 24,
    backgroundColor: "#bbaaf3",
    width: "90%",
    height: 48,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  pressedStyle: {
    marginTop: 24,
    backgroundColor: "#bbaaf3",
    width: "90%",
    height: 48,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
  },
  typingStyle: {
    backgroundColor: "#542ee0",
  },
  buttonTextStyle: {
    color: "white",
    fontSize: 17,
  },
});

export default AuthFormStyle;
