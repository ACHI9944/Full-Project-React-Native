import { StyleSheet } from "react-native";

const SignupScreenStyle = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  screen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  topBar: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
  },
  texts: {
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 35,
    fontWeight: "500",
  },
  infoText: {
    fontSize: 17,
    fontWeight: "400",
  },
  signupForm: {
    flex: 2.7,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignupScreenStyle;
