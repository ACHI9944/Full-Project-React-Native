import { StyleSheet } from "react-native";

const SignupFormStyle = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  signupForm: {
    width: "100%",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#bbaaf3",
    width: "90%",
    height: 48,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  pressedStyle: {
    backgroundColor: "#bbaaf3",
    width: "90%",
    height: 48,
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

export default SignupFormStyle;
