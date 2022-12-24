import { StyleSheet } from "react-native";

const SingupModalOneStyle = StyleSheet.create({
  texts: {
    flex: 1,
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
    flex: 4.5,
    alignItems: "center",
  },
  scrollContent: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  scrollStyle: {
    width: "100%",
    height: "100%",
  },
  inputs: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  button: {
    backgroundColor: "#bbaaf3",
    width: "90%",
    height: 56,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 25,
  },
  pressedStyle: {
    backgroundColor: "#bbaaf3",
    width: "90%",
    height: 56,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
    marginTop: 20,
    marginBottom: 10,
  },
  validStyle: {
    backgroundColor: "#542ee0",
  },
  buttonTextStyle: {
    color: "white",
    fontSize: 17,
  },
});

export default SingupModalOneStyle;
